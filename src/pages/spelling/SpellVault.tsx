import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { FaFolderOpen, FaStar } from "react-icons/fa6";
import { useUserStore } from "../../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/localstorage";
import type { User } from "../../types";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { SiGoogleslides } from "react-icons/si";

function SpellVault() {
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
    <div className="w-screen h-screen flex flex-col items-center spelling p-8">
      {/* Top bar */}
      <div className="w-[90%] flex justify-end">
        <div className="flex items-center gap-14">
          <Link to="/achievements">
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
          Spelling
          <span className="text-2xl w-fit h-fit text-white bg-green-400 rounded-full p-2 flex items-center justify-center">
            A_
          </span>
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 w-full flex items-center justify-around gap-8 p-8 border-8 rounded-xl rounded-tl-none border-black/50 bg-black/25">
        <motion.div
          className={`bg-[#E6FECB] flex flex-col items-center gap-4 p-6 rounded-xl border-6 border-white h-[350px]`}
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
            window.open("/docs/words-matter.pdf", "_blank", "noopener")
          }
        >
          <SiGoogleslides className={`text-[15rem] text-green-400`} />
          <span
            className="text-black/75 text-3xl"
            style={{ fontFamily: "Arco", wordWrap: "break-word" }}
          >
            Words Matter
          </span>
        </motion.div>
      </div>

      {/* Home Button */}
      <Link to="/vault">
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
            <FaFolderOpen className="w-8 h-8" />
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

export default SpellVault;
