import { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { HiLightBulb } from "react-icons/hi";
import {
  FaFolderOpen,
  FaPenToSquare,
  FaRankingStar,
  FaStar,
} from "react-icons/fa6";
import { useUserStore } from "../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type { User, Question } from "../types";
import { practiceQuestions } from "../constants/seeder";
import { RiMedal2Fill, RiMedalFill } from "react-icons/ri";
import {
  collection,
  getDocs,
  orderBy,
  query,
  FirestoreError,
} from "firebase/firestore";
import { db } from "../../firebase"; // Assuming you have your Firebase config and db instance here
import { addUser, getUsers, getUser, updateUser } from "../services/User"; // Import your Firebase functions

type Tab = "Ranking" | "Achievements";

function Board() {
  const { user, setUser } = useUserStore();
  const [tab, setTab] = useState<Tab>("Ranking");
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [rankedUsers, setRankedUsers] = useState<
    { rank: number; username: string; points: number; avatar: string }[]
  >([]); // State to hold ranked users
  const [currentUserRank, setCurrentUserRank] = useState<number | null>(null);
  const [currentUserPoints, setCurrentUserPoints] = useState<number | null>(
    null
  );
  const [currentUserName, setCurrentUserName] = useState<string | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>([]); // State to hold all users
  // const usersCollectionRef = collection(db, "users"); // Reference to your users collection - No longer needed

  useEffect(() => {
    const currentTab = path.substring(7);

    if (currentTab == "ranking") {
      setTab("Ranking");
    } else if (currentTab == "achievements") {
      setTab("Achievements");
    }
  }, [path]);

  useEffect(() => {
    console.log(tab);
  }, [tab]);

  useEffect(() => {
    if (!user) {
      const localUser = getLocalStorageItem<User>("user");
      if (localUser) {
        setLocalStorageItem("user", localUser);
        setUser(localUser);
      }
    }

    // --- Function to fetch and sort users from Firebase using your getUsers function ---
    const fetchAndSortUsers = async () => {
      try {
        const usersData = await getUsers(); // Use your getUsers function
        setAllUsers(usersData);

        // Sort users by points (already done in the query)
        const sortedUsers = [...usersData].sort(
          (a, b) => (b.points || 0) - (a.points || 0)
        );

        // Assign ranks
        const rankedData = sortedUsers.map((u, index) => ({
          rank: index + 1,
          username: u.username,
          points: u.points || 0,
          avatar: u.avatar || "/avatars/default.png",
        }));

        setRankedUsers(rankedData.slice(0, 5)); // Show top 5

        // Find the current user's rank and points
        const currentUserData = rankedData.find(
          (rankedUser) => rankedUser.username === user?.username
        );

        if (currentUserData) {
          setCurrentUserRank(currentUserData.rank);
          setCurrentUserPoints(currentUserData.points);
          setCurrentUserName(currentUserData.username);
        } else if (user) {
          // If user is logged in but not in top 5, find their rank in the full sorted list
          const fullUserData = rankedData.find(
            (rankedUser) => rankedUser.username === user.username
          );
          if (fullUserData) {
            setCurrentUserRank(fullUserData.rank);
            setCurrentUserPoints(fullUserData.points);
            setCurrentUserName(fullUserData.username);
          } else {
            // User might not have any points yet or something went wrong
            setCurrentUserRank(null);
            setCurrentUserPoints(user.points || 0);
            setCurrentUserName(user.username);
          }
        } else {
          setCurrentUserName("Guest"); // Or handle the case where no user is logged in
        }
      } catch (error) {
        console.error("Error fetching and sorting users from Firebase:", error);
        if (error instanceof FirestoreError) {
          console.error("Firebase error code:", error.code);
          console.error("Firebase error message:", error.message);
        }
        // Handle error appropriately (e.g., display an error message)
      }
    };

    fetchAndSortUsers();
  }, [user]);

  return (
    <div className="w-screen h-screen flex flex-col items-center board p-8">
      {/* Tabs */}
      <div className="w-full flex items-center justify-start">
        <span
          className={`text-3xl bg-black/50 px-6 py-3 rounded-t-3xl text-white flex items-center gap-4 ${
            tab === "Ranking"
              ? "border-8 border-white"
              : "border-8 border-black/50"
          } cursor-pointer`}
          style={{ fontFamily: "Arco" }}
          onClick={() => navigate("/board/ranking")}
        >
          Writer's Ranking Board
          <FaPenToSquare className="text-[#F3B73F]" />
        </span>
        <span
          className={`text-3xl bg-black/50 px-6 py-3 rounded-t-3xl text-white flex items-center gap-4 ${
            tab === "Achievements"
              ? "border-8 border-white"
              : "border-8 border-black/50"
          } cursor-pointer`}
          style={{ fontFamily: "Arco" }}
          onClick={() => navigate("/board/achievements")}
        >
          Star board
          <FaStar className="text-[#F3B73F]" />
        </span>
      </div>

      {/* Content */}
      <div
        className={`flex-1 w-full flex items-start justify-around gap-8 p-8 border-8 rounded-xl rounded-tl-none border-black/50 bg-black/75`}
      >
        {tab === "Ranking" ? (
          <div className="flex w-full h-full gap-8">
            <div className="w-1/2 rounded-lg p-4 overflow-y-auto">
              {/* Ranking Table */}
              <div
                className="text-white font-bold"
                style={{ fontFamily: "Arco" }}
              >
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 p-2 border-b border-gray-600">
                  <div className="text-start">RANK</div>
                  <div className="flex items-center gap-2">NAME</div>
                  <div className="text-right">POINTS</div>
                </div>
                {/* Ranking List */}
                {rankedUsers.map((rankedUser) => (
                  <div
                    key={rankedUser.username}
                    className="grid grid-cols-3 gap-4 p-2 items-center"
                  >
                    <div className="text-start">
                      <div
                        className={`w-12 h-12 flex items-center justify-center font-bold ${
                          rankedUser.rank <= 3
                            ? `bg-center bg-cover ${
                                rankedUser.rank === 1
                                  ? "text-yellow-500"
                                  : rankedUser.rank === 2
                                  ? "text-white"
                                  : "text-orange-200"
                              }`
                            : "text-white"
                        }`}
                        style={{
                          backgroundImage:
                            rankedUser.rank <= 3
                              ? `url('/${
                                  rankedUser.rank === 1
                                    ? "gold-banner.png"
                                    : rankedUser.rank === 2
                                    ? "silver-banner.png"
                                    : "bronze-banner.png"
                                }')`
                              : "",
                          fontFamily: "Arco",
                          backgroundColor:
                            rankedUser.rank <= 3 ? "transparent" : "#333", // Add a background for non-top 3 ranks
                          borderRadius: rankedUser.rank > 3 ? "50%" : "0", // Make non-top 3 circular
                        }}
                      >
                        {rankedUser.rank}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden">
                        <img
                          src={rankedUser.avatar}
                          alt={rankedUser.username}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span
                        className="font-medium text-xl"
                        style={{ fontFamily: "Arco" }}
                      >
                        {rankedUser.username}
                      </span>
                    </div>
                    <div
                      className="text-right font-medium text-xl"
                      style={{ fontFamily: "Arco" }}
                    >
                      {rankedUser.points}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current User's Rank */}
            <div className="w-1/2 flex flex-col items-center justify-center bg-black/50 rounded-lg p-8 text-white font-bold text-xl">
              <div className="flex flex-col items-center mb-4">
                <div className="w-36 h-36 flex items-center justify-center">
                  {currentUserRank !== null ? (
                    <div
                      className={`w-32 h-32 flex items-center justify-center text-6xl font-bold text-white ${
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
                            : "",
                        fontFamily: "Arco",
                      }}
                    >
                      {currentUserRank}
                    </div>
                  ) : (
                    <span>-</span>
                  )}
                </div>
                <h3
                  className="text-3xl mt-2 text-center"
                  style={{ fontFamily: "Arco" }}
                >
                  {currentUserName}
                </h3>
              </div>
              <div className="text-center">
                <p className="text-xl mt-2" style={{ fontFamily: "Arco" }}>
                  {currentUserPoints !== null ? currentUserPoints : "-"} Points
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 text-white text-2xl w-[60%]">
            {/** Achievements */}
          </div>
        )}
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
  path,
}: {
  title: string;
  bg: string;
  iconColor: string;
  path: string;
}) {
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
        <FaFolderOpen className={`text-[15rem] ${iconColor}`} />
        <span className="text-black/75 text-3xl" style={{ fontFamily: "Arco" }}>
          {title}
        </span>
      </motion.div>
    </Link>
  );
}

export default Board;
