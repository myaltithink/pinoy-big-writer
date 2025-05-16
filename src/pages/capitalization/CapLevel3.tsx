import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { capLevel3 as allWords } from "../../constants/seeder";
import type { Word3 } from "../../types";
import { shuffleArray } from "../../utils/array";
import { Link } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa6";
import { useUserStore } from "../../stores/useUserStore";
import { markLevelComplete } from "../../utils/game";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { MdTimer } from "react-icons/md";
import useSound from "use-sound";
import { useSoundContext } from "../../layouts/SoundProvider";

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

function CapLevel3() {
  const [index, setIndex] = useState(0);
  const [stars, setStars] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Changed initial time to 30 seconds
  const [gameOver, setGameOver] = useState(false);
  const [shuffledSentences, setShuffledSentences] = useState<Word3[]>([]);
  const [popKey, setPopKey] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showInstructions, setShowInstructions] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [feedbackSentence, setFeedbackSentence] = useState("");

  const { user, setUser } = useUserStore();
  const { width, height } = useWindowSize();
  const timerControls = useAnimation();
  const inputRef = useRef<HTMLInputElement>(null);
  const { clickEnabled } = useSoundContext();

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
    const selectedWords = shuffleArray(allWords).slice(0, 10);
    setShuffledSentences(selectedWords as Word3[]);
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
      setIsCorrect(false);
      setFeedbackSentence(shuffledSentences[index]?.correctSentence || "");
      if (clickEnabled) playWrongSound();
      setTimeout(() => {
        if (questionsAnswered + 1 < 10) {
          setIndex((i) => i + 1);
          setUserAnswer("");
          setTimeLeft(30); // Reset time to 30 seconds
          setShowFeedback(false);
          setIsCorrect(false);
          setFeedbackSentence("");
          setQuestionsAnswered((prev) => prev + 1);
        } else {
          setGameOver(true);
          if (clickEnabled) playLoseSound();
        }
      }, 3000);
    }
  }, [
    timeLeft,
    completed,
    gameOver,
    showInstructions,
    index,
    shuffledSentences,
    stars,
    showFeedback,
    clickEnabled,
    playWrongSound,
    playLoseSound,
    questionsAnswered,
  ]);

  useEffect(() => {
    if (!showFeedback) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [showFeedback, inputRef]);

  useEffect(() => {
    if (questionsAnswered === 10) {
      if (stars >= 7 && stars <= 10 && !completed) {
        setCompleted(true);
        if (clickEnabled) playWinSound();
        if (user?.username) {
          markLevelComplete(user.username, "capitalization", 2, setUser, stars);
        }
      } else if (!gameOver) {
        setGameOver(true);
        if (clickEnabled) playLoseSound();
      }
    }
  }, [
    stars,
    user,
    setUser,
    completed,
    clickEnabled,
    playWinSound,
    gameOver,
    questionsAnswered,
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const handleAnswer = () => {
    if (
      completed ||
      gameOver ||
      showInstructions ||
      showFeedback ||
      !shuffledSentences[index]
    )
      return;

    setShowFeedback(true);
    const currentSentence = shuffledSentences[index].correctSentence;
    const isAnswerCorrect = userAnswer.trim() === currentSentence.trim();
    setIsCorrect(isAnswerCorrect);
    setFeedbackSentence(currentSentence);
    // setUserAnswer(currentSentence); // Directly put the correct sentence in the input

    setTimeout(() => {
      if (isAnswerCorrect) {
        if (clickEnabled) playCorrectSound();
        setTimeLeft((t) => Math.max(t + 5, 0));
        setStars((s) => s + 1);
        setPopKey((k) => k + 1);
        if (questionsAnswered + 1 < 10) {
          setIndex((i) => i + 1);
          setUserAnswer("");
          setTimeLeft(30); // Reset time to 30 seconds
          setShowFeedback(false);
          setIsCorrect(false);
          setFeedbackSentence("");
          setQuestionsAnswered((prev) => prev + 1);
        } else if (stars >= 7 && stars <= 10 && !completed) {
          setCompleted(true);
        } else if (!gameOver) {
          setGameOver(true);
          if (clickEnabled) playLoseSound();
        }
      } else {
        if (clickEnabled) playWrongSound();
        if (questionsAnswered + 1 < 10) {
          setIndex((i) => i + 1);
          setUserAnswer("");
          setTimeLeft(30); // Reset time to 30 seconds
          setShowFeedback(false);
          setIsCorrect(false);
          setFeedbackSentence("");
          setQuestionsAnswered((prev) => prev + 1);
          if (inputRef.current) {
            inputRef.current.focus();
          }
        } else if (stars >= 7 && stars <= 10 && !completed) {
          setCompleted(true);
        } else if (!gameOver) {
          setGameOver(true);
          if (clickEnabled) playLoseSound();
        }
      }
    }, 2000);
  };

  const handleRestart = () => {
    const selectedWords = shuffleArray(allWords).slice(0, 10);
    setIndex(0);
    setStars(0);
    setTimeLeft(30); // Reset time to 30 seconds
    setCompleted(false);
    setGameOver(false);
    setShuffledSentences(selectedWords as Word3[]);
    setUserAnswer("");
    setShowInstructions(true);
    setShowFeedback(false);
    setIsCorrect(false);
    setFeedbackSentence("");
    setQuestionsAnswered(0);
  };

  const handleStartGame = () => {
    const selectedWords = shuffleArray(allWords).slice(0, 10);
    setShowInstructions(false);
    setIndex(0);
    setStars(0);
    setTimeLeft(30); // Reset time to 30 seconds
    setCompleted(false);
    setGameOver(false);
    setUserAnswer("");
    setShuffledSentences(selectedWords as Word3[]);
    setShowFeedback(false);
    setIsCorrect(false);
    setFeedbackSentence("");
    setQuestionsAnswered(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const starColor =
    stars < 2
      ? starColors[0]
      : stars < 4
      ? starColors[1]
      : stars < 6
      ? starColors[2]
      : stars < 8
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
              Type the sentence with correct capitalization. You have 30 seconds
              per question. Get a minimum of 7 stars and a maximum of 10 stars
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
            <p style={{ fontFamily: "Arco" }}>Game Over!</p>
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
            <p style={{ fontFamily: "Arco" }}>Level Complete!</p>
            <p style={{ fontFamily: "Arco" }}>Stars: {stars} / 10</p>
            <div className="flex mt-4 gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Play Again
              </button>
            </div>
          </div>
        ) : shuffledSentences.length > 0 ? (
          <div className="w-[60%] flex flex-col gap-6 text-white items-center">
            {!showFeedback && (
              <p className="text-5xl font-medium text-white text-center">
                {shuffledSentences[index].incorrectSentence}
              </p>
            )}
            {showFeedback && (
              <p
                className={`text-5xl font-medium text-center ${
                  isCorrect ? "text-green-500" : "text-red-500"
                }`}
              >
                {feedbackSentence}
              </p>
            )}
            <form
              className="w-full"
              onSubmit={(e) => {
                e.preventDefault();
                handleAnswer();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                className=" w-full border-6 text-5xl font-medium bg-yellow-200 border-yellow-800 text-yellow-800 p-4 rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-yellow-800/25 disabled:opacity-50"
                placeholder="Type your answer here"
                disabled={completed || gameOver || showFeedback}
              />
            </form>
            <button
              onClick={handleAnswer}
              className={`w-full bg-blue-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl ${
                completed || gameOver || showFeedback || !userAnswer.trim()
                  ? "bg-gray-500"
                  : ""
              }`}
              style={{ fontFamily: "Arco" }}
              disabled={
                completed || gameOver || showFeedback || !userAnswer.trim()
              }
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

export default CapLevel3;
