import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { spellLevel3 as allQuestions } from "../../constants/seeder";
import type { ScrambledWordQuestion } from "../../types";
import { shuffleArray } from "../../utils/array";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { useUserStore } from "../../stores/useUserStore";
import { markLevelComplete } from "../../utils/game";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { FaCaretLeft } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import useSound from "use-sound";
import { useSoundContext } from "../../layouts/SoundProvider";
import {
  speak as speakUtil,
  stopSpeaking as stopSpeakingUtil,
} from "../../utils/speech";
import { HiSpeakerWave } from "react-icons/hi2";

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

type Question = ScrambledWordQuestion;

function SpellLevel3() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [index, setIndex] = useState(0);
  const [stars, setStars] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [popKey, setPopKey] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const { user, setUser } = useUserStore();
  const { width, height } = useWindowSize();
  const timerControls = useAnimation();
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
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [index, showInstructions, completed, gameOver]);

  useEffect(() => {
    // Take the first 10 questions and shuffle them
    const selectedQuestions = shuffleArray(allQuestions).slice(0, 10);
    setShuffledQuestions(selectedQuestions);
  }, [allQuestions]);

  useEffect(() => {
    if (
      !showInstructions &&
      !completed &&
      !gameOver &&
      shuffledQuestions.length > 0
    ) {
      const currentQuestion = shuffledQuestions[index];
      speakUtil(currentQuestion.answer);
      const timeoutId = setTimeout(() => {
        speakUtil(currentQuestion.answer);
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
        stopSpeakingUtil(); // Stop speaking when the component unmounts or index changes
      };
    }
    return () => {
      stopSpeakingUtil(); // Also stop speaking if shuffledQuestions becomes empty
    };
  }, [shuffledQuestions, index]);

  useEffect(() => {
    if (
      !showInstructions &&
      !completed &&
      !gameOver &&
      shuffledQuestions.length > 0
    ) {
      if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
        return () => clearTimeout(timer);
      }
      if (timeLeft === 0) {
        setIsCorrect(false);
        setTimeout(() => {
          setIsCorrect(null);
          setTypedAnswer("");
          if (index + 1 === shuffledQuestions.length && stars < 10) {
            setGameOver(true);
            playLoseSound();
          } else if (index + 1 < shuffledQuestions.length) {
            setIndex((i) => i + 1);
            setTimeLeft(20);
          } else if (stars === 10) {
            setCompleted(true);
            playWinSound();
          } else {
            setGameOver(true);
            playLoseSound();
          }
        }, 2000);
      }
    }
  }, [
    timeLeft,
    completed,
    gameOver,
    showInstructions,
    index,
    shuffledQuestions,
    stars,
    playWrongSound,
    playLoseSound,
    playWinSound,
  ]);

  useEffect(() => {
    if (stars === 10 && !completed) {
      setCompleted(true);
      playWinSound();
      if (user?.username) {
        markLevelComplete(user.username, "spelling", 2, setUser);
      }
    }
  }, [stars, user, setUser, completed, playWinSound]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedAnswer(event.target.value);
  };

  const handleSubmitAnswer = () => {
    if (completed || gameOver || showInstructions || isCorrect !== null) return;

    const currentQuestion = shuffledQuestions[index];
    const correct =
      typedAnswer.toLowerCase() === currentQuestion.answer.toLowerCase();
    setIsCorrect(correct);

    if (correct) {
      playCorrectSound();
      setStars((s) => s + 1);
      setPopKey((k) => k + 1);
      setTimeout(() => {
        setIsCorrect(null);
        setTypedAnswer("");
        if (stars === 10) {
          setCompleted(true);
          playWinSound();
        } else if (index + 1 < shuffledQuestions.length) {
          setIndex((i) => i + 1);
          setTimeLeft(20);
        } else {
          setGameOver(true);
          playLoseSound();
        }
      }, 2000);
    } else {
      playWrongSound();
      setTimeout(() => {
        setIsCorrect(null);
        setTypedAnswer("");
        if (index + 1 < shuffledQuestions.length) {
          setIndex((i) => i + 1);
          setTimeLeft(20);
        } else if (stars < 10) {
          setGameOver(true);
          playLoseSound();
        }
      }, 2000);
    }
  };

  const handleStartGame = () => {
    setShowInstructions(false);
    setIndex(0);
    setStars(0);
    setTimeLeft(20);
    setCompleted(false);
    setGameOver(false);
    setTypedAnswer("");
    setIsCorrect(null);
    setShuffledQuestions(shuffleArray(allQuestions).slice(0, 10));
  };

  const handleRestart = () => {
    setShowInstructions(false);
    setIndex(0);
    setStars(0);
    setTimeLeft(20);
    setCompleted(false);
    setGameOver(false);
    setTypedAnswer("");
    setIsCorrect(null);
    setShuffledQuestions(shuffleArray(allQuestions).slice(0, 10));
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

  useEffect(() => {
    return () => {
      stopSpeakingUtil(); // Stop speaking when the component unmounts
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center spelling p-8">
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
              Listen to the word, and then type the correct spelling of the word
              shown with scrambled letters. You have 20 seconds per question.
              Get 10 correct answers to complete the level.
            </p>
            <button
              onClick={handleStartGame}
              className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition ease-in-out duration-300 w-fit text-xl"
              style={{ fontFamily: "Arco" }}
            >
              Start Game
            </button>
          </div>
        ) : completed || gameOver ? (
          <div className="text-white text-3xl text-center">
            <p style={{ fontFamily: "Arco" }}>
              Game {completed ? "Complete" : "Over"}!
            </p>
            <p style={{ fontFamily: "Arco" }}>Stars: {stars} / 10</p>
            <button
              onClick={handleRestart}
              className="bg-green-500 text-white mt-4 px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
              style={{ fontFamily: "Arco" }}
            >
              Try Again
            </button>
          </div>
        ) : shuffledQuestions.length > 0 ? (
          <div className="w-[60%] flex flex-col gap-6 text-white items-center">
            <div className="flex items-center gap-4">
              <p
                className={`text-5xl font-medium italic ${
                  isCorrect === null
                    ? ""
                    : isCorrect
                    ? "text-green-500"
                    : "text-red-500"
                }`}
                style={{ fontFamily: "Arco" }}
              >
                {isCorrect === null
                  ? shuffledQuestions[index].scrambled
                  : shuffledQuestions[index].answer}
              </p>
              <button
                onClick={() => speakUtil(shuffledQuestions[index].answer)}
                className="flex items-center gap-4 text-white text-5xl hover:text-yellow-400 transition"
                aria-label="Repeat Word"
              >
                <HiSpeakerWave />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmitAnswer();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={typedAnswer}
                onChange={handleInputChange}
                className=" w-full border-6 text-5xl font-medium bg-yellow-200 border-yellow-800 text-yellow-800 p-4 rounded-xl"
                placeholder="Type your answer here"
                disabled={isCorrect !== null}
                style={{ fontFamily: "Arco" }}
              />
            </form>
            <button
              onClick={handleSubmitAnswer}
              className={`px-6 py-3 rounded-xl hover:scale-95 transition text-xl ${
                isCorrect !== null || typedAnswer.trim() === ""
                  ? "bg-gray-500 text-gray-300"
                  : "bg-blue-500 text-white"
              }`}
              style={{ fontFamily: "Arco" }}
              disabled={isCorrect !== null || typedAnswer.trim() === ""}
            >
              Enter
            </button>
          </div>
        ) : (
          <p className="text-white text-2xl">Loading...</p>
        )}
      </div>

      <Link to="/games/spelling">
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

export default SpellLevel3;
