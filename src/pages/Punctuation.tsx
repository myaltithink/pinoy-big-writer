import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaCaretLeft, FaRegStar, FaStar, FaLock } from "react-icons/fa";
import { useUserStore } from "../stores/useUserStore";
import { useEffect, useState } from "react";
import type { User, LevelProgress } from "../types";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";

const levelsName = ["Level 1", "Level 2", "Level 3"];

function Punctuation() {
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
    setLevels(user?.progress.punctuation ?? null);
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
          <FaLock className="text-9xl text-gray-500" />
        </motion.div>
      );
    }
    return completed ? (
      <FaStar key={index} className="text-9xl text-red-500" />
    ) : (
      <FaRegStar key={index} className="text-9xl text-red-500" />
    );
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-around bg-white p-4 font-sans punctuation">
      {/* Title */}
      <motion.div
        className="flex justify-center bg-red-500 px-6 py-3 rounded-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="text-5xl font-serif font-bold text-white">
          Punctuation Palace
        </span>
      </motion.div>

      {/* Main Buttons */}
      <div className=" mx-auto flex items-center justify-around w-full font-serif gap-6">
        {levels?.map((completed, idx) => {
          const unlocked = idx === 0 || levels[idx - 1];

          const linkPath = `/games/punctuation/level-${idx + 1}`;
          const levelContent = (
            <motion.div
              key={idx}
              className="w-32 flex flex-col items-center p-2 cursor-pointer gap-4"
              whileHover={unlocked ? { scale: 1.2 } : {}}
            >
              {renderLevelIcon(completed, idx)}
              {unlocked && (
                <span className="text-center text-3xl text-red-500 font-semibold break-words">
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

      {/* Back Link */}
      <Link to="/games">
        <motion.div
          className="w-24 h-24 bg-red-500 text-white rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <FaCaretLeft className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Punctuation;
