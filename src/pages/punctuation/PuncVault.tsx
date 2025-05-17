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
import { SiGoogleslides } from "react-icons/si";
import { useScreenSize } from "../../layouts/ScreenSizeProvider"; // Import the hook

function PuncVault() {
  const { user, setUser } = useUserStore();
  const { isMediumScreen } = useScreenSize(); // Use the hook

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
    <div
      className={`w-screen h-screen flex flex-col items-center punctuation ${
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
          Punctuation
          <span
            className={`text-${
              isMediumScreen ? "md" : "5xl"
            } w-fit h-fit text-white bg-red-400 rounded-full p-2 flex items-center justify-center`}
          >
            !
          </span>
        </span>
      </div>

      {/* Content */}
      <div
        className={`flex-1 w-full flex items-center justify-around ${
          isMediumScreen ? "gap-4 p-4" : "gap-8 p-8"
        } border-8 rounded-xl rounded-tl-none border-black/50 bg-black/25`}
      >
        <motion.div
          className={`bg-[#F8D7D7] flex ${
            isMediumScreen ? "flex-row h-[150px]" : "flex-col h-[350px]"
          } items-center gap-4 p-6 rounded-xl border-6 border-white`}
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
            window.open("/docs/punctuation-marks.pdf", "_blank", "noopener")
          }
        >
          <SiGoogleslides
            className={`${
              isMediumScreen ? "text-[8rem]" : "text-[15rem]"
            } text-red-400`}
          />

          <span
            className={`text-black/75 ${
              isMediumScreen ? "text-lg" : "text-3xl"
            }`}
            style={{ fontFamily: "Arco", wordWrap: "break-word" }}
          >
            Punctuation Marks
          </span>
        </motion.div>
      </div>

      {/* Home Button */}
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

export default PuncVault;
