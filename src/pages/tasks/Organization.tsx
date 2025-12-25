import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegStar, FaStar, FaLock } from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import { AiOutlineFontColors } from "react-icons/ai"; // Import a spelling-related icon
import { useUserStore } from "../../stores/useUserStore";
import type { LevelProgress, User } from "../../types";
import { useScreenSize } from "../../layouts/ScreenSizeProvider";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils/localstorage";

const levelsName = ["Beginner", "Intermediate", "Advanced"];

function Organization() {
  const { user, setUser } = useUserStore();
  const [levels, setLevels] = useState<LevelProgress | null>(null);
  const { isMediumScreen } = useScreenSize(); // Get screen size

  useEffect(() => {
    if (!user) {
      const localUser = getLocalStorageItem<User>("user");

      if (localUser) {
        setLocalStorageItem("user", localUser);
        setUser(localUser);
      }
    }
    setLevels(user?.progress.organization ?? null);
  }, [user]);

  const renderLevelIcon = (completed: boolean, index: number) => {
    if (!levels) return null;

    const unlocked = index === 0 || levels[index - 1];
    const iconSize = isMediumScreen ? "text-6xl" : "text-9xl"; // Responsive icon size

    if (!unlocked) {
      return (
        <motion.div
          key={index}
          whileHover={{ x: [0, -3, 3, -3, 3, 0] }}
          transition={{ duration: 0.6 }}
        >
          <FaLock className={`${iconSize} text-gray-600`} />
        </motion.div>
      );
    }
    return completed ? (
      <FaStar key={index} className={`${iconSize} text-pink-400`} />
    ) : (
      <FaRegStar key={index} className={`${iconSize} text-pink-400`} />
    );
  };

  return (
    <div
      className={`w-dvw h-dvh flex flex-col items-center organization-bg ${
        isMediumScreen ? "p-2" : "p-8" // Responsive padding
      }`}
    >
      {/* Top bar */}
      <div
        className={`${
          isMediumScreen ? "w-[100%]" : "w-[90%]" // Responsive width
        } flex justify-end`}
      >
        <div className="flex items-center gap-14">
          <Link to="/board/achievements">
            <motion.div
              className={`flex justify-between items-center bg-black/50 px-4 py-2 rounded-xl cursor-pointer ${
                isMediumScreen ? "min-w-[150px]" : "min-w-[200px]" // Responsive width
              }`}
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
          className={`text-${
            isMediumScreen ? "lg px-2 py-1" : "3xl px-6 py-3" // Responsive text and padding
          } bg-black/50 rounded-t-3xl text-white flex items-center gap-4 border-8 border-black/50 cursor-pointer`}
          style={{ fontFamily: "Arco" }}
        >
          Organization Station
          <span
            className={`text-${
              isMediumScreen ? "lg" : "4xl"
            } w-fit h-fit text-white bg-pink-400 rounded-full p-2 flex items-center justify-center`}
          >
            <AiOutlineFontColors /> {/* Using a spelling-related icon */}
          </span>
        </span>
      </div>

      {/* Content */}
      <div
        className={`flex-1 w-full flex items-center justify-around gap-${
          isMediumScreen ? "2" : "8" // Responsive gap
        } p-${
          isMediumScreen ? "2" : "8" // Responsive padding
        } border-8 rounded-xl rounded-tl-none border-black/50 bg-[#E6FECB]/25`}
      >
        {levels?.map((completed, idx) => {
          const unlocked = idx === 0 || levels[idx - 1];

          const linkPath = `/tasks/organization/level-${idx + 1}`;
          const levelContent = (
            <motion.div
              key={idx}
              className={`min-w-32 flex flex-col items-center p-4 cursor-pointer gap-4 `}
              whileHover={unlocked ? { scale: 1.2 } : {}}
            >
              {renderLevelIcon(completed, idx)}
              {unlocked && (
                <span
                  className={`text-center ${
                    isMediumScreen ? "text-xl" : "text-3xl" // Responsive text
                  } text-black/75 font-semibold break-words`}
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
      <Link to="/task-room">
        <motion.div
          className={`w-${isMediumScreen ? 12 : 16} h-${
            isMediumScreen ? 12 : 16 // Responsive size
          } bg-black/50 text-white rounded-full flex items-center justify-center cursor-pointer mt-4`}
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

export default Organization;
