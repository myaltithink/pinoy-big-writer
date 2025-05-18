import { IoSettings, IoPerson } from "react-icons/io5";
import { FaPenToSquare, FaStar } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useUserStore } from "../stores/useUserStore";
import { useEffect } from "react";
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from "../utils/localstorage";
import type { User } from "../types";
import { formatRank } from "../utils/format";
import { FirestoreError } from "firebase/firestore";
import { getUsers, getUser } from "../services/User";
import { useScreenSize } from "../layouts/ScreenSizeProvider";

export default function Home() {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (!user) {
      const localUser = getLocalStorageItem<User>("user");

      if (localUser) {
        setLocalStorageItem("user", localUser);
        setUser(localUser);
      }
    }
  }, [user]);

  useEffect(() => {
    const doFetchRank = async () => {
      try {
        // 1. Fetch latest user data from Firebase
        const latestUser = await getUser(user!.username);
        if (!latestUser) {
          console.error("User not found in Firestore");
          return;
        }

        // 2. Fetch all users to calculate ranks
        const usersData = await getUsers();
        const sorted = usersData
          .map((u) => ({ username: u.username, points: u.points || 0 }))
          .sort((a, b) => b.points - a.points);

        // 3. Find the updated user's rank
        const me = sorted.findIndex((u) => u.username === latestUser.username);
        if (me >= 0) {
          const newRank = me + 1;
          const newPoints = sorted[me].points;

          const updated: User = {
            ...latestUser,
            ranking: newRank,
            points: newPoints,
          };

          // 4. Update app state and localStorage
          setUser(updated);
          setLocalStorageItem("user", updated);
        }
      } catch (e) {
        console.error("Error fetching rank in Home:", e);
        if (e instanceof FirestoreError) {
          console.error(e.code, e.message);
        }
      }
    };

    if (user) {
      doFetchRank();
    }
  }, [user, setUser]);

  const { isMediumScreen } = useScreenSize();

  return (
    <div
      className={`flex flex-col w-dvw h-dvh background ${
        isMediumScreen ? "p-4 gap-2" : "p-8 gap-8"
      }`}
    >
      <div className="self-center w-[90%] flex justify-between ">
        <motion.div
          className="flex items-center justify-center gap-4 bg-black/50 rounded-xl px-4 py-2"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <img src={user?.avatar} alt="" className="w-10 h-10  rounded-full " />
          <span
            className={`${isMediumScreen ? "text-md" : "text-2xl"} text-white`}
            style={{ fontFamily: "Arco" }}
          >
            {user?.username}
          </span>
        </motion.div>
        <div className="flex items-center gap-14">
          <Link to="/board/ranking">
            <motion.div
              className="min-w-[200px] flex justify-between items-center relative bg-black/50 px-4 py-4 rounded-xl cursor-pointer"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <span className="text-white" style={{ fontFamily: "Arco" }}>
                {formatRank(user?.ranking)}
              </span>
              <FaPenToSquare className="text-[#F3B73F] text-2xl" />
            </motion.div>
          </Link>
          <Link to="/board/achievements">
            <motion.div
              className="min-w-[200px] flex justify-between items-center relative bg-black/50 px-4 py-4 rounded-xl cursor-pointer"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <span className="text-white" style={{ fontFamily: "Arco" }}>
                {user?.points}
              </span>
              <FaStar className="text-[#F3B73F] text-2xl" />
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        <Link to="/settings">
          <motion.button
            className="p-4 bg-[#903145] rounded-xl border-6 border-black cursor-pointer"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <IoSettings className="text-3xl text-white" />
          </motion.button>
        </Link>

        <div className="flex-1 flex justify-center">
          <img src="house.png" alt="" className="w-[20vw]" />
        </div>

        <Link to="/profile">
          <motion.button
            className="p-4 bg-[#903145] rounded-xl border-6 border-black cursor-pointer"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <IoPerson className="text-3xl text-white" />
          </motion.button>
        </Link>
      </div>

      {!isMediumScreen ? (
        <div className="flex-1 flex items-center justify-around">
          <Link to="/vault">
            <motion.div
              className="flex flex-col min-h-[180px] min-w-[350px] bg-blue-500 rounded-xl border-6 border-black cursor-pointer"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div className="flex-1 flex justify-center items-center">
                <FaFolderOpen className="text-6xl text-white" />
              </div>
              <div
                className="text-center p-2 border-t-4 border-black bg-white text-blue-500"
                style={{ fontFamily: "Arco" }}
              >
                Stock Knowledge Vault
              </div>
            </motion.div>
          </Link>
          <Link to="/games">
            <motion.div
              className="flex flex-col min-h-[180px] min-w-[350px] bg-[#903145] rounded-xl border-6 border-black cursor-pointer"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div className="flex-1 flex justify-center items-center">
                <BsDoorOpenFill className="text-6xl text-white" />
              </div>
              <div
                className="text-center p-2 border-t-4 border-black bg-white text-[#903145]"
                style={{ fontFamily: "Arco" }}
              >
                Games
              </div>
            </motion.div>
          </Link>
          <Link to="/overview">
            <motion.div
              className="flex flex-col min-h-[180px] min-w-[350px] bg-green-500 rounded-xl border-6 border-black cursor-pointer"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div className="flex-1 flex justify-center items-center">
                <MdAssignment className="text-6xl text-white" />
              </div>
              <div
                className="text-center p-2 border-t-4 border-black bg-white text-green-500"
                style={{ fontFamily: "Arco" }}
              >
                Game Overview
              </div>
            </motion.div>
          </Link>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-around">
          <Link to="/vault">
            <motion.div
              className="flex flex-col min-h-[60px] min-w-[250px] bg-blue-500 rounded-xl border-6 border-black cursor-pointer"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div className="flex-1 flex justify-center items-center">
                <FaFolderOpen className="text-6xl text-white" />
              </div>
              <div
                className="text-center p-2 border-t-4 border-black bg-white text-blue-500"
                style={{ fontFamily: "Arco" }}
              >
                Stock Knowledge Vault
              </div>
            </motion.div>
          </Link>
          <Link to="/games">
            <motion.div
              className="flex flex-col min-h-[60px] min-w-[250px] bg-[#903145] rounded-xl border-6 border-black cursor-pointer"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div className="flex-1 flex justify-center items-center">
                <BsDoorOpenFill className="text-6xl text-white" />
              </div>
              <div
                className="text-center p-2 border-t-4 border-black bg-white text-[#903145]"
                style={{ fontFamily: "Arco" }}
              >
                Games
              </div>
            </motion.div>
          </Link>
          <Link to="/overview">
            <motion.div
              className="flex flex-col min-h-[60px] min-w-[250px] bg-green-500 rounded-xl border-6 border-black cursor-pointer"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div className="flex-1 flex justify-center items-center">
                <MdAssignment className="text-6xl text-white" />
              </div>
              <div
                className="text-center p-2 border-t-4 border-black bg-white text-green-500"
                style={{ fontFamily: "Arco" }}
              >
                Game Overview
              </div>
            </motion.div>
          </Link>
        </div>
      )}
    </div>
  );
}
