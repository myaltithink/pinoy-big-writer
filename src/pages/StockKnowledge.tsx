import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useScreenSize } from "../layouts/ScreenSizeProvider";
import { useUserStore } from "../stores/useUserStore";
import { FaFolderOpen, FaStar } from "react-icons/fa6";
import { PiVideo } from "react-icons/pi";
import type { Room, VaultContent, VaultData } from "../types";
import { useEffect, useState } from "react";
import { VAULT_VIDEOS } from "../constants/seeder";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSoundContext } from "../layouts/SoundProvider";
import { getLocalStorageItem } from "../utils/localstorage";

interface ColorScheme {
    background: string,
    folder: string,
    star: string
}

const colorScheme: Record < Room, ColorScheme > = {
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
    folder: "rgb(207 66 68)"
  },
  organization: {
    background: "bg-pink-400",
    star: "text-pink-400",
    folder: "rgb(251 131 196)"
  },
  vocabulary: {
    background: "bg-yellow-600",
    star: "text-yellow-700",
    folder: "rgb(255 182 46)"
  },
}

const StockKnowledge = () => {

    const { category } = useParams();
    const { isMediumScreen } = useScreenSize();
    const { user } = useUserStore();
    const { toggleMusic } = useSoundContext();

    const [color, setColor] = useState<ColorScheme>();
    const [weeks, setWeeks] = useState<VaultContent>();
    const [lessonData, setLessonData] = useState<VaultData | undefined>();
    const [musicState, setMusicState] = useState<boolean>();

    useEffect(() => {
        const originalMusicState = getLocalStorageItem("musicEnabled") as boolean;
        setMusicState(originalMusicState);

        const key = category! as Room;
        setColor(colorScheme[key]);
        setWeeks(VAULT_VIDEOS[key]);
    }, [category]);

    const openVideo = (week: number, lessonNumber: number) => {

        if (musicState) {
            toggleMusic();
        }

        const key = category as Room;
        const lessons = VAULT_VIDEOS[key][`week${week}` as keyof VaultContent];
        const lesson = lessons.filter(lesson => lesson.lessonNumber == lessonNumber)[0];
        setLessonData(lesson);
    }

    const closeOverlay = () => {
        if (musicState) {
            toggleMusic();
        }
        setLessonData(undefined);
    }

    return(
        <div    
            className={`w-screen h-screen flex flex-col items-center ${category}-bg ${
                isMediumScreen ? "p-2" : "p-8"
            }`}
            >
            {/* Top bar */}
            <div
                className={`w-${isMediumScreen ? "[100%]" : "[90%]"} flex justify-end`}
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
                } bg-black/50 rounded-t-3xl text-white flex items-center gap-4 border-8 border-black/50 cursor-pointer`}
                style={{ fontFamily: "Arco" }}
                >
                    {category} Lesson Vault
                    <PiVideo
                        className={`text-${
                        isMediumScreen ? "3xl" : "5xl"
                        } text-white ${color?.background} p-2 rounded-full`}
                    />
                </span>
            </div>

            {/* Content */}
            <div
                className={`flex-1 w-full flex items-center justify-around ${
                isMediumScreen ? "gap-4 p-4" : "gap-8 p-8"
                } border-8 rounded-xl rounded-tl-none border-black/50 bg-black/25`}
            >    
                <div className="flex justify-around items-center h-[80%] w-[100%]">
                <div className="week1 practice-week">
                    <p style={{ fontFamily: "Arco", color: color?.folder }}>Week 1</p>
                    {weeks?.week1.map((lesson, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => openVideo(1, lesson.lessonNumber)}
                        className={`lesson`} 
                        style={{ borderColor: color?.folder }}
                        >
                        <FaFolderOpen
                            style={{ color: color?.folder }}
                            className="text-[1.5rem] min-w-[1.5rem]"
                        />
                        <p style={{ fontFamily: "Arco", color: color?.folder }}>{lesson.lessonNumber} - {lesson.title}</p>
                    </div>
                    ))}
                </div>
                <div className="week2 practice-week">
                    <p style={{ fontFamily: "Arco", color: color?.folder }}>Week 2</p>
                    {weeks?.week2.map((lesson, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => openVideo(2, lesson.lessonNumber)}
                        className={`lesson`} 
                        style={{ borderColor: color?.folder }}
                        >
                        <FaFolderOpen
                            style={{ color: color?.folder }}
                            className="text-[1.5rem] min-w-[1.5rem]"
                        />
                        <p style={{ fontFamily: "Arco", color: color?.folder }}>{lesson.lessonNumber} - {lesson.title}</p>
                    </div>
                    ))}
                </div>
                <div className="week3 practice-week">
                    <p style={{ fontFamily: "Arco", color: color?.folder}}>Week 3</p>
                    {weeks?.week3.map((lesson, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => openVideo(3, lesson.lessonNumber)}
                        className={`lesson`} 
                        style={{ borderColor: color?.folder }}
                        >
                        <FaFolderOpen
                            style={{ color: color?.folder }}
                            className="text-[1.5rem] min-w-[1.5rem]"
                        />
                        <p style={{ fontFamily: "Arco", color: color?.folder }}>{lesson.lessonNumber} - {lesson.title}</p>
                    </div>
                    ))}
                </div>
                </div>

            </div>

            {/* Home Button */}
            <Link to="/vault/vault">
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
                    <FaFolderOpen
                    className={`w-${isMediumScreen ? 8 : 8} h-${
                        isMediumScreen ? 8 : 8
                    }`}
                    />
                </motion.div>
                </motion.div>
            </Link>

            {lessonData !== undefined && (<VideoOverlay video={lessonData!} closeCallback={closeOverlay}/>)}
        </div>
    )
}

interface OverlayProps {
    video: VaultData,
    closeCallback: () => void
}

const VideoOverlay = (props: OverlayProps) => {

    return (
        <>
            <div 
                onClick={() => props.closeCallback()}
                className="
                    overlay 
                    h-[100dvh] 
                    w-[100dvw] 
                    absolute 
                    top-0 
                    left-0 
                    flex 
                    justify-center 
                    items-center
                " 
                style={{
                    color: "white", 
                    fontFamily: "Arco", 
                    backgroundColor: "rgb(0 0 0 / 50%)" 
                }}>
                <div className="h-100">
                    <div className="video-container" dangerouslySetInnerHTML={{ __html: props.video.src }}></div>
                    <p className="text-center">
                        <small style={{ fontFamily: "sans-serif" }}><i>Click anywhere outside to close the video</i></small>
                    </p>
                </div>
            </div>
        </>
    );
}

export default StockKnowledge;
