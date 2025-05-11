import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { useSoundContext } from "../layouts/SoundProvider";
import { HiLightBulb } from "react-icons/hi";
import { useUserStore } from "../stores/useUserStore";
import { formatRank } from "../utils/format";
import { FaPenToSquare, FaStar } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from "../utils/localstorage";
import type { User } from "../types";

function Vault() {
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
    <div className="w-screen h-screen flex flex-col items-center background p-8">
      <div className="w-[90%] flex justify-end ">
        <div className="flex items-center gap-14">
          <Link to="/achievements">
            <motion.div
              className="min-w-[200px] flex justify-between items-center relative bg-black/50 px-4 py-2 rounded-xl cursor-pointer"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.5,
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
      <div className="w-full flex items-center justify-start">
        <span
          className="text-center text-5xl w-fit  bg-black/50 px-6 py-3 rounded-t-3xl outlined-text flex items-center gap-4"
          style={{ fontFamily: "Arco" }}
        >
          Practice Station
          <HiLightBulb className="inline-block text-[#F3B73F] " />
        </span>
      </div>
      <div className="flex-1 w-full flex items-center justify-around just gap-8 p-8 border-8 rounded-xl rounded-tl-none border-black/50 bg-black/25">
        <motion.div
          className="flex flex-col items-center gap-4 bg-[#FEECAA] p-6 rounded-xl border-6 border-white"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
          }}
          style={{ cursor: "pointer" }}
        >
          <FaFolderOpen className="text-[15rem] text-yellow-400" />
          <span
            className="text-yellow-400 text-3xl"
            style={{ fontFamily: "Arco" }}
          >
            Capitalization
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-4 bg-[#E6FECB] p-6 rounded-xl border-6 border-white"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
          }}
          style={{ cursor: "pointer" }}
        >
          <FaFolderOpen className="text-[15rem] text-green-400" />
          <span
            className="text-green-400 text-3xl"
            style={{ fontFamily: "Arco" }}
          >
            Punctuation
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-4 bg-[#F8D7D7] p-6 rounded-xl border-6 border-white"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
          }}
          style={{ cursor: "pointer" }}
        >
          <FaFolderOpen className="text-[15rem] text-red-400" />
          <span
            className="text-red-400 text-3xl"
            style={{ fontFamily: "Arco" }}
          >
            Spelling
          </span>
        </motion.div>
      </div>

      {/* Home Button */}
      <Link to="/home">
        <motion.div
          className="w-16 h-16 bg-black/50 text-white rounded-full flex items-center justify-center cursor-pointer mt-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TiHome className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Vault;
