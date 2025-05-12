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
  capitalization: "completedAllCapitalization",
  punctuation: "completedAllPunctuation",
  spelling: "completedAllSpelling",
};
export async function markLevelComplete(
  username: string,
  room: Room,
  levelIndex: number,
  setUserState: (u: User) => void
) {
  const user = getLocalStorageItem("user") as User | null;
  if (!user) {
    console.error("No user in localStorage");
    return;
  }

  const updatedRoomLevels: LevelProgress = user.progress[room].map(
    (done, idx) => (idx === levelIndex ? true : done)
  ) as LevelProgress;

  const newRoomProgress: RoomProgress = {
    ...user.progress,
    [room]: updatedRoomLevels,
  };

  const achievements = [...user.achievements];
  let additionalPoints = 0;

  // Per-level achievement
  const levelKey = `completed${capitalize(room)}Level${
    levelIndex + 1
  }` as Achievements;

  if (updatedRoomLevels[levelIndex] && !achievements.includes(levelKey)) {
    achievements.push(levelKey);
    console.log(`Achievement unlocked: ${levelKey}`);
    additionalPoints += 10; // ✅ Add 10 points for new level completion
  }

  // Full-room achievement
  const fullKey = roomToAchievementMap[room];
  if (updatedRoomLevels.every((v) => v) && !achievements.includes(fullKey)) {
    achievements.push(fullKey);
    console.log(`Achievement unlocked: ${fullKey}`);
    additionalPoints += 30; // ✅ Optional: Add bonus points for full room
  }

  const updatedUser: User = {
    ...user,
    progress: newRoomProgress,
    achievements,
    points: user.points + additionalPoints, // ✅ Update user points
  };

  setLocalStorageItem("user", updatedUser);
  setUserState(updatedUser);

  try {
    await updateUser(username, {
      progress: newRoomProgress,
      achievements: updatedUser.achievements,
      points: updatedUser.points, // ✅ Sync new points to backend
    });
    console.log(`Progress synced for ${room}[${levelIndex}]`);
  } catch (e) {
    console.error("Firestore update failed:", e);
  }
}
