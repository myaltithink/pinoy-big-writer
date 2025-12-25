import { updateUser } from "../services/User";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type {
  User,
  Room,
  LevelProgress,
  RoomProgress,
  Achievements,
} from "../types";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Map full-room completion achievements
const roomToAchievementMap: Record<Room, Achievements> = {
  content: "completeAllContent",
  grammar: "completeAllGrammar",
  mechanics: "completeAllMechanic",
  organization: "completeAllOrganization",
  vocabulary: "completeAllVocabulary"
};
export async function markLevelComplete(
  username: string,
  room: Room,
  levelIndex: number,
  setUserState: (u: User) => void,
  starsAchieved: number // Add this parameter to receive the number of stars
) {
  const user = getLocalStorageItem("user") as User | null;
  if (!user) {
    console.error("No user in localStorage");
    return;
  }

  const currentLevelStatus = user.progress[room]?.[levelIndex];
  const updatedRoomLevels: LevelProgress = user.progress[room].map(
    (done, idx) => (idx === levelIndex ? true : done)
  ) as LevelProgress;

  const newRoomProgress: RoomProgress = {
    ...user.progress,
    [room]: updatedRoomLevels,
  };

  const achievements = [...user.achievements];
  let additionalPoints = 0;

  // Points based on stars achieved only if the level was not already completed
  if (!currentLevelStatus) {
    // Points based on stars achieved (maximum 10 stars)
    const pointsForStars = Math.min(starsAchieved, 10) * 5; // Example: 5 points per star
    additionalPoints += pointsForStars;
    console.log(`Points for ${starsAchieved} stars: ${pointsForStars}`);
  }

  // Per-level achievement
  const levelKey = `completed${capitalize(room)}Level${
    levelIndex + 1
  }` as Achievements;

  if (
    updatedRoomLevels[levelIndex] &&
    !achievements.includes(levelKey) &&
    !currentLevelStatus
  ) {
    achievements.push(levelKey);
    console.log(`Achievement unlocked: ${levelKey}`);
    additionalPoints += 10; // Add 10 points for new level completion
  }

  // Full-room achievement
  const fullKey = roomToAchievementMap[room];
  if (updatedRoomLevels.every((v) => v) && !achievements.includes(fullKey)) {
    achievements.push(fullKey);
    console.log(`Achievement unlocked: ${fullKey}`);
    additionalPoints += 30; // Optional: Add bonus points for full room
  }

  const updatedUser: User = {
    ...user,
    progress: newRoomProgress,
    achievements,
    points: user.points + additionalPoints, // Update user points
  };

  setLocalStorageItem("user", updatedUser);
  setUserState(updatedUser);

  try {
    await updateUser(username, {
      progress: newRoomProgress,
      achievements: updatedUser.achievements,
      points: updatedUser.points, // Sync new points to backend
    });
    console.log(`Progress synced for ${room}[${levelIndex}]`);
  } catch (e) {
    console.error("Firestore update failed:", e);
  }
}

// Example of how you might call the function with the number of stars:
// markLevelComplete("testUser", "capitalization", 0, setUser, 3);
