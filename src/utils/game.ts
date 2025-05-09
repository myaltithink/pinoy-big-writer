import { updateUser } from "../services/User";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type { User, Room, LevelProgress, RoomProgress } from "../types";

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

  // Update only the specific room's level progress
  const updatedRoomLevels: LevelProgress = user.progress[room].map(
    (done, idx) => (idx === levelIndex ? true : done)
  ) as LevelProgress;

  const newRoomProgress: RoomProgress = {
    ...user.progress,
    [room]: updatedRoomLevels,
  };

  const updatedUser: User = {
    ...user,
    progress: newRoomProgress,
  };

  // Update local state and localStorage
  setLocalStorageItem("user", updatedUser);
  setUserState(updatedUser);

  // Sync to Firestore
  try {
    await updateUser(username, {
      progress: newRoomProgress,
    });
    console.log(`Progress synced for ${room}[${levelIndex}]`);
  } catch (e) {
    console.error("Firestore update failed:", e);
  }
}
