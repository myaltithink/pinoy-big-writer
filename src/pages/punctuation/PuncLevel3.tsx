import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { puncLevel3 as allQuestions } from "../../constants/seeder"; // Updated import to puncLevel3
import type { Word3 } from "../../types";
import { shuffleArray } from "../../utils/array";
import { Link } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";
import { markLevelComplete } from "../../utils/game";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { FaCaretLeft } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import useSound from "use-sound";
import { useSoundContext } from "../../layouts/SoundProvider";
import { useScreenSize } from "../../layouts/ScreenSizeProvider";

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

function PuncLevel3() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [stars, setStars] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Timer per question (30 seconds)
  const [gameOver, setGameOver] = useState(false);
  const [allTenQuestions, setAllTenQuestions] = useState<Word3[]>([]);
  const [typedSentence, setTypedSentence] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [popKey, setPopKey] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const { user, setUser } = useUserStore();
  const { width, height } = useWindowSize();
  const timerControls = useAnimation();
  const { clickEnabled } = useSoundContext();
  const { isMediumScreen } = useScreenSize();

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
    if (!feedback) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [feedback, inputRef]);

  useEffect(() => {
    // Take the first 10 questions and shuffle them
    const selectedQuestions = shuffleArray(allQuestions).slice(0, 10);
    setAllTenQuestions(selectedQuestions);
  }, [allQuestions]);

  useEffect(() => {
    if (
      !showInstructions &&
      !completed &&
      !gameOver &&
      allTenQuestions.length > 0 &&
      questionIndex < allTenQuestions.length
    ) {
      if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
        return () => clearTimeout(timer);
      }
      if (timeLeft === 0) {
        const currentQuestion = allTenQuestions[questionIndex];
        setIsCorrect(false);
        setFeedback(`${currentQuestion.correctSentence}`);
        playWrongSound();
        setTimeout(() => {
          setIsCorrect(null);
          setFeedback(null);
          setTypedSentence("");
          if (questionIndex + 1 === allTenQuestions.length) {
            if (stars < 7) {
              setGameOver(true);
              playLoseSound();
            } else {
              setCompleted(true);
              playWinSound();
              if (user?.username) {
                markLevelComplete(
                  user.username,
                  "punctuation",
                  2,
                  setUser,
                  stars
                ); // Assuming this is level 3, so index 2
              }
            }
          } else {
            setQuestionIndex((i) => i + 1);
            setTimeLeft(30);
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }
        }, 2000);
      }
    }
  }, [
    timeLeft,
    completed,
    gameOver,
    showInstructions,
    questionIndex,
    allTenQuestions,
    stars,
    playWrongSound,
    playLoseSound,
    playWinSound,
    user,
    setUser,
  ]);

  useEffect(() => {
    if (completed && user?.username) {
      markLevelComplete(user.username, "punctuation", 2, setUser, stars); // Assuming this is level 3, so index 2
    }
  }, [completed, stars, user, setUser]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedSentence(event.target.value);
  };

  const handleCheckAnswer = () => {
    if (completed || gameOver || showInstructions || feedback) return;

    const currentQuestion = allTenQuestions[questionIndex];
    // Make the comparison case-insensitive
    const isAnswerCorrect =
      typedSentence.trim().toLowerCase() ===
      currentQuestion.correctSentence.trim().toLowerCase();
    setIsCorrect(isAnswerCorrect);
    setFeedback(`${currentQuestion.correctSentence}`);

    if (isAnswerCorrect) {
      playCorrectSound();
      setStars((s) => s + 1);
      setPopKey((k) => k + 1);
      setTimeout(() => {
        setIsCorrect(null);
        setFeedback(null);
        setTypedSentence("");
        if (questionIndex + 1 === allTenQuestions.length) {
          if (stars + 1 >= 7) {
            setCompleted(true);
            playWinSound();
          } else {
            setGameOver(true);
            playLoseSound();
          }
        } else {
          setQuestionIndex((i) => i + 1);
          setTimeLeft(30);
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }
      }, 2000);
    } else {
      playWrongSound();
      setTimeout(() => {
        setIsCorrect(null);
        setFeedback(null);
        setTypedSentence("");
        if (questionIndex + 1 === allTenQuestions.length) {
          if (stars < 7) {
            setGameOver(true);
            playLoseSound();
          } else {
            setCompleted(true);
            playWinSound();
          }
        } else {
          setQuestionIndex((i) => i + 1);
          setTimeLeft(30);
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }
      }, 2000);
    }
  };

  const handleStartGame = () => {
    setShowInstructions(false);
    setQuestionIndex(0);
    setStars(0);
    setTimeLeft(30);
    setCompleted(false);
    setGameOver(false);
    setIsCorrect(null);
    setFeedback(null);
    setTypedSentence("");
    const selectedQuestions = shuffleArray(allQuestions).slice(0, 10);
    setAllTenQuestions(selectedQuestions);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleRestart = () => {
    setShowInstructions(false);
    setQuestionIndex(0);
    setStars(0);
    setTimeLeft(30);
    setCompleted(false);
    setGameOver(false);
    setIsCorrect(null);
    setFeedback(null);
    setTypedSentence("");
    const selectedQuestions = shuffleArray(allQuestions).slice(0, 10);
    setAllTenQuestions(selectedQuestions);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
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
      className={`w-dvw h-dvh flex flex-col items-center punctuation ${
        isMediumScreen ? "p-2" : "p-8"
      }`}
    >
      {completed && <Confetti width={width} height={height} />}
      <div
        className={`flex-1 w-full flex flex-col items-center justify-center ${
          isMediumScreen ? "gap-2 p-2" : "gap-8 p-8"
        } border-8 rounded-xl border-black/50 bg-black/75`}
      >
        {/* Top Bar (Conditional Rendering) */}
        {!showInstructions && !completed && !gameOver && (
          <div
            className={`flex justify-between items-center ${
              isMediumScreen ? "w-[60%]" : "w-[60%] mb-6"
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
                  isMediumScreen ? "text-base" : "text-2xl"
                } font-bold text-white`}
              >
                {stars}⭐
              </div>
            </motion.div>
          </div>
        )}

        {showInstructions ? (
          <div
            className={`flex flex-col ${
              isMediumScreen ? "gap-2 w-[60%]" : "gap-4 w-[60%]"
            } text-white `}
          >
            <span
              className={`${isMediumScreen ? "text-xl" : "text-3xl"}`}
              style={{ fontFamily: "Arco" }}
            >
              Instructions
            </span>
            <p
              className={`text-justify ${
                isMediumScreen ? "text-xl" : "text-3xl"
              } font-medium`}
            >
              Type the sentence exactly as it should be punctuated. You have 30
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
        ) : completed || gameOver ? (
          <div className="text-white text-3xl text-center">
            <p style={{ fontFamily: "Arco" }}>
              Game {completed ? "Complete" : "Over"}!
            </p>
            <p style={{ fontFamily: "Arco" }}>Stars: {stars} / 10</p>
            {completed && (
              <div className="flex mt-4 gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
                  style={{ fontFamily: "Arco" }}
                >
                  Play Again
                </button>
              </div>
            )}
            {!completed && (
              <button
                onClick={handleRestart}
                className="bg-green-500 text-white mt-4 px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Try Again
              </button>
            )}
          </div>
        ) : allTenQuestions.length > 0 &&
          questionIndex < allTenQuestions.length ? (
          <div
            className={`w-[60%] flex flex-col ${
              isMediumScreen ? "gap-2" : "gap-6"
            } text-white`}
          >
            {feedback ? (
              <p
                className={`${
                  isMediumScreen ? "text-2xl " : "text-5xl "
                }font-medium ${isCorrect ? "text-green-500" : "text-red-500"}`}
              >
                {feedback}
              </p>
            ) : (
              <p
                className={`${
                  isMediumScreen ? "text-2xl" : "text-5xl"
                } font-medium`}
              >
                {allTenQuestions[questionIndex].incorrectSentence}
              </p>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCheckAnswer();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={typedSentence}
                onChange={handleInputChange}
                className={` w-full border-6 ${
                  isMediumScreen ? "text-2xl p-2" : "text-5xl p-4"
                } font-medium bg-yellow-200 border-yellow-800 text-yellow-800 rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-yellow-800/25 disabled:opacity-50`}
                disabled={!!feedback}
              />
            </form>
            <button
              onClick={handleCheckAnswer}
              className={`
                  w-full text-center
                  ${feedback ? "bg-gray-500" : "bg-blue-500"}
                  text-white px-3 py-2 rounded-xl hover:scale-95 transition ease-in-out duration-300 ${
                    isMediumScreen ? "text-md" : "text-xl"
                  } self-start`}
              style={{ fontFamily: "Arco" }}
              disabled={!!feedback}
            >
              Enter
            </button>
          </div>
        ) : (
          <p className="text-white text-2xl">Loading...</p>
        )}
      </div>

      {/* Home Button */}
      <Link to="/games/punctuation">
        <motion.div
          className={`w-${isMediumScreen ? 12 : 16} h-${
            isMediumScreen ? 12 : 16 // Responsive size
          } bg-black/50 text-white rounded-full flex items-center justify-center cursor-pointer mt-2`}
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

export default PuncLevel3;
