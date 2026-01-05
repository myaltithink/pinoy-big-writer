import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { HiLightBulb } from "react-icons/hi";
import { FaFolderOpen, FaStar } from "react-icons/fa6";
import { useUserStore } from "../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type { User } from "../types";
import { useScreenSize } from "../layouts/ScreenSizeProvider";
import PracticeStation from "../components/PracticeStation";

type Tab = "vault" | "practice";

function Vault() {
  const { directory } = useParams();
  const { user, setUser } = useUserStore();
  const [tab, setTab] = useState<Tab>();

  const navigate = useNavigate();

  useEffect(() => {
    setTab(directory! as Tab);
  }, [directory])

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
        className={`w-${isMediumScreen ? "full" : "[90%]"} flex justify-end`}
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
          } bg-black/50 rounded-t-3xl text-white flex items-center gap-4 ${
            tab === "vault"
              ? "border-8 border-white"
              : "border-8 border-black/50"
          } cursor-pointer`}
          style={{ fontFamily: "Arco" }}
          onClick={() => navigate("/vault/vault")}
        >
          Stock Knowledge Vault <FaFolderOpen className="text-[#F3B73F]" />
        </span>
        <span
          className={`text-${
            isMediumScreen ? "lg px-2 py-1" : "3xl px-6 py-3"
          } bg-black/50 rounded-t-3xl text-white flex items-center gap-4 ${
            tab === "practice"
              ? "border-8 border-white"
              : "border-8 border-black/50"
          } cursor-pointer`}
          style={{ fontFamily: "Arco" }}
          onClick={() => navigate("/vault/practice")}
        >
          Practice Station <HiLightBulb className="text-[#F3B73F]" />
        </span>
      </div>

      {/* Content */}
      <div
        className={`flex-1 w-full flex items-center justify-around gap-${
          isMediumScreen ? "2" : "8"
        } p-${
          isMediumScreen ? "2" : "8"
        } border-8 rounded-xl rounded-tl-none border-black/50 ${
          tab === "practice" ? "bg-black/75" : "bg-black/25"
        }`}
      >
        {tab === "vault" ? (
          <>
            {/* Vault Cards */}
            <VaultCard
              title="Capitalization"
              bg="#FEECAA"
              iconColor="text-yellow-400"
              path="/vault/capitalization"
            />
            <VaultCard
              title="Punctuation"
              bg="#F8D7D7"
              iconColor="text-red-400"
              path="/vault/punctuation"
            />
            <VaultCard
              title="Spelling"
              bg="#E6FECB"
              iconColor="text-green-400"
              path="/vault/spelling"
            />
          </>
        ) : (
          <PracticeStation/>
        )}
      </div>
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

function VaultCard({
  title,
  bg,
  iconColor,
  path,
}: {
  title: string;
  bg: string;
  iconColor: string;
  path: string;
}) {
  const { isMediumScreen } = useScreenSize();

  return (
    <Link to={path}>
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
        <FaFolderOpen
          className={`${iconColor} ${
            isMediumScreen ? "text-[5rem]" : "text-[15rem] "
          }`}
        />
        <span
          className={`text-black/75 ${isMediumScreen ? "text-xl" : "text-3xl"}`}
          style={{ fontFamily: "Arco" }}
        >
          {title}
        </span>
      </motion.div>
    </Link>
  );
}

export default Vault;
