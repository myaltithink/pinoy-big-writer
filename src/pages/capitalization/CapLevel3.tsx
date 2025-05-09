import { useState, useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import { capLevel3 as words } from "../../constants/seeder";
import { shuffleArray } from "../../utils/array";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa";
import { useUserStore } from "../../stores/useUserStore";
import { markLevelComplete } from "../../utils/game";
import useSound from "use-sound";
import correctSfx from "/sounds/correct.mp3";
import wrongSfx from "/sounds/wrong.mp3";
import winSfx from "/sounds/win.mp3";
import loseSfx from "/sounds/lose.mp3";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const starColors = [
  "text-blue-500",
  "text-green-500",
  "text-yellow-400",
  "text-orange-500",
  "text-red-500",
];

// 1️⃣ Define the Level‐2 word shape
interface Word2 {
  prompt: string;
  answer: string;
}

function CapLevel3() {
  const [index, setIndex] = useState(0);
  const [stars, setStars] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  // 2️⃣ Use Word2 here
  const [shuffledWords, setShuffledWords] = useState<Word2[]>([]);
  const [showPenalty, setShowPenalty] = useState(false);
  const [popKey, setPopKey] = useState(0);
  const [userInput, setUserInput] = useState("");

  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const timerControls = useAnimation();

  const [playCorrect] = useSound(correctSfx, { volume: 1, interrupt: true });
  const [playWrong] = useSound(wrongSfx, { volume: 1, interrupt: true });
  const [playWin] = useSound(winSfx, { volume: 1, interrupt: true });
  const [playLose] = useSound(loseSfx, { volume: 1, interrupt: true });

  // 3️⃣ Shuffle with the generic so TS knows it's Word2[]
  useEffect(() => {
    setShuffledWords(shuffleArray<Word2>(words));
    return () => {
      stop();
    };
  }, []);

  // stop bg music when done
  useEffect(() => {
    if (gameOver || completed) stop();
  }, [gameOver, completed]);

  // countdown
  useEffect(() => {
    if (timeLeft > 0 && !completed) {
      const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(t);
    }
    if (timeLeft === 0) {
      setGameOver(true);
      playLose();
    }
  }, [timeLeft, completed]);

  // win condition
  useEffect(() => {
    if (stars === 10) {
      playWin();
      setCompleted(true);
      onWin();
    }
  }, [stars]);

  // shake on penalty
  useEffect(() => {
    if (showPenalty) {
      timerControls.start({
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.4 },
      });
    }
  }, [showPenalty, timerControls]);

  // 4️⃣ Handle submit by comparing userInput to current.answer
  const handleAnswer = () => {
    if (completed || gameOver || !shuffledWords[index]) return;
    const current = shuffledWords[index];
    const correct = userInput.trim() === current.answer.trim();

    if (correct && stars < 10) {
      playCorrect();
      setTimeLeft((t) => Math.max(t + 10, 0));
      setStars((s) => s + 1);
      setPopKey((k) => k + 1);
    } else if (!correct) {
      playWrong();
      setTimeLeft((t) => Math.max(t - 5, 0));
      setShowPenalty(true);
      setTimeout(() => setShowPenalty(false), 1000);
    }

    if (index + 1 === shuffledWords.length) {
      setCompleted(true);
    } else {
      setIndex((i) => i + 1);
      setUserInput("");
    }
  };

  const onWin = () => {
    if (!user?.username) return;
    // index 1 for Level 2
    markLevelComplete(user.username, "capitalization", 1, setUser);
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

  const resetGame = () => {
    setIndex(0);
    setStars(0);
    setTimeLeft(60);
    setCompleted(false);
    setGameOver(false);
    setShuffledWords(shuffleArray<Word2>(words));
    setUserInput("");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between gap-4 p-4 sm:p-6 capitalization">
      {stars === 10 && <Confetti width={width} height={height} />}

      {/* Top Bar */}
      <div className="w-full max-w-md flex justify-between items-center px-4 py-2 bg-white shadow rounded-lg">
        <motion.div
          animate={timerControls}
          initial={{ x: 0 }}
          className="relative flex flex-col items-center"
        >
          {showPenalty && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-6 text-red-500 text-sm font-bold"
            >
              -5s
            </motion.div>
          )}
          <span className="text-black text-xl">⏱️</span>
          <span className="font-semibold text-lg text-gray-700">
            {timeLeft}s
          </span>
        </motion.div>
        <motion.div
          key={popKey}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.3 }}
          className="relative w-12 h-12"
        >
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#e5e7eb"
              strokeWidth="5"
              fill="none"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              className={starColor}
              strokeDasharray={125.6}
              strokeDashoffset={125.6 - (125.6 * progress) / 100}
              transition={{ duration: 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
            {stars}⭐
          </div>
        </motion.div>
      </div>

      {/* Instructions */}
      <div className="max-w-md w-full bg-white shadow p-4 rounded-lg text-gray-800 text-sm sm:text-base text-center">
        <p className="font-semibold mb-1">📋 Instructions:</p>
        <ul className="list-disc list-inside text-left space-y-1 text-gray-700">
          <li>
            Type the correct capitalization of the given sentence (no
            punctuation needed).
          </li>
          <li>Earn 1 ⭐ for every correct answer.</li>
          <li>Wrong answers will cost you 5 seconds.</li>
          <li>You win when you get 10 ⭐ before time runs out!</li>
        </ul>
      </div>

      {/* Game Card */}
      <div className="flex-1 flex flex-col items-center bg-white shadow-lg rounded-lg w-full max-w-md p-4 text-center">
        {gameOver ? (
          <div className="flex flex-col flex-1 w-full">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                ⛔ Time's Up!
              </h2>
              <p className="mb-4">You earned {stars} stars.</p>
            </div>
            <button
              onClick={resetGame}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2"
            >
              Try Again
            </button>
          </div>
        ) : completed ? (
          <div className="flex flex-col flex-1 w-full">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                🎉 Congratulations! 🎉
              </h2>
              <p>You completed Level 2!</p>
            </div>
            <div className="flex mt-4 gap-2">
              <button
                onClick={resetGame}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2"
              >
                Play Again
              </button>
              <button
                onClick={() => navigate("/games/capitalization/level-3")}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2"
              >
                Continue
              </button>
            </div>
          </div>
        ) : shuffledWords.length > 0 ? (
          <div className="flex flex-col flex-1 w-full">
            <div className="flex-grow flex items-center justify-center text-xl sm:text-2xl font-semibold text-yellow-700 mb-6 font-serif">
              {shuffledWords[index].prompt}
            </div>
            <div className="w-full flex flex-col items-center">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAnswer()}
                placeholder="Type the correct capitalization..."
                className="w-full text-center border-2 border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleAnswer}
                className="w-full mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 text-white "
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>

      {/* Back Link */}
      <Link to="/games/capitalization">
        <motion.div
          className="w-18 h-18 bg-yellow-500 text-white rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 0.9 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCaretLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default CapLevel3;
