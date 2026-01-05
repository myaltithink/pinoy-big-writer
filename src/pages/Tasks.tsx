import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegStar, FaStar, FaLock } from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import { AiOutlineFontColors } from "react-icons/ai"; // Import a spelling-related icon
import { useUserStore } from "../stores/useUserStore";
import type { LevelProgress, PracticeQuiz, Room, User } from "../types";
import { useScreenSize } from "../layouts/ScreenSizeProvider";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/localstorage";
import { PRACTICE_QUIZ } from "../constants/seeder";
import { FaFolderOpen } from "react-icons/fa6";

interface ColorData {
  background: string,
  star: string,
  folder: string
}

interface Metadata {
  category: Room,
  color: ColorData
}

const colorScheme: Record < Room, ColorData > = {
  content: {
    background: "bg-green-400",
    star: "text-green-400",
    folder: "#b8eed5"
  },
  grammar: {
    background: "bg-blue-400",
    star: "text-blue-400",
    folder: "#b3e6f2"
  },
  mechanics: {
    background: "bg-red-400",
    star: "text-red-400",
    folder: "rgb(107 27 28)"
  },
  organization: {
    background: "bg-pink-400",
    star: "text-pink-400",
    folder: "rgb(155 62 112)"
  },
  vocabulary: {
    background: "bg-yellow-600",
    star: "text-yellow-700",
    folder: "rgb(208 135 0)"
  },
}

const levelsName = ["Beginner", "Intermediate", "Advanced"];

function Tasks(props: { isPractice?: boolean }) {

  const { category } = useParams();

  const { user, setUser } = useUserStore();
  const [levels, setLevels] = useState<LevelProgress | null>(null);
  const [room, setRoom] = useState<Metadata>();
  const { isMediumScreen } = useScreenSize(); // Get screen size

  useEffect(() => {
    const roomCategory = category! as Room;
    console.log(roomCategory);
    setRoom({
      category: roomCategory,
      color: colorScheme[roomCategory]
    });
  }, [category]);

  useEffect(() => {
    if (!user) {
      const localUser = getLocalStorageItem<User>("user");

      if (localUser) {
        setLocalStorageItem("user", localUser);
        setUser(localUser);
      }
    }
    setLevels(user?.progress[room?.category!] ?? null);
  }, [user, room]);

  const formatTitle = (category?: Room) => {
    if (category == undefined) return;
    const firstLetter = category!.substring(0, 1);
    return firstLetter.toUpperCase() + category!.substring(1, category!.length);
  }

  return (  
    <div
      className={`w-dvw h-dvh flex flex-col items-center ${room?.category}-bg ${
        isMediumScreen ? "p-2" : "p-8" // Responsive padding
      }`}
    >
      {/* Top bar */}
      <div
        className={`${
          isMediumScreen ? "w-[100%]" : "w-[90%]" // Responsive width
        } flex justify-end`}
      >
        <div className="flex items-center gap-14">
          <Link to="/board/achievements">
            <motion.div
              className={`flex justify-between items-center bg-black/50 px-4 py-2 rounded-xl cursor-pointer ${
                isMediumScreen ? "min-w-[150px]" : "min-w-[200px]" // Responsive width
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
            isMediumScreen ? "lg px-2 py-1" : "3xl px-6 py-3" // Responsive text and padding
          } bg-black/50 rounded-t-3xl text-white flex items-center gap-4 border-8 border-black/50 cursor-pointer`}
          style={{ fontFamily: "Arco" }}
        >
          {formatTitle(room?.category!)} {props.isPractice? "Practice" : "Station"}
          <span
            className={`text-${
              isMediumScreen ? "lg" : "4xl"
            } w-fit h-fit text-white ${room?.color.background ?? ""} rounded-full p-2 flex items-center justify-center`}
          >
            <AiOutlineFontColors /> {/* Using a spelling-related icon */}
          </span>
        </span>
      </div>

      {/* Content */} 
      <div
        className={`flex-1 w-full flex items-center justify-around gap-${
          isMediumScreen ? "2" : "8" // Responsive gap
        } p-${
          isMediumScreen ? "2" : "8" // Responsive padding
        } border-8 rounded-xl rounded-tl-none border-black/50 bg-[#E6FECB]/25`}
      >
        {(props.isPractice!)? 
          <Practice room={room!}/>
        : 
          <Levels levels={levels!} color={room?.color!} category={room?.category!}/> }
      </div>

      {/* Home Button */}
      <Link to={(props.isPractice)? "/vault/practice" : "/task-room"}>
        <motion.div
          className={`w-${isMediumScreen ? 12 : 16} h-${
            isMediumScreen ? 12 : 16 // Responsive size
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
            <BsDoorOpenFill className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Tasks;

const Practice = (props: { room: Metadata }) => {
  
  const [weeks, setWeeks] = useState<PracticeQuiz | null>();

  useEffect(() => {
    if (props.room == undefined) return;
    setWeeks(PRACTICE_QUIZ[props.room.category].practice);
  }, [props.room?.category!]);


  return (
    <div className="flex justify-around items-center h-[80%] w-[100%]">
      <div className="week1 practice-week">
        <p style={{ fontFamily: "Arco", color: props.room?.color.folder }}>Week 1</p>
        {weeks?.week1.map((lesson, idx) => (
          <div key={idx} className={`lesson`} style={{ borderColor: props.room.color.folder }}>
            <FaFolderOpen
              style={{ color: props.room.color.folder }}
              className="text-[1.5rem] min-w-[1.5rem]"
            />
            <p style={{ fontFamily: "Arco", color: props.room?.color.folder }}>{lesson.lessonNumber} - {lesson.title}</p>
          </div>
        ))}
      </div>
      <div className="week2 practice-week">
        <p style={{ fontFamily: "Arco", color: props.room?.color.folder }}>Week 2</p>
        {weeks?.week2.map((lesson, idx) => (
          <div key={idx} className={`lesson`} style={{ borderColor: props.room.color.folder }}>
            <FaFolderOpen
              style={{ color: props.room.color.folder }}
              className="text-[1.5rem] min-w-[1.5rem]"
            />
            <p style={{ fontFamily: "Arco", color: props.room?.color.folder }}>{lesson.lessonNumber} - {lesson.title}</p>
          </div>
        ))}
      </div>
      <div className="week3 practice-week">
        <p style={{ fontFamily: "Arco", color: props.room?.color.folder}}>Week 3</p>
        {weeks?.week3.map((lesson, idx) => (
          <div key={idx} className={`lesson`} style={{ borderColor: props.room.color.folder }}>
            <FaFolderOpen
              style={{ color: props.room.color.folder }}
              className="text-[1.5rem] min-w-[1.5rem]"
            />
            <p style={{ fontFamily: "Arco", color: props.room?.color.folder }}>{lesson.lessonNumber} - {lesson.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const Levels = (props: { levels: LevelProgress, color: ColorData, category: string }) => {
  
  const { isMediumScreen } = useScreenSize();

  const renderLevelIcon = (completed: boolean, index: number) => {
    if (!props.levels) return null;

    const unlocked = index === 0 || props.levels[index - 1];
    const iconSize = isMediumScreen ? "text-6xl" : "text-9xl"; // Responsive icon size

    if (!unlocked) {
      return (
        <motion.div
          key={index}
          whileHover={{ x: [0, -3, 3, -3, 3, 0] }}
          transition={{ duration: 0.6 }}
        >
          <FaLock className={`${iconSize} text-gray-600`} />
        </motion.div>
      );
    }
    return completed ? (
      <FaStar key={index} className={`${iconSize} ${props.color.star}`} />
    ) : (
      <FaRegStar key={index} className={`${iconSize} ${props.color.star}`} />
    );
  };


  return (
    <>
      {props.levels?.map((completed, idx) => {
        const unlocked = idx === 0 || props.levels[idx - 1];

        const linkPath = `/tasks/${props.category}/level-${idx + 1}`;
        const levelContent = (
          <motion.div
            key={idx}
            className={`min-w-32 flex flex-col items-center p-4 cursor-pointer gap-4 `}
            whileHover={unlocked ? { scale: 1.2 } : {}}
          >
            {renderLevelIcon(completed, idx)}
            {unlocked && (
              <span
                className={`text-center ${
                  isMediumScreen ? "text-xl" : "text-3xl" // Responsive text
                } text-black/75 font-semibold break-words`}
                style={{ fontFamily: "Arco" }}
              >
                {levelsName[idx]}
              </span>
            )}
          </motion.div>
        );

        return unlocked ? (
          <Link key={idx} to={linkPath}>
            {levelContent}
          </Link>
        ) : (
          levelContent
        );
      })}
    </>
  )
}