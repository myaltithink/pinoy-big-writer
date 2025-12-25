import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { MdTimer } from "react-icons/md";
import useSound from "use-sound";
import { TiHome } from "react-icons/ti";
import { useUserStore } from "../stores/useUserStore";
import { useSoundContext } from "../layouts/SoundProvider";
import { useScreenSize } from "../layouts/ScreenSizeProvider";
import type { QuizQuestion, QuizSet, Room, SetContainer } from "../types";
import Instruction from "../components/Instruction";
import { QuestionType } from "../constants/QuestionType.Enum";
import Question from "../components/Question";
import { markLevelComplete } from "../utils/game";

const winSoundPath = "/sounds/win.mp3";
const loseSoundPath = "/sounds/lose.mp3";

const starColors = [
  "text-blue-500",
  "text-green-500",
  "text-yellow-400",
  "text-orange-500",
  "text-red-500",
];

type Status = 'start' | 'ongoing' | 'done';

interface QuizProps {
  category: Room,
  questionSet: SetContainer[],
  backgroundClass: string,
  levelIndex: number
}

function QuizHandler(props : QuizProps) {

  // STATES
  const [completed, setCompleted] = useState(false);
  const [status, setStatus] = useState<Status>('start');
  const { isMediumScreen } = useScreenSize();

  // METADATA
  const [timeLeft, setTimeLeft] = useState(0); // Timer per question
  const [timeLimit, setTimeLimit] = useState(0);
  const [passingScore, setPassingScore] = useState(0);
  const [score, setScore] = useState(-1);

  // QUIZ DATA
  const [selectedSet, setSelectedSet] = useState<QuizSet>();
  const [question, setQuestion] = useState<QuizQuestion>();
  const [quizIndex, setQuizIndex] = useState(-1);

  const { user, setUser } = useUserStore();
  const { width, height } = useWindowSize();
  const timerControls = useAnimation();
  const navigate = useNavigate();
  
  // SOUND CONTROLS
  const { clickEnabled } = useSoundContext(); // Get clickEnabled from the context
  const [playWinSound] = useSound(winSoundPath, { soundEnabled: clickEnabled });
  const [playLoseSound] = useSound(loseSoundPath, {
    soundEnabled: clickEnabled,
  });

  // Initialization
  useEffect(() => {
    selectSet();
  }, []);
  
  const selectSet = () => {
    const setIndex = Math.floor(Math.random() * props.questionSet.length);
    const quiz = props.questionSet[setIndex]
  
    setSelectedSet(quiz.set);
    setTimeLimit(quiz.metadata.timeLimit);
    setPassingScore(quiz.metadata.passingScore);
    setScore(0);
  }

  // Listens to score changes (correct answer)
  useEffect(() => {
    if (score >= passingScore) {
      setCompleted(true);
    }
  }, [score])
  
  // Listens to question to handle timer
  useEffect(() => {
    const resetTimer = () => {
      if (
        question?.type == QuestionType.Direction ||
        question == null
      ){
        return;
      }
  
      setTimeLeft(timeLimit); // reset counter
    }
    resetTimer();
  }, [question])
  
  useEffect(() => {
    if (timeLeft == 0) return;
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(timer);
  }, [timeLeft])

  const startGame = () => {
    setQuestion(selectedSet?.questions[0]);
    setQuizIndex(0);
    setStatus('ongoing');
    setTimeLeft(timeLimit);
  }
  
  // called by <Instruction> when the type is QuestionType.Direction
  const nextQuestion = () => {
    const newIndex = quizIndex + 1;

    if (newIndex == selectedSet?.questions.length) {
      setStatus('done');
      save();
      return;
    }

    setQuestion(selectedSet?.questions[newIndex]);
    setQuizIndex(newIndex);
  }

  const handleNext = (isCorrect: boolean, resetQuestion: () => void) => {
    if (isCorrect) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      resetQuestion();
      nextQuestion()
    }, 3000);
  }

  const handleRestart = () => {
    setStatus('start');
    selectSet();
  }

  const nextLevel = () => {
    navigate(`/tasks/${props.category}/${props.levelIndex + 2}`)
  }

  const save = () => {
    if (!completed) {
      playLoseSound();
      return;
    }

    if (user?.username) {
      playWinSound();
      markLevelComplete(user.username, props.category, props.levelIndex, setUser, score);
    }
  }

  const starColor =
    score <= 2
      ? starColors[0]
      : score <= 4
      ? starColors[1]
      : score <= 6
      ? starColors[2]
      : score <= 8
      ? starColors[3]
      : starColors[4];

  const progress = (score / selectedSet?.questions.length!) * 100;

  return (
    <div
      className={`w-dvw h-dvh flex flex-col items-center overflow-auto ${props.backgroundClass} ${
        isMediumScreen ? "p-2" : "p-8"
      }`}
    >
      {(completed && status == 'done') && <Confetti width={width} height={height} />}
      <div
        className={`flex-1 w-full flex flex-col items-center justify-center ${
          isMediumScreen ? "gap-4 p-4" : "gap-8 p-8"
        } border-8 rounded-xl border-black/50 bg-black/75`}
      >
        {/* Top Bar (Conditional Rendering) */}
        {
          status == 'ongoing' &&
          question?.type != QuestionType.Direction &&
         (
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
                >
                  {timeLeft}s
                </span>
              </motion.div>
              <motion.div
                key={score}
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
                  {score}⭐
                </div>
              </motion.div>
            </div>
          )}

        {status == 'start' || question?.type == QuestionType.Direction? (

          <Instruction 
            handleStartGame={startGame}
            handleNext={nextQuestion}
            instruction={
              (question?.type == QuestionType.Direction)? 
                question.direction!
              :
                selectedSet?.instruction!
            }
            isStart={status == 'start'}
            isMediumScreen={isMediumScreen}
          />

        ) : status == 'done' ? (
          <div className="text-white text-3xl text-center">
            <p style={{ fontFamily: "Arco" }}>
              Game {completed ? "Complete" : "Over"}!
            </p>
            <p style={{ fontFamily: "Arco" }}>Stars: {score} / 10</p>
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
                  onClick={nextLevel}
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
        ) : status == 'ongoing' ? (
          <Question 
              question={question!} 
              isMediumScreen={isMediumScreen}
              answeredCallback={handleNext}
              timeRemaining={timeLeft}
            />
        ) : (
          <p className="text-white text-2xl">Loading...</p>
        )}
      </div>

      {/* Home Button */}

      <Link to={`/tasks/${props.category}`}>
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

export default QuizHandler;
