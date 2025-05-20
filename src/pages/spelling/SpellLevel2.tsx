import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { spellLevel2 as allQuestions } from "../../constants/seeder"; // Renamed import
import type { CorrectWordQuestion } from "../../types"; // Updated type import
import { shuffleArray } from "../../utils/array";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";
import { markLevelComplete } from "../../utils/game";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { MdTimer } from "react-icons/md";
import useSound from "use-sound";
import { useSoundContext } from "../../layouts/SoundProvider";
import { useScreenSize } from "../../layouts/ScreenSizeProvider";
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

// Define the structure for the shuffled question
type Question = CorrectWordQuestion;

function SpellLevel2() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [index, setIndex] = useState(0);
  const [stars, setStars] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // Timer per question - CHANGED TO 15
  const [gameOver, setGameOver] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [popKey, setPopKey] = useState(0);

  const { user, setUser } = useUserStore();
  const { width, height } = useWindowSize();
  const timerControls = useAnimation();
  const { clickEnabled } = useSoundContext(); // Get clickEnabled from the context
  const navigate = useNavigate();
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

  const totalQuestions = 10; // Always ask 10 questions
  const minStarsToPass = 7;
  const maxStarsToPass = 10;

  useEffect(() => {
    // Take the first 10 questions and shuffle them
    const selectedQuestions = shuffleArray(allQuestions).slice(
      0,
      totalQuestions
    );
    setShuffledQuestions(selectedQuestions);
  }, [allQuestions, totalQuestions]);

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
        setSelectedAnswer("Time's up!");
        setIsCorrect(false);
        playWrongSound();
        setTimeout(() => {
          setSelectedAnswer(null);
          setIsCorrect(null);
          if (index + 1 === shuffledQuestions.length) {
            if (stars >= minStarsToPass) {
              setCompleted(true);
              playWinSound();
            } else {
              setGameOver(true);
              playLoseSound();
            }
          } else if (index + 1 < shuffledQuestions.length) {
            setIndex((i) => i + 1);
            setTimeLeft(15); // Reset timer for the next question - CHANGED TO 15
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
    minStarsToPass,
  ]);

  useEffect(() => {
    if (completed && user?.username) {
      markLevelComplete(user.username, "spelling", 1, setUser, stars); // Changed level type
    }
  }, [completed, user, setUser]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null || completed || gameOver || showInstructions)
      return;

    setSelectedAnswer(answer);
    const currentQuestion = shuffledQuestions[index];
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      playCorrectSound();
      const nextStars = stars + 1; // Predict next value
      setStars(nextStars);
      setPopKey((k) => k + 1);

      setTimeout(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);

        if (index + 1 < shuffledQuestions.length) {
          setIndex((i) => i + 1);
          setTimeLeft(15);
        } else {
          if (nextStars >= minStarsToPass) {
            setCompleted(true);
            playWinSound();
          } else {
            setGameOver(true);
            playLoseSound();
          }
        }
      }, 2000);
    } else {
      playWrongSound();
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);

        if (index + 1 < shuffledQuestions.length) {
          setIndex((i) => i + 1);
          setTimeLeft(15);
        } else {
          if (stars >= minStarsToPass) {
            setCompleted(true);
            playWinSound();
          } else {
            setGameOver(true);
            playLoseSound();
          }
        }
      }, 2000);
    }
  };

  const handleStartGame = () => {
    setShowInstructions(false);
    setIndex(0);
    setStars(0);
    setTimeLeft(15); // Initial timer - CHANGED TO 15
    setCompleted(false);
    setGameOver(false);
    setSelectedAnswer(null);
    setIsCorrect(null);

    // Take the first 10 questions and shuffle them
    const selectedQuestions = shuffleArray(allQuestions).slice(
      0,
      totalQuestions
    );
    setShuffledQuestions(selectedQuestions);
  };

  const handleRestart = () => {
    setShowInstructions(false);
    setIndex(0);
    setStars(0);
    setTimeLeft(15); // Restart timer - CHANGED TO 15
    setCompleted(false);
    setGameOver(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    // Take the first 10 questions and shuffle them
    const selectedQuestions = shuffleArray(allQuestions).slice(
      0,
      totalQuestions
    );
    setShuffledQuestions(selectedQuestions);
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

  const progress = (stars / maxStarsToPass) * 100;

  return (
    <div
      className={`w-dvw h-dvh flex flex-col items-center spelling ${
        isMediumScreen ? "p-2" : "p-8"
      }`}
    >
      {completed && <Confetti width={width} height={height} />}
      <div
        className={`flex-1 w-full flex flex-col items-center justify-center ${
          isMediumScreen ? "gap-4 p-4" : "gap-8 p-8"
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
            className={`flex flex-col gap-${
              isMediumScreen ? "2" : "4"
            } text-white w-[60%]`}
          >
            <span
              className={`${isMediumScreen ? "text-xl" : "text-3xl "}`}
              style={{ fontFamily: "Arco" }}
            >
              Instructions
            </span>
            <p
              className={`text-justify font-medium ${
                isMediumScreen ? "text-xl" : "text-3xl "
              }`}
            >
              Choose the correct answer to the question. You have 15 seconds per
              question. Get at least 7 correct answers out of 10 to complete the
              level.
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
            <p style={{ fontFamily: "Arco" }}>
              Stars: {stars} / {totalQuestions}
            </p>
            {completed && (
              <div className="flex mt-4 gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
                  style={{ fontFamily: "Arco" }}
                >
                  Play Again
                </button>
                <button
                  onClick={() => navigate("/games/spelling/level-3")}
                  className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:scale-95 transition text-xl"
                  style={{ fontFamily: "Arco" }}
                >
                  Continue
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
        ) : shuffledQuestions.length > 0 ? (
          <div
            className={`w-[60%] flex flex-col gap-${
              isMediumScreen ? "2" : "6"
            } text-white`}
          >
            <p
              className={`font-medium ${
                isMediumScreen ? "text-xl" : "text-4xl"
              }`}
            >
              {index + 1}. {shuffledQuestions[index].question}
            </p>
            <div className={`grid gap-${isMediumScreen ? 2 : 4}`}>
              {shuffledQuestions[index].options.map((option, idx) => {
                let bgClass = "bg-white/20";
                if (selectedAnswer !== null) {
                  const isSel = selectedAnswer === option;
                  if (isSel) {
                    bgClass = isCorrect ? "bg-green-500" : "bg-red-500";
                  } else if (
                    option === shuffledQuestions[index].correctAnswer
                  ) {
                    bgClass = "bg-green-500"; // Highlight correct answer after wrong selection
                  } else {
                    bgClass = "bg-white/10";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className={`${bgClass} border-2 border-white text-${
                      isMediumScreen ? "md" : "3xl"
                    } font-medium px-${isMediumScreen ? 2 : 4} py-${
                      isMediumScreen ? 1 : 2
                    } rounded-lg text-left transition`}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="text-white text-2xl">Loading...</p>
        )}
      </div>

      {/* Home Button */}
      <Link to="/games/spelling">
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
            <TiHome className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default SpellLevel2;
