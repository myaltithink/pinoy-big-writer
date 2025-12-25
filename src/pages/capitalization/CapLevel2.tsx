import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { capLevel2 as allWords } from "../../constants/old_seeder";
import type { Word2 } from "../../types";
import { shuffleArray } from "../../utils/array";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";
import { markLevelComplete } from "../../utils/game";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { MdTimer } from "react-icons/md";
import useSound from "use-sound";
import { useSoundContext } from "../../layouts/SoundProvider";
import { useScreenSize } from "../../layouts/ScreenSizeProvider"; // Import the hook
import { TiHome } from "react-icons/ti";

const correctSoundPath = "/sounds/correct.mp3";
const wrongSoundPath = "/sounds/wrong.mp3";
const winSoundPath = "/sounds/win.mp3";
const loseSoundPath = "/sounds/lose.mp3";

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
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const timerControls = useAnimation();
  const { clickEnabled } = useSoundContext();
  const { isMediumScreen } = useScreenSize(); // Use the hook

  const [playCorrectSound] = useSound(correctSoundPath, {
    soundEnabled: clickEnabled,
  });
  const [playWrongSound] = useSound(wrongSoundPath, {
    soundEnabled: clickEnabled,
  });
  const [playWinSound] = useSound(winSoundPath, { soundEnabled: clickEnabled });
  const [playLoseSound] = useSound(loseSoundPath, {
    soundEnabled: clickEnabled,
  });

  useEffect(() => {
    setShuffledWords(shuffleArray<Word2>(allWords));
  }, []);

  useEffect(() => {
    if (
      !showInstructions &&
      timeLeft > 0 &&
      !completed &&
      !gameOver &&
      !showFeedback &&
      questionsAnswered < 10
    ) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0 && !showFeedback && questionsAnswered < 10) {
      setShowFeedback(true);
      if (clickEnabled) playWrongSound();
      setTimeout(() => {
        if (index + 1 < shuffledWords.length && questionsAnswered < 9) {
          setIndex((i) => i + 1);
          setSelectedIndexes([]);
          setTimeLeft(15);
          setShowFeedback(false);
        } else {
          setGameOver(true);
          if (clickEnabled) playLoseSound();
        }
      }, 3000);
    } else if (timeLeft === 0 && questionsAnswered >= 10 && !completed) {
      setGameOver(true);
      if (clickEnabled) playLoseSound();
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
    clickEnabled,
    playWrongSound,
    playLoseSound,
    questionsAnswered,
  ]);

  useEffect(() => {
    if (stars >= 7 && stars <= 10 && questionsAnswered === 10 && !completed) {
      setCompleted(true);
      if (clickEnabled) playWinSound();
      if (user?.username) {
        markLevelComplete(user.username, "capitalization", 1, setUser, stars);
      }
    } else if (questionsAnswered === 10 && stars < 7 && !gameOver) {
      setGameOver(true);
      if (clickEnabled) playLoseSound();
    }
  }, [
    stars,
    user,
    setUser,
    completed,
    clickEnabled,
    playWinSound,
    questionsAnswered,
    gameOver,
  ]);

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
      !shuffledWords[index] ||
      questionsAnswered >= 10
    )
      return;

    setShowFeedback(true);
    const current = shuffledWords[index];
    const selected = [...selectedIndexes].sort().join(",");
    const correct = [...current.correctIndexes].sort().join(",");

    setTimeout(() => {
      setQuestionsAnswered((prev) => prev + 1);
      if (selected === correct) {
        if (clickEnabled) playCorrectSound();
        setTimeLeft((t) => Math.max(t + 5, 0));
        setStars((s) => s + 1);
        setPopKey((k) => k + 1);
        if (questionsAnswered < 9 && index + 1 < shuffledWords.length) {
          setIndex((i) => i + 1);
          setSelectedIndexes([]);
          setTimeLeft(15);
          setShowFeedback(false);
        } else if (questionsAnswered >= 9) {
          setShowFeedback(false);
        }
      } else {
        if (clickEnabled) playWrongSound();
        if (questionsAnswered < 9 && index + 1 < shuffledWords.length) {
          setIndex((i) => i + 1);
          setSelectedIndexes([]);
          setTimeLeft(15);
          setShowFeedback(false);
        } else if (questionsAnswered >= 9) {
          setShowFeedback(false);
        }
      }
    }, 2000);
  };

  const handleRestart = () => {
    setIndex(0);
    setStars(0);
    setTimeLeft(15);
    setCompleted(false);
    setGameOver(false);
    setShuffledWords(shuffleArray<Word2>(allWords));
    setSelectedIndexes([]);
    setShowInstructions(true);
    setShowFeedback(false);
    setQuestionsAnswered(0);
  };

  const handleStartGame = () => {
    setShowInstructions(false);
    setIndex(0);
    setStars(0);
    setTimeLeft(15);
    setCompleted(false);
    setGameOver(false);
    setSelectedIndexes([]);
    setShuffledWords(shuffleArray<Word2>(allWords));
    setShowFeedback(false);
    setQuestionsAnswered(0);
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
    <div
      className={`w-dvw h-dvh flex flex-col items-center background ${
        isMediumScreen ? "p-2" : "p-8"
      }`}
    >
      {completed && <Confetti width={width} height={height} />}
      <div
        className={`flex-1 w-full flex flex-col items-center justify-center ${
          isMediumScreen ? "gap-4 p-4" : "gap-8 p-8"
        } border-8 rounded-xl border-black/50 bg-black/75`}
      >
        {!showInstructions &&
          !completed &&
          !gameOver &&
          questionsAnswered < 10 && (
            <div
              className={`flex justify-between items-center ${
                isMediumScreen ? "w-[80%] mb-3" : "w-[60%] mb-6"
              }`}
            >
              <motion.div
                animate={timerControls}
                initial={{ x: 0 }}
                className="flex flex-col items-center gap-0 relative"
              >
                <MdTimer
                  className={`text-red-500 ${
                    isMediumScreen ? "text-xl" : "text-2xl"
                  }`}
                />
                <span
                  className={`font-semibold ${
                    isMediumScreen ? "text-xl" : "text-2xl"
                  } text-white`}
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
                className={`relative w-16 h-16 ${
                  isMediumScreen ? "w-10 h-10" : ""
                }`}
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
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    isMediumScreen ? "text-base" : "text-xl"
                  } font-bold text-white`}
                >
                  {stars}⭐
                </div>
              </motion.div>
            </div>
          )}

        {showInstructions ? (
          <div
            className={`flex flex-col gap-${
              isMediumScreen ? "2" : "4"
            } text-white text-${isMediumScreen ? "xl" : "2xl"} w-[60%]`}
          >
            <span
              className={`${isMediumScreen ? "text-2xl" : "text-3xl "}`}
              style={{ fontFamily: "Arco" }}
            >
              Instructions
            </span>
            <p
              className={`text-justify font-medium text-${
                isMediumScreen ? "xl" : "3xl"
              }`}
            >
              Click the words that should be correctly capitalized. You have 15
              seconds per question. Get at least 7 correct answers out of 10 to
              complete the level.
            </p>
            <button
              onClick={handleStartGame}
              className={`bg-green-500 text-white rounded-xl hover:scale-95 transition ease-in-out duration-300 w-fit ${
                isMediumScreen ? "text-md px-3 py-1 " : "text-xl px-6 py-3 "
              }`}
              style={{ fontFamily: "Arco" }}
            >
              Start Game
            </button>
          </div>
        ) : gameOver ? (
          <div
            className={`text-white text-center text-${
              isMediumScreen ? "2xl" : "3xl"
            }`}
          >
            <p style={{ fontFamily: "Arco" }}>Game Over!</p>
            <p style={{ fontFamily: "Arco" }}>Stars: {stars} / 10</p>
            <button
              onClick={handleRestart}
              className={`bg-green-500 text-white mt-4 px-${
                isMediumScreen ? 3 : 6
              } py-${
                isMediumScreen ? 1 : 3
              } rounded-xl hover:scale-95 transition text-${
                isMediumScreen ? "md" : "xl"
              }`}
              style={{ fontFamily: "Arco" }}
            >
              Try Again
            </button>
          </div>
        ) : completed ? (
          <div
            className={`text-white text-center text-${
              isMediumScreen ? "2xl" : "3xl"
            }`}
          >
            <p style={{ fontFamily: "Arco" }}>Game Complete!</p>
            <p style={{ fontFamily: "Arco" }}>Stars: {stars} / 10</p>
            <div className="flex mt-4 gap-4 justify-center">
              <button
                onClick={handleRestart}
                className={`bg-green-500 text-white px-${
                  isMediumScreen ? 3 : 6
                } py-${
                  isMediumScreen ? 1 : 3
                } rounded-xl hover:scale-95 transition text-${
                  isMediumScreen ? "md" : "xl"
                }`}
                style={{ fontFamily: "Arco" }}
              >
                Play Again
              </button>
              <button
                onClick={() => navigate("/games/capitalization/level-3")}
                className={`bg-yellow-500 text-white px-${
                  isMediumScreen ? 3 : 6
                } py-${
                  isMediumScreen ? 1 : 3
                } rounded-xl hover:scale-95 transition text-${
                  isMediumScreen ? "md" : "xl"
                }`}
                style={{ fontFamily: "Arco" }}
              >
                Continue
              </button>
            </div>
          </div>
        ) : shuffledWords.length > 0 && questionsAnswered < 10 ? (
          <div
            className={`w-[80%] flex flex-col gap-${
              isMediumScreen ? 4 : 6
            } text-white items-center`}
          >
            <div
              className={`flex flex-wrap items-center justify-center gap-${
                isMediumScreen ? 1 : 2
              } text-${
                isMediumScreen ? "3xl" : "5xl"
              } font-medium text-yellow-400 mb-2`}
            >
              {shuffledWords[index].prompt.split(" ").map((word, i) => (
                <button
                  key={i}
                  onClick={() => toggleWord(i)}
                  className={`px-${isMediumScreen ? 1 : 2} py-${
                    isMediumScreen ? 0.5 : 1
                  } rounded transition-all duration-150 border-2 border-white ${
                    showFeedback
                      ? shuffledWords[index].correctIndexes.includes(i)
                        ? selectedIndexes.includes(i)
                          ? "bg-green-400 text-white capitalize"
                          : "bg-red-500 text-white"
                        : selectedIndexes.includes(i)
                        ? "bg-red-500 text-white"
                        : "bg-white/20"
                      : selectedIndexes.includes(i)
                      ? "bg-yellow-300 underline text-black"
                      : "bg-white/20"
                  }`}
                  disabled={completed || gameOver || showFeedback}
                >
                  {word}
                </button>
              ))}
            </div>
            <button
              onClick={handleAnswer}
              className={`w-full bg-blue-500 text-white px-${
                isMediumScreen ? 3 : 6
              } py-${
                isMediumScreen ? 1 : 3
              } rounded-xl hover:scale-95 transition text-${
                isMediumScreen ? "md" : "xl"
              }`}
              style={{ fontFamily: "Arco" }}
              disabled={completed || gameOver || showFeedback}
            >
              Enter
            </button>
          </div>
        ) : (
          <p
            className={`text-white text-${isMediumScreen ? "xl" : "2xl"}`}
            style={{ fontFamily: "Arco" }}
          >
            Loading...
          </p>
        )}
      </div>

      <Link to="/games/capitalization">
        <motion.div
          className={`w-${isMediumScreen ? 12 : 16} h-${
            isMediumScreen ? 12 : 16 // Responsive size
          } bg-black/50 text-white rounded-full flex items-center justify-center cursor-pointer mt-4`}
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
            <TiHome className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default CapLevel2;
