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
import { FaCog } from "react-icons/fa";
import { useSoundContext } from "../layouts/SoundProvider";

// Placeholder for image import (replace with actual image paths)
import anjenethImage from "/anjeneth.png";
import cherImage from "/cher.png";
import madisonImage from "/madison.png";
import micaelaImage from "/micaela.png";

interface Creator {
  name: string;
  image: string | null; // Allow for no image
}

const creators: Creator[] = [
  { name: "Anjeneth Mariano", image: anjenethImage },
  { name: "Cher Bautista", image: cherImage },
  { name: "Madison Reyes", image: madisonImage },
  { name: "Micaela Salvador", image: micaelaImage },
];

export default function Settings() {
  const { user, setUser } = useUserStore();
  const { toggleMusic, toggleClickSound, musicEnabled, clickEnabled } =
    useSoundContext();

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
      {/* Tabs */}
      <div className="w-full flex items-center justify-start">
        <span
          className={`text-3xl bg-[#000000]/50 px-6 py-3 rounded-t-3xl text-white flex items-center gap-4 border-8 border-[#000000]/50 cursor-pointer`}
          style={{ fontFamily: "Arco" }}
        >
          Settings
          <FaCog className="text-5xl text-yellow-500" />
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 w-full flex items-center justify-around gap-8 p-8 border-8 rounded-xl rounded-tl-none border-[#000000]/50 bg-[#000000]/25">
        <div className="flex flex-col gap-8">
          <div className="h-fit flex items-center justify-around bg-yellow-500 px-8 py-4 rounded-xl min-w-[300px]">
            <span
              className="text-4xl text-white flex items-center gap-2"
              style={{ fontFamily: "Arco" }}
            >
              Music
            </span>
            <button
              className={`relative w-16 h-8 rounded-full transition duration-200 ease-in-out focus:outline-none ${
                musicEnabled ? "bg-green-900/75" : "bg-black/25"
              }`}
              onClick={toggleMusic}
            >
              <span
                className={`absolute top-[2px] left-[2px] w-7 h-7 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${
                  musicEnabled ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <div className="h-fit flex items-center justify-around bg-yellow-500 px-8 py-4 rounded-xl min-w-[300px]">
            <span
              className="text-4xl text-white flex items-center gap-2"
              style={{ fontFamily: "Arco" }}
            >
              Sounds
            </span>
            <button
              className={`relative w-16 h-8 rounded-full transition duration-200 ease-in-out focus:outline-none ${
                clickEnabled ? "bg-green-900/75" : "bg-black/25"
              }`}
              onClick={toggleClickSound}
            >
              <span
                className={`absolute top-[2px] left-[2px] w-7 h-7 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${
                  clickEnabled ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <span className="text-5xl text-white" style={{ fontFamily: "Arco" }}>
            Credits
          </span>
          <div className="flex items-start justify-around gap-8 w-full">
            <div className="flex flex-col gap-4">
              <span
                className="text-white underline text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Creators:
              </span>
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  {creators
                    .slice(0, Math.ceil(creators.length / 2))
                    .map((creator) => (
                      <div
                        key={creator.name}
                        className="flex items-center gap-2"
                      >
                        {creator.image && (
                          <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-white bg-black/50">
                            <img
                              src={creator.image}
                              alt={creator.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        )}
                        <span
                          className="text-white text-xl"
                          style={{ fontFamily: "Arco" }}
                        >
                          {creator.name}
                        </span>
                      </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                  {creators
                    .slice(Math.ceil(creators.length / 2))
                    .map((creator) => (
                      <div
                        key={creator.name}
                        className="flex items-center gap-2"
                      >
                        {creator.image && (
                          <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-white bg-black/50">
                            <img
                              src={creator.image}
                              alt={creator.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        )}
                        <span
                          className="text-white text-xl"
                          style={{ fontFamily: "Arco" }}
                        >
                          {creator.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span
                  className="text-white underline text-xl"
                  style={{ fontFamily: "Arco" }}
                >
                  Font:
                </span>
                <span
                  className="text-white text-xl"
                  style={{ fontFamily: "Arco" }}
                >
                  Arco
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-white underline text-xl"
                  style={{ fontFamily: "Arco" }}
                >
                  Music & SFX:
                </span>
                <span
                  className="text-white text-xl"
                  style={{ fontFamily: "Arco" }}
                >
                  Pixabay
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-white underline text-xl"
                  style={{ fontFamily: "Arco" }}
                >
                  Graphics:
                </span>
                <span
                  className="text-white text-xl"
                  style={{ fontFamily: "Arco" }}
                >
                  Canva
                </span>
              </div>
            </div>
          </div>
        </div>
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
