import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { FaFolderOpen } from "react-icons/fa6";
import { FaCaretLeft, FaRegStar, FaStar, FaLock } from "react-icons/fa";
import { useUserStore } from "../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type { User, LevelProgress } from "../types";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { SiGoogleslides } from "react-icons/si";
import { BsDoorOpenFill } from "react-icons/bs";

const levelsName = ["Beginner", "Advance", "Intermediate"];

function Spelling() {
  const { user, setUser } = useUserStore();
  const [levels, setLevels] = useState<LevelProgress | null>(null);

  useEffect(() => {
    if (!user) {
      const localUser = getLocalStorageItem<User>("user");

      if (localUser) {
        setLocalStorageItem("user", localUser);
        setUser(localUser);
      }
    }
    setLevels(user?.progress.spelling ?? null);
  }, [user]);

  const renderLevelIcon = (completed: boolean, index: number) => {
    if (!levels) return null;

    const unlocked = index === 0 || levels[index - 1];
    if (!unlocked) {
      return (
        <motion.div
          key={index}
          className="text-8xl"
          whileHover={{ x: [0, -3, 3, -3, 3, 0] }}
          transition={{ duration: 0.6 }}
        >
          <FaLock className="text-9xl text-gray-600" />
        </motion.div>
      );
    }
    return completed ? (
      <FaStar key={index} className="text-9xl text-green-400" />
    ) : (
      <FaRegStar key={index} className="text-9xl text-green-400" />
    );
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center spelling p-8">
      {/* Top bar */}
      <div className="w-[90%] flex justify-end">
        <div className="flex items-center gap-14">
          <Link to="/board/achievements">
            <motion.div
              className="min-w-[200px] flex justify-between items-center bg-black/50 px-4 py-2 rounded-xl cursor-pointer"
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

      {/* Tabs */}
      <div className="w-full flex items-center justify-start">
        <span
          className={`text-3xl bg-black/50 px-6 py-3 rounded-t-3xl text-white flex items-center gap-4 border-8 border-black/50 cursor-pointer`}
          style={{ fontFamily: "Arco" }}
        >
          Spelling Station
          <span className="text-2xl w-fit h-fit text-white bg-green-400 rounded-full p-2 flex items-center justify-center">
            A_
          </span>
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 w-full flex items-center justify-around gap-8 p-8 border-8 rounded-xl rounded-tl-none border-black/50 bg-[#E6FECB]/25">
        {levels?.map((completed, idx) => {
          const unlocked = idx === 0 || levels[idx - 1];

          const linkPath = `/games/spelling/level-${idx + 1}`;
          const levelContent = (
            <motion.div
              key={idx}
              className="min-w-32 flex flex-col items-center p-4 cursor-pointer gap-4 "
              whileHover={unlocked ? { scale: 1.2 } : {}}
            >
              {renderLevelIcon(completed, idx)}
              {unlocked && (
                <span
                  className="text-center text-3xl text-black/75 font-semibold break-words"
                  style={{ fontFamily: "Arco" }}
                >
                  {levelsName[idx]}
                </span>
              )}
            </motion.div>
          );

          return unlocked ? (
            <Link key={idx} to={linkPath}>
              {levelContent}
            </Link>
          ) : (
            levelContent
          );
        })}
      </div>

      {/* Home Button */}
      <Link to="/games">
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
            <BsDoorOpenFill className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

function VaultCard({
  title,
  bg,
  iconColor,
}: {
  title: string;
  bg: string;
  iconColor: string;
}) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-4 p-6 rounded-xl border-6 border-white`}
      style={{ backgroundColor: bg, cursor: "pointer" }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      }}
    >
      <FaFolderOpen className={`text-[15rem] text-${iconColor}`} />
      <span className="text-black/75 text-3xl" style={{ fontFamily: "Arco" }}>
        {title}
      </span>
    </motion.div>
  );
}

export default Spelling;
