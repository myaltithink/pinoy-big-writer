import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { capLevel2 as allWords } from "../../constants/seeder";
import type { Word2 } from "../../types";
import { shuffleArray } from "../../utils/array";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa6";
import { useUserStore } from "../../stores/useUserStore";
import { markLevelComplete } from "../../utils/game";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { MdTimer } from "react-icons/md";

const starColors = [
  "text-blue-500",
  "text-green-500",
  "text-yellow-400",
  "text-orange-500",
  "text-red-500",
];

function CapLevel2() {
  const [index, setIndex] = useState(0);
  const [stars, setStars] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameOver, setGameOver] = useState(false);
  const [shuffledWords, setShuffledWords] = useState<Word2[]>([]);
  const [popKey, setPopKey] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [showInstructions, setShowInstructions] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const timerControls = useAnimation();

  useEffect(() => {
    const tier1 = allWords?.tier1 || [];
    const tier2 = allWords?.tier2 || [];
    const tier3 = allWords?.tier3 || [];

    const selectedWords = [
      ...shuffleArray(tier1).slice(0, 4),
      ...shuffleArray(tier2).slice(0, 4),
      ...shuffleArray(tier3).slice(0, 2),
    ];

    setShuffledWords(shuffleArray<Word2>(selectedWords as Word2[]));
  }, []);

  useEffect(() => {
    if (
      !showInstructions &&
      timeLeft > 0 &&
      !completed &&
      !gameOver &&
      !showFeedback
    ) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0 && !showFeedback) {
      setShowFeedback(true);
      setTimeout(() => {
        if (index + 1 < shuffledWords.length && stars < 10) {
          setIndex((i) => i + 1);
          setSelectedIndexes([]);
          setTimeLeft(15);
          setShowFeedback(false);
        } else {
          setGameOver(true);
        }
      }, 3000); // Show feedback for 3 seconds
    }
  }, [
    timeLeft,
    completed,
    gameOver,
    showInstructions,
    index,
    shuffledWords,
    stars,
    showFeedback,
  ]);

  useEffect(() => {
    if (stars === 10 && !completed) {
      setCompleted(true);
      if (user?.username) {
        markLevelComplete(user.username, "capitalization", 1, setUser);
      }
    }
  }, [stars, user, setUser, completed]);

  const toggleWord = (i: number) => {
    if (!showFeedback) {
      setSelectedIndexes((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      );
    }
  };

  const handleAnswer = () => {
    if (
      completed ||
      gameOver ||
      showInstructions ||
      showFeedback ||
      !shuffledWords[index]
    )
      return;
    setShowFeedback(true);
    const current = shuffledWords[index];
    const selected = [...selectedIndexes].sort().join(",");
    const correct = [...current.correctIndexes].sort().join(",");

    setTimeout(() => {
      if (selected === correct) {
        setTimeLeft((t) => Math.max(t + 5, 0));
        setStars((s) => s + 1); // Increment stars regardless of the previous count
        setPopKey((k) => k + 1);
        if (index + 1 < shuffledWords.length && stars < 9) {
          // Check against 9 because stars will be incremented
          setIndex((i) => i + 1);
          setSelectedIndexes([]);
          setTimeLeft(15);
          setShowFeedback(false);
        } else if (stars >= 9) {
          // Completion logic based on the *new* star count
          setCompleted(true);
        } else {
          setGameOver(true);
        }
      } else {
        if (index + 1 < shuffledWords.length && stars < 10) {
          setIndex((i) => i + 1);
          setSelectedIndexes([]);
          setTimeLeft(15);
          setShowFeedback(false);
        } else if (stars === 10) {
          setCompleted(true);
        } else {
          setGameOver(true);
        }
      }
    }, 2000);
  };

  const handleRestart = () => {
    const tier1 = allWords?.tier1 || [];
    const tier2 = allWords?.tier2 || [];
    const tier3 = allWords?.tier3 || [];

    const selectedWords = [
      ...shuffleArray(tier1).slice(0, 4),
      ...shuffleArray(tier2).slice(0, 4),
      ...shuffleArray(tier3).slice(0, 2),
    ];
    setIndex(0);
    setStars(0);
    setTimeLeft(15);
    setCompleted(false);
    setGameOver(false);
    setShuffledWords(shuffleArray<Word2>(selectedWords as Word2[]));
    setSelectedIndexes([]);
    setShowInstructions(true);
    setShowFeedback(false);
  };

  const handleStartGame = () => {
    const tier1 = allWords?.tier1 || [];
    const tier2 = allWords?.tier2 || [];
    const tier3 = allWords?.tier3 || [];

    const selectedWords = [
      ...shuffleArray(tier1).slice(0, 4),
      ...shuffleArray(tier2).slice(0, 4),
      ...shuffleArray(tier3).slice(0, 2),
    ];
    setShowInstructions(false);
    setIndex(0);
    setStars(0);
    setTimeLeft(15);
    setCompleted(false);
    setGameOver(false);
    setSelectedIndexes([]);
    setShuffledWords(shuffleArray<Word2>(selectedWords as Word2[]));
    setShowFeedback(false);
  };

  const starColor =
    stars <= 2
      ? starColors[0]
      : stars <= 4
      ? starColors[1]
      : stars <= 6
      ? starColors[2]
      : stars <= 8
      ? starColors[3]
      : starColors[4];

  const progress = (stars / 10) * 100;

  return (
    <div className="w-screen h-screen flex flex-col items-center background p-8">
      {completed && <Confetti width={width} height={height} />}
      <div className="flex-1 w-full flex flex-col items-center justify-center gap-8 p-8 border-8 rounded-xl border-black/50 bg-black/75">
        {!showInstructions && !completed && !gameOver && (
          <div className="w-[60%] flex justify-between items-center mb-6">
            <motion.div
              animate={timerControls}
              initial={{ x: 0 }}
              className="flex flex-col items-center gap-0 relative"
            >
              <MdTimer className="text-red-500 text-2xl" />
              <span
                className="font-semibold text-2xl text-white"
                style={{ fontFamily: "Arco" }}
              >
                {timeLeft}s
              </span>
            </motion.div>
            <motion.div
              key={popKey}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.3 }}
              className="relative w-16 h-16"
            >
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className={starColor}
                  strokeDasharray={176.4}
                  strokeDashoffset={176.4 - (176.4 * progress) / 100}
                  transition={{ duration: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                {stars}⭐
              </div>
            </motion.div>
          </div>
        )}

        {showInstructions ? (
          <div className="flex flex-col gap-4 text-white text-2xl w-[60%]">
            <span className="text-3xl" style={{ fontFamily: "Arco" }}>
              Instructions
            </span>
            <p className="text-justify font-medium">
              Click the words that should be correctly capitalized. You have 15
              seconds per question. Get 10 correct answers to complete the
              level.
            </p>
            <button
              onClick={handleStartGame}
              className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition ease-in-out duration-300 w-fit text-xl"
              style={{ fontFamily: "Arco" }}
            >
              Start Game
            </button>
          </div>
        ) : gameOver ? (
          <div className="text-white text-3xl text-center">
            <p style={{ fontFamily: "Arco" }}>Time's Up!</p>
            <p style={{ fontFamily: "Arco" }}>Stars: {stars} / 10</p>
            <button
              onClick={handleRestart}
              className="bg-green-500 text-white mt-4 px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
              style={{ fontFamily: "Arco" }}
            >
              Try Again
            </button>
          </div>
        ) : completed ? (
          <div className="text-white text-3xl text-center">
            <p style={{ fontFamily: "Arco" }}>Quiz Complete!</p>
            <p style={{ fontFamily: "Arco" }}>Stars: {stars} / 10</p>
            <div className="flex mt-4 gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Play Again
              </button>
              <button
                onClick={() => navigate("/games/capitalization/level-3")}
                className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Continue
              </button>
            </div>
          </div>
        ) : shuffledWords.length > 0 ? (
          <div className="w-[60%] flex flex-col gap-6 text-white items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-4xl font-medium text-yellow-400 mb-2">
              {shuffledWords[index].prompt.split(" ").map((word, i) => (
                <button
                  key={i}
                  onClick={() => toggleWord(i)}
                  className={`px-2 py-1 rounded transition-all duration-150 border-2 border-white ${
                    showFeedback
                      ? shuffledWords[index].correctIndexes.includes(i)
                        ? "bg-green-400 text-white capitalize" // Correct capitalization
                        : selectedIndexes.includes(i) &&
                          !shuffledWords[index].correctIndexes.includes(i)
                        ? "bg-red-500 text-white" // Incorrect selection
                        : "bg-white/20" // Not a correct answer, and not incorrectly selected
                      : selectedIndexes.includes(i)
                      ? "bg-yellow-300 underline text-black" // Currently selected
                      : "bg-white/20" // Default
                  }`}
                  disabled={completed || gameOver || showFeedback}
                >
                  {word}
                </button>
              ))}
            </div>
            <button
              onClick={handleAnswer}
              className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
              style={{ fontFamily: "Arco" }}
              disabled={completed || gameOver || showFeedback}
            >
              Enter
            </button>
          </div>
        ) : (
          <p className="text-white text-2xl" style={{ fontFamily: "Arco" }}>
            Loading...
          </p>
        )}
      </div>

      <Link to="/games/capitalization">
        <motion.div
          className="w-16 h-16 bg-black/50 text-white rounded-full flex items-center justify-center cursor-pointer mt-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCaretLeft className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default CapLevel2;
