import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import type { User } from "../types";

export const addUser = async (user: User) => {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getUsers = async () => {
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  const usersList: User[] = [];
  usersSnapshot.forEach((doc) => {
    usersList.push(doc.data() as User);
  });
  return usersList;
};

export const getUser = async (username: string) => {
  const usersCol = collection(db, "users");
  const q = query(usersCol, where("username", "==", username));
  const querySnapshot = await getDocs(q);
  const user = querySnapshot.docs[0]?.data() as User;
  return user;
};

export const updateUser = async (
  username: string,
  updatedData: Partial<User>
) => {
  const usersCol = collection(db, "users");
  const q = query(usersCol, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userRef = querySnapshot.docs[0].ref;
    try {
      await updateDoc(userRef, updatedData);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  } else {
    console.error("User not found");
  }
};
