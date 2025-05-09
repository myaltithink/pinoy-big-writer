import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaStar, FaRegStar } from "react-icons/fa";
import useSound from "use-sound";
import type { User, Achievements } from "../types";

import doorOpenSfx from "/sounds/door-open.mp3";
import doorCloseSfx from "/sounds/door-close.mp3";

// Star thresholds: each room has 3 level achievements
const roomKeys = [
  { key: "capitalization", label: "Capitalization" },
  { key: "punctuation", label: "Punctuation" },
  { key: "spelling", label: "Spelling" },
];

const starAchievements: Record<string, string[]> = {
  capitalization: [
    "completedCapitalizationLevel1",
    "completedCapitalizationLevel2",
    "completedCapitalizationLevel3",
  ],
  punctuation: [
    "completedPunctuationLevel1",
    "completedPunctuationLevel2",
    "completedPunctuationLevel3",
  ],
  spelling: [
    "completedSpellingLevel1",
    "completedSpellingLevel2",
    "completedSpellingLevel3",
  ],
};

function Achievements() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [achievements, setAchievements] = useState<string[]>([]);

  const [playOpen] = useSound(doorOpenSfx, { volume: 0.5, interrupt: true });
  const [playClose] = useSound(doorCloseSfx, { volume: 0.5, interrupt: true });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed: User = JSON.parse(user);
      setAchievements(parsed.achievements);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center bg-white p-4 font-sans stripes">
      {/* Title */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="text-7xl font-serif font-bold text-[#F5BF2F]">
          Achievements
        </span>
      </motion.div>

      {/* Star Cards */}
      <div className="mx-auto flex items-center justify-center w-full gap-8">
        {roomKeys.map((room, idx) => {
          const roomStars = starAchievements[room.key];
          const count = roomStars.filter((ach) =>
            achievements.includes(ach)
          ).length;
          return (
            <motion.div
              key={room.key}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6 + idx * 0.2,
                duration: 0.5,
                type: "spring",
              }}
              whileHover={{ scale: 1.05 }}
              className="w-1/4 bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer"
              onMouseEnter={() => {
                setHovered(idx);
                playOpen();
              }}
              onMouseLeave={() => {
                setHovered(null);
                playClose();
              }}
            >
              <Link
                to={`/games/${room.key}`}
                className="w-full flex flex-col items-center"
              >
                <div className="text-2xl font-semibold mb-4">{room.label}</div>
                <div className="flex space-x-2">
                  {Array.from({ length: 3 }).map((_, i) =>
                    i < count ? (
                      <FaStar key={i} className="w-8 h-8 text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="w-8 h-8 text-gray-300" />
                    )
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Home Button */}
      <Link to="/home">
        <motion.div
          className="w-24 h-24 bg-yellow-500 text-white rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TiHome className="w-12 h-12" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Achievements;
