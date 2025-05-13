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

  return (
    <div className="flex flex-col gap-8 w-screen h-screen background p-8">
      <div className="w-[90%] flex justify-end ">
        <div className="flex items-center gap-14">
          <Link to="/board/ranking">
            <motion.div
              className="min-w-[200px] flex justify-between items-center relative bg-black/50 px-4 py-2 rounded-xl cursor-pointer"
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
              className="min-w-[200px] flex justify-between items-center relative bg-black/50 px-4 py-2 rounded-xl cursor-pointer"
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
          <img src="house.png" alt="" className="w-[325px]" />
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
    </div>
  );
}
