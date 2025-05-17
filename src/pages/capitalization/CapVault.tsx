import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFolderOpen, FaStar } from "react-icons/fa6";
import { useUserStore } from "../../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/localstorage";
import type { User } from "../../types";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { SiGoogleslides } from "react-icons/si";
import { useScreenSize } from "../../layouts/ScreenSizeProvider";

function CapVault() {
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

  const { isMediumScreen } = useScreenSize();

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center background ${
        isMediumScreen ? "p-2" : "p-8"
      }`}
    >
      {/* Top bar */}
      <div
        className={`w-${isMediumScreen ? "[100%]" : "[90%]"} flex justify-end`}
      >
        <div className="flex items-center gap-14">
          <Link to="/board/achievements">
            <motion.div
              className={`flex justify-between items-center bg-black/50 px-4 py-2 rounded-xl cursor-pointer ${
                isMediumScreen ? "min-w-[150px]" : "min-w-[200px]"
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
            isMediumScreen ? "lg px-2 py-1" : "3xl px-6 py-3"
          } bg-black/50 rounded-t-3xl text-white flex items-center gap-4 border-8 border-black/50 cursor-pointer`}
          style={{ fontFamily: "Arco" }}
        >
          Capitalization
          <RxLetterCaseCapitalize
            className={`text-${
              isMediumScreen ? "3xl" : "5xl"
            } text-white bg-[#F3B73F] p-2 rounded-full`}
          />
        </span>
      </div>

      {/* Content */}
      <div
        className={`flex-1 w-full flex items-center justify-around ${
          isMediumScreen ? "gap-4 p-4" : "gap-8 p-8"
        } border-8 rounded-xl rounded-tl-none border-black/50 bg-black/25`}
      >
        <motion.div
          className={`bg-[#FEECAA] flex items-center gap-4 p-6 rounded-xl border-6 border-white ${
            isMediumScreen ? "flex-row h-[150px]" : "flex-col h-[350px]"
          }`}
          style={{ cursor: "pointer" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
          }}
          onClick={() =>
            window.open("/docs/rules-of-caps.pdf", "_blank", "noopener")
          }
        >
          <SiGoogleslides
            className={`text-[${isMediumScreen ? 10 : 15}rem] text-yellow-500`}
          />
          <span
            className={`text-black/75 ${
              isMediumScreen ? "text-lg" : "text-3xl"
            }`}
            style={{ fontFamily: "Arco", wordWrap: "break-word" }}
          >
            Rules of Capitalization
          </span>
        </motion.div>

        <motion.div
          className={`bg-[#FEECAA] flex flex-col items-center gap-4 p-6 rounded-xl border-6 border-white ${
            isMediumScreen ? "flex-row h-[150px]" : "flex-col h-[350px]"
          }`}
          style={{ cursor: "pointer" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
          }}
          onClick={() =>
            window.open(
              "/docs/importance-of-mechanics.pdf",
              "_blank",
              "noopener"
            )
          }
        >
          <SiGoogleslides
            className={`text-[${isMediumScreen ? 10 : 15}rem] text-yellow-500`}
          />
          <span
            className={`text-black/75 ${
              isMediumScreen ? "text-lg" : "text-3xl"
            }`}
            style={{
              fontFamily: "Arco",
              wordWrap: "break-word",
            }}
          >
            Importance of Mechanics in Writing
          </span>
        </motion.div>
      </div>

      {/* Home Button */}
      <Link to="/vault">
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
            <FaFolderOpen
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

export default CapVault;
