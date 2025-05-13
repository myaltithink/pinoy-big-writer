import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { FaFolderOpen, FaStar } from "react-icons/fa6";
import { useUserStore } from "../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type { User } from "../types";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { SiGoogleslides } from "react-icons/si";
import { BsDoorOpenFill } from "react-icons/bs";
import { useState } from "react";
import useSound from "use-sound";

// 1. Import your door sounds:
import doorOpenSfx from "/sounds/door-open.mp3";
import doorCloseSfx from "/sounds/door-close.mp3";
import { useSoundContext } from "../layouts/SoundProvider";

function Games() {
  const { user, setUser } = useUserStore();
  const [hovered, setHovered] = useState<number | null>(null);
  const { clickEnabled } = useSoundContext();
  const [volume, setVolume] = useState<number>(0.5);

  // 2. Initialize play functions for open/close
  const [playOpen] = useSound(doorOpenSfx, { volume: volume, interrupt: true });
  const [playClose] = useSound(doorCloseSfx, {
    volume: volume,
    interrupt: true,
  });

  useEffect(() => {
    if (!clickEnabled) {
      setVolume(0);
    } else {
      setVolume(0.5);
    }
  }, [clickEnabled]);

  const cards = [
    {
      path: "/games/capitalization",
      src: "/doors/door1",
      alt: "Capitalization Corner",
    },
    {
      path: "/games/punctuation",
      src: "/doors/door2",
      alt: "Punctuation Palace",
    },
    { path: "/games/spelling", src: "/doors/door3", alt: "Spelling Station" },
  ];

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
          Games
          <BsDoorOpenFill className="text-3xl text-[#F3B73F] " />
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 w-full flex items-center justify-around gap-8 p-8 border-8 rounded-xl rounded-tl-none border-black/50 bg-black/25">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6 + idx * 0.2,
              duration: 0.5,
              type: "spring",
            }}
            whileHover={{ scale: 1.05 }}
            className="w-full flex flex-col items-center"
          >
            <Link
              to={card.path}
              className="w-full flex flex-col items-center justify-center"
            >
              <motion.img
                // 3a. onMouseEnter: mark hovered, play open SFX
                onMouseEnter={() => {
                  setHovered(idx);
                  playOpen();
                }}
                // 3b. onMouseLeave: clear hover, play close SFX
                onMouseLeave={() => {
                  setHovered(null);
                  playClose();
                }}
                src={
                  hovered === idx ? `${card.src}-open.png` : `${card.src}.png`
                }
                alt={card.alt}
                className="w-[150px]"
                transition={{ duration: 0.3 }}
                whileHover={{
                  scale: 0.95,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                }}
              />
              <span
                className="text-xl text-center text-white mt-2 outlined-text-white "
                style={{ fontFamily: "Arco" }}
              >
                {card.alt}
              </span>
            </Link>
          </motion.div>
        ))}
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

export default Games;
