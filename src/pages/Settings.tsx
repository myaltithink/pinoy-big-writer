import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { useUserStore } from "../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type { User } from "../types";
import { FaCog } from "react-icons/fa";
import { useSoundContext } from "../layouts/SoundProvider";

// Placeholder for image import (replace with actual image paths)
import anjenethImage from "/anjeneth.png";
import cherImage from "/cher.png";
import madisonImage from "/madison.png";
import micaelaImage from "/micaela.png";
import { useScreenSize } from "../layouts/ScreenSizeProvider";

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

  const { isMediumScreen } = useScreenSize();

  return (
    <div
      className={`w-dvw h-dvh flex flex-col items-center background ${
        isMediumScreen ? "p-2" : "p-8"
      }`}
    >
      {/* Tabs */}
      <div className="w-full flex items-center justify-start">
        <span
          className={`text-${
            isMediumScreen ? "lg px-2 py-1" : "3xl px-6 py-3"
          } bg-black/50 rounded-t-3xl text-white flex items-center gap-4 border-8 border-black/50 cursor-pointer`}
          style={{ fontFamily: "Arco" }}
        >
          Settings
          <FaCog
            className={`text-${isMediumScreen ? "xl" : "3xl"} text-[#F3B73F]`}
          />
        </span>
      </div>
      {/* Content */}

      {!isMediumScreen ? (
        <div
          className={`flex-1 w-full flex items-center justify-around gap-${
            isMediumScreen ? "2" : "8"
          } p-${
            isMediumScreen ? "2" : "8"
          } border-8 rounded-xl rounded-tl-none border-[#000000]/50 bg-[#000000]/25`}
        >
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
            <span
              className="text-center text-5xl text-white"
              style={{ fontFamily: "Arco" }}
            >
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
      ) : (
        <div
          className={`flex-1 w-full flex items-center justify-around gap-${
            isMediumScreen ? "2" : "8"
          } p-${
            isMediumScreen ? "2" : "8"
          } border-8 rounded-xl rounded-tl-none border-[#000000]/50 bg-[#000000]/25`}
        >
          <div className="w-full flex flex-col items-center gap-2">
            <div className="h-fit flex items-center justify-around bg-yellow-500 px-4 py-2 rounded-xl w-[50%] ">
              <span
                className="text-lg text-white flex items-center gap-2"
                style={{ fontFamily: "Arco" }}
              >
                Music
              </span>
              <button
                className={`relative w-12 h-6 rounded-full transition duration-200 ease-in-out focus:outline-none ${
                  musicEnabled ? "bg-green-900/75" : "bg-black/25"
                }`}
                onClick={toggleMusic}
              >
                <span
                  className={`absolute top-[0px] left-[8px] w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${
                    musicEnabled ? "translate-x-4" : "-translate-x-2"
                  }`}
                />
              </button>
            </div>
            <div className="h-fit flex items-center justify-around bg-yellow-500 px-4 py-2 rounded-xl w-[50%] ">
              <span
                className="text-lg text-white flex items-center gap-2"
                style={{ fontFamily: "Arco" }}
              >
                Sounds
              </span>
              <button
                className={`relative w-12 h-6 rounded-full transition duration-200 ease-in-out focus:outline-none ${
                  clickEnabled ? "bg-green-900/75" : "bg-black/25"
                }`}
                onClick={toggleClickSound}
              >
                <span
                  className={`absolute top-[0px] left-[8px] w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${
                    clickEnabled ? "translate-x-4" : "-translate-x-2"
                  }`}
                />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="text-white underline text-md"
                  style={{ fontFamily: "Arco" }}
                >
                  Font:
                </span>
                <span
                  className="text-white text-md"
                  style={{ fontFamily: "Arco" }}
                >
                  Arco
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-white underline text-md"
                  style={{ fontFamily: "Arco" }}
                >
                  Music & SFX:
                </span>
                <span
                  className="text-white text-md"
                  style={{ fontFamily: "Arco" }}
                >
                  Pixabay
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-white underline text-md"
                  style={{ fontFamily: "Arco" }}
                >
                  Graphics:
                </span>
                <span
                  className="text-white text-md"
                  style={{ fontFamily: "Arco" }}
                >
                  Canva
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span
              className="text-center text-xl text-white"
              style={{ fontFamily: "Arco" }}
            >
              Credits
            </span>
            <div className="flex items-start justify-around gap-2 w-full">
              <div className="flex flex-col gap-4">
                <span
                  className="text-white underline text-lg"
                  style={{ fontFamily: "Arco" }}
                >
                  Creators:
                </span>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    {creators
                      .slice(0, Math.ceil(creators.length / 2))
                      .map((creator) => (
                        <div
                          key={creator.name}
                          className="flex items-center gap-2"
                        >
                          {creator.image && (
                            <div className="w-20 rounded-full overflow-hidden border-4 border-white bg-black/50">
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
                            <div className="w-20 rounded-full overflow-hidden border-4 border-white bg-black/50">
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
            </div>
          </div>
        </div>
      )}
      {/* Home Button */}
      <Link to="/home">
        <motion.div
          className={`w-${isMediumScreen ? 12 : 16} h-${
            isMediumScreen ? 12 : 16
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
            <TiHome
              className={`w-${isMediumScreen ? 8 : 8} h-${
                isMediumScreen ? 8 : 8
              }`}
            />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}
