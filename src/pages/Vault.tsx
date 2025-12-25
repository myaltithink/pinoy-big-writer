import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { HiLightBulb } from "react-icons/hi";
import { FaFolderOpen, FaStar } from "react-icons/fa6";
import { useUserStore } from "../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type { User, PracticeQuestion } from "../types";
import { practiceQuestions } from "../constants/old_seeder";
import { useScreenSize } from "../layouts/ScreenSizeProvider";

type Tab = "Vault" | "Practice";

function getRandomQuestions(n: number) {
  const shuffled = [...practiceQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function Vault() {
  const { user, setUser } = useUserStore();
  const [tab, setTab] = useState<Tab>("Vault");

  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showAnswerReview, setShowAnswerReview] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  // Store user answers for review later
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (!user) {
      const localUser = getLocalStorageItem<User>("user");
      if (localUser) {
        setLocalStorageItem("user", localUser);
        setUser(localUser);
      }
    }
  }, [user]);

  const handleStart = () => {
    setQuestions(getRandomQuestions(10));
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setShowAnswerReview(false);
    setUserAnswers([]);
    setReviewIndex(0);
    setTab("Practice");
  };

  const handleReset = () => {
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setShowAnswerReview(false);
    setUserAnswers([]);
    setReviewIndex(0);
    setSelectedIndex(null);
    setIsCorrect(null);
    setTab("Vault");
  };

  const handleAnswer = (index: number) => {
    // Store the user's answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = index;
    setUserAnswers(newUserAnswers);

    const correct = index === questions[currentQuestion].answerIndex;
    if (correct) {
      setScore((prev) => prev + 1);
    }

    // Set selected index briefly for visual feedback
    setSelectedIndex(index);
    setIsCorrect(correct);

    // Move to next question after a brief delay
    setTimeout(() => {
      setSelectedIndex(null);
      setIsCorrect(null);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  // Start the review process
  const handleShowResults = () => {
    setShowAnswerReview(true);
    setReviewIndex(0);
  };

  // Move to next question in review mode
  const handleNextReview = () => {
    if (reviewIndex + 1 < questions.length) {
      setReviewIndex((prev) => prev + 1);
    } else {
      // End of review
      setShowAnswerReview(false);
      setShowResults(true);
    }
  };

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
            tab === "Vault"
              ? "border-8 border-white"
              : "border-8 border-black/50"
          } cursor-pointer`}
          style={{ fontFamily: "Arco" }}
          onClick={handleReset}
        >
          Stock Knowledge Vault <FaFolderOpen className="text-[#F3B73F]" />
        </span>
        <span
          className={`text-${
            isMediumScreen ? "lg px-2 py-1" : "3xl px-6 py-3"
          } bg-black/50 rounded-t-3xl text-white flex items-center gap-4 ${
            tab === "Practice"
              ? "border-8 border-white"
              : "border-8 border-black/50"
          } cursor-pointer`}
          style={{ fontFamily: "Arco" }}
          onClick={() => setTab("Practice")}
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
          tab === "Practice" ? "bg-black/75" : "bg-black/25"
        }`}
      >
        {tab === "Vault" ? (
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
        ) : showResults && !showAnswerReview ? (
          <div className="text-white text-3xl text-center">
            <p style={{ fontFamily: "Arco" }}>Quiz Complete!</p>
            <p style={{ fontFamily: "Arco" }}>
              Score: {score} / {questions.length}
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleShowResults}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Show Results
              </button>
              <button
                onClick={handleStart}
                className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Try Again
              </button>
            </div>
          </div>
        ) : showAnswerReview ? (
          <div
            className={`flex flex-col ${
              isMediumScreen ? "gap-2" : "gap-6"
            } text-white w-[80%]`}
          >
            <p
              className={`${isMediumScreen ? "text-lg" : "text-2xl"}`}
              style={{ fontFamily: "Arco" }}
            >
              {reviewIndex + 1}. {questions[reviewIndex].question}
            </p>

            <div className={`grid gap-${isMediumScreen ? "2" : "4"}`}>
              {questions[reviewIndex].choices.map((choice, idx) => {
                const isCorrectAnswer =
                  idx === questions[reviewIndex].answerIndex;
                const isUserIncorrectChoice =
                  idx === userAnswers[reviewIndex] && !isCorrectAnswer;

                if (!isCorrectAnswer && !isUserIncorrectChoice) return null;

                const bgClass = isCorrectAnswer
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white";

                return (
                  <div
                    key={idx}
                    className={`${bgClass} border-2 border-white font-medium ${
                      isMediumScreen
                        ? "px-2 py-1 text-sm"
                        : "px-4 py-3 text-2xl"
                    } rounded-lg text-left`}
                  >
                    {String.fromCharCode(65 + idx)}. {choice}
                  </div>
                );
              })}
            </div>

            {/* Explanation section */}
            <div className="mt-4 bg-black/40 p-4 rounded-lg">
              <h3
                className={`${isMediumScreen ? "text-lg" : "text-2xl"} mb-2`}
                style={{ fontFamily: "Arco" }}
              >
                Explanation:
              </h3>
              <p className={`${isMediumScreen ? "text-md" : "text-xl"}`}>
                {questions[reviewIndex].reason}
              </p>
              <button
                onClick={handleNextReview}
                className={`bg-blue-500 text-white rounded-xl hover:scale-95 transition mt-4 ${
                  isMediumScreen ? "px-3 py-1 text-sm" : "px-6 py-3 text-xl"
                }`}
                style={{ fontFamily: "Arco" }}
              >
                {reviewIndex + 1 < questions.length
                  ? "Next Question"
                  : "Finish Review"}
              </button>
            </div>
          </div>
        ) : questions.length > 0 ? (
          <div
            className={`flex flex-col ${
              isMediumScreen ? "gap-2" : "gap-6"
            } text-white w-[60%]`}
          >
            <p
              className={`${isMediumScreen ? "text-lg" : "text-2xl"}`}
              style={{ fontFamily: "Arco" }}
            >
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </p>

            <div className={`grid gap-${isMediumScreen ? "2" : "4"}`}>
              {questions[currentQuestion].choices.map((choice, idx) => {
                let bgClass = "bg-white/20";
                if (selectedIndex !== null) {
                  if (idx === selectedIndex) {
                    bgClass = isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white";
                  } else if (
                    idx === questions[currentQuestion].answerIndex &&
                    !isCorrect
                  ) {
                    bgClass = "bg-green-500 text-white";
                  } else {
                    bgClass = "bg-white/10";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => selectedIndex === null && handleAnswer(idx)}
                    className={`${bgClass} border-2 border-white font-medium ${
                      isMediumScreen
                        ? "px-2 py-1 text-sm"
                        : "px-4 py-3 text-2xl"
                    } rounded-lg text-left transition`}
                    disabled={selectedIndex !== null}
                  >
                    {String.fromCharCode(65 + idx)}. {choice}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-${isMediumScreen ? 2 : 4} text-white w-[60%]">
            <span
              className={`${isMediumScreen ? "text-lg" : "text-3xl"}`}
              style={{ fontFamily: "Arco" }}
            >
              Instructions
            </span>
            <p
              className={`text-justify ${
                isMediumScreen ? "text-md" : "text-2xl"
              } font-medium`}
            >
              Read each item carefully and choose the sentence that is written
              correctly. This activity is an integration of capitalization,
              punctuation, and spelling skills. Select the best answer from the
              choices A, B, C, or D.
            </p>
            <button
              onClick={handleStart}
              className={`bg-green-500 text-white rounded-xl hover:scale-95 transition ease-in-out duration-300 w-fit ${
                isMediumScreen ? "text-md px-3 py-1 " : "text-xl px-6 py-3 "
              }`}
              style={{ fontFamily: "Arco" }}
            >
              Start
            </button>
          </div>
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
