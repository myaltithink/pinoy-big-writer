import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { FaLock } from "react-icons/fa6";
import { useUserStore } from "../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../utils/localstorage";
import type { User, Achievements, RoomProgress } from "../types";
import { IoPerson } from "react-icons/io5";
import { allAchievementsDisplayData } from "../constants/seeder";
import { getUsers, updateUser } from "../services/User";
import { FirestoreError } from "firebase/firestore";

const relevantAchievements: Achievements[] = [
  "completedAllCapitalization",
  "completedAllSpelling",
  "completedAllPunctuation",
  "completedAllLevels",
];

export default function Profile() {
  const { user, setUser } = useUserStore();
  const [currentUserRank, setCurrentUserRank] = useState<number | null>(null);
  const [currentUserPoints, setCurrentUserPoints] = useState<number>(0);
  const [currentUserName, setCurrentUserName] = useState<string>(
    user?.username || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    // Hydrate from local storage
    if (!user) {
      const localUser = getLocalStorageItem<User>("user");
      if (localUser) {
        setLocalStorageItem("user", localUser);
        setUser(localUser);
      }
    }
  }, [user, setUser]);

  useEffect(() => {
    const fetchAndSortUsers = async () => {
      if (user) {
        try {
          const usersData = await getUsers();
          // Sort by points
          const sorted = [...usersData].sort(
            (a, b) => (b.points || 0) - (a.points || 0)
          );
          // Assign ranks
          const ranked = sorted.map((u, i) => ({
            username: u.username,
            points: u.points || 0,
            rank: i + 1,
          }));
          // Find current user entry
          const me = ranked.find((r) => r.username === user.username);
          if (me) {
            setCurrentUserRank(me.rank);
            setCurrentUserPoints(me.points);
            setCurrentUserName(me.username);
          } else {
            setCurrentUserPoints(user.points || 0);
            setCurrentUserName(user.username);
          }
        } catch (err) {
          console.error("Error fetching users:", err);
          if (err instanceof FirestoreError) {
            console.error(err.code, err.message);
          }
        }
      }
    };

    fetchAndSortUsers();
  }, [user]);

  const handleLogout = async () => {
    if (user?.username) {
      try {
        await updateUser(user.username, { isLoggedIn: false });
        removeLocalStorageItem("user");
        setUser(null);
        navigate("/"); // Redirect to the login page or home page
        console.log("User logged out successfully.");
      } catch (error) {
        console.error("Error updating user on logout:", error);
      }
    } else {
      removeLocalStorageItem("user");
      setUser(null);
      navigate("/"); // Redirect even if user data is not fully loaded
      console.log("Guest user logged out (local storage cleared).");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center background p-8">
      {/* Tabs */}
      <div className="w-full flex items-center justify-start">
        <span
          className="text-3xl bg-[#000000]/50 px-6 py-3 rounded-t-3xl text-white flex items-center gap-4 border-8 border-[#000000]/50"
          style={{ fontFamily: "Arco" }}
        >
          Profile <IoPerson className="text-5xl text-yellow-500" />
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-stretch justify-between gap-8 p-8 border-8 rounded-xl rounded-tl-none border-[#000000]/50 bg-[#000000]/25">
        {/* Left Column: User Info & Ranking */}
        <motion.div className="flex flex-col gap-8 items-center md:items-start md:flex-1">
          {/* User Info */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.5,
            }}
            className="w-full flex items-center justify-around bg-black/75 text-white p-6 rounded-xl"
          >
            <div className="flex flex-col items-center">
              <img
                src={user?.avatar || "/avatars/default.png"}
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-4 border-white"
              />
              <span
                className="text-2xl font-bold mt-2"
                style={{ fontFamily: "Arco" }}
              >
                {user?.username || "Guest"}
              </span>
            </div>
            {/* Ranking Display */}
            <div className="flex flex-col items-center">
              <span className="text-xl" style={{ fontFamily: "Arco" }}>
                Ranking
              </span>
              <div className="w-24 h-24 flex items-center justify-center">
                {currentUserRank !== null ? (
                  <div
                    className={`w-24 h-24 flex items-center justify-center text-6xl font-bold text-white ${
                      currentUserRank <= 3
                        ? `bg-center bg-cover ${
                            currentUserRank === 1
                              ? "text-yellow-500"
                              : currentUserRank === 2
                              ? "text-white"
                              : "text-orange-200"
                          }`
                        : "bg-gray-600 rounded-full"
                    }`}
                    style={{
                      backgroundImage:
                        currentUserRank <= 3
                          ? `url('/${
                              currentUserRank === 1
                                ? "gold-banner.png"
                                : currentUserRank === 2
                                ? "silver-banner.png"
                                : "bronze-banner.png"
                            }')`
                          : undefined,
                      fontFamily: "Arco",
                    }}
                  >
                    {currentUserRank}
                  </div>
                ) : (
                  <span className="text-6xl">-</span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl" style={{ fontFamily: "Arco" }}>
                Points
              </span>
              <span
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "Arco" }}
              >
                {user?.points || "0"}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.5,
            }}
            className="w-full h-full flex flex-col items-center justify-around bg-black/75 text-white rounded-xl gap-4 py-3"
          >
            {/* Change Password UI */}
            <div className="w-full flex flex-col items-center gap-2 px-6">
              <span className="text-2xl" style={{ fontFamily: "Arco" }}>
                Change Password
              </span>
              <div className="w-full flex items-center gap-4">
                <input
                  type="text"
                  placeholder="New Password"
                  className="flex-1 px-4 py-2 rounded-xl bg-white text-black/75 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-black/25"
                  style={{ fontFamily: "Arco" }}
                />
                <motion.button
                  className="flex-1 px-4 py-2 bg-blue-500 text-white font-bold rounded-xl shadow hover:scale-95 transition-all"
                  whileHover={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    duration: 0.5,
                  }}
                  onClick={() => {
                    // Will implement password change later
                    console.log("Change password clicked");
                  }}
                  style={{ fontFamily: "Arco" }}
                >
                  Save
                </motion.button>
              </div>
            </div>
            <hr className="border-2 border-white/25 w-full" />
            {/* Logout Button */}
            <div className="flex items-center gap-4">
              <p className="text-xl text-white" style={{ fontFamily: "Arco" }}>
                Want to voluntarily exit?
              </p>
              <motion.button
                className="px-6 py-2 bg-[#FF6467] text-white rounded-xl font-bold shadow-lg hover:scale-95 cursor-pointer"
                onClick={handleLogout}
                style={{ fontFamily: "Arco" }}
              >
                Logout
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (Achievements) */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
          }}
          className="w-full md:flex-1 bg-black/75 text-white p-6 rounded-xl"
        >
          <span
            className="text-3xl font-bold mb-4 block"
            style={{ fontFamily: "Arco" }}
          >
            Trophies
          </span>
          <div className="grid grid-cols-2 gap-4">
            {relevantAchievements.map((achievementKey) => {
              const achieved =
                user?.achievements?.includes(achievementKey) || false;
              const data = allAchievementsDisplayData[achievementKey];
              return (
                <div
                  key={achievementKey}
                  className={`bg-black/75 p-4 rounded-md flex flex-col items-center ${
                    !achieved ? "opacity-50" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={data?.imageSrc || "/achievements/locked.png"}
                      alt={data?.title}
                      className={`w-16 h-16 object-contain mb-2 ${
                        !achieved ? "blur-[2px]" : ""
                      }`}
                    />
                    {!achieved && (
                      <FaLock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
                    )}
                  </div>
                  <span
                    className="text-lg font-semibold text-center text-white"
                    style={{ fontFamily: "Arco" }}
                  >
                    {data?.title || "Locked"}
                  </span>
                  {data?.description && achieved && (
                    <span
                      className="text-sm text-gray-300 text-center"
                      style={{ fontFamily: "Arco" }}
                    >
                      {data.description}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
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
