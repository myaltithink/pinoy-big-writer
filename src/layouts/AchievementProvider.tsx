import React, { createContext, useContext, useState } from "react";
import type { Achievements, Room } from "../types";
import { allAchievementsDisplayData } from "../constants/seeder";
import Confetti from 'react-confetti-boom'

import { AnimatePresence, motion } from "motion/react";
import { useSoundContext } from "./SoundProvider";
import useSound from "use-sound";

const trophySoundPath = "/sounds/trophy.mp3";

interface TrophyUnlock {
    showTrophy: (trophy: Achievements, category: Room | 'all') => void
}

const TrophyContext = createContext<TrophyUnlock | undefined>(undefined);

export const useNewTrophy = () => {
    const context = useContext(TrophyContext);
    if (!context)
            throw new Error("useNewTrophy must be used within TrophyProvider");
    return context;
}

interface ProviderProps {
    children: React.ReactNode,
}

interface AchievementData {
    title: string,
    description: string,
    img: string
}

const colorScheme: Record<Room | 'all', string> = {
    content: 'border-green-600',
    grammar: 'border-blue-600',
    mechanics: 'border-red-600',
    organization: 'border-pink-600',
    vocabulary: 'border-yellow-600',
    all: 'border-yellow-600',
}

const TrophyProvider = ({ children }: ProviderProps) => {
    
    const [show, setShow] = useState(false);
    const [achievement, setAchievment] = useState<AchievementData | null>(null);
    const [borderColor, setBorderColor] = useState('');

    const { clickEnabled } = useSoundContext();
    const [playSound] = useSound(trophySoundPath, { soundEnabled: clickEnabled });

    const showPopup = (trophy: Achievements, room: Room | 'all') => {
        const data = allAchievementsDisplayData[trophy];
        setAchievment({
            title: data.title,
            description: data.description,
            img: data.imageSrc
        });

        (trophy == 'completedAllLevels')? setBorderColor('border-yellow-600') : setBorderColor(colorScheme[room]);

        const display = !show;

        if (display) 
            playSound();

        setShow(display);
    }

    const cleanUp = () => {
        setShow(false);
        setAchievment(null);
        setBorderColor('');
    }

    return (

        <TrophyContext.Provider value={{
            showTrophy: showPopup
        }}>
            <div>{children}</div>
            <div onClick={cleanUp} className={`${show? "" : "hidden"} absolute top-0 flex justify-center items-center left-0 w-dvw h-dvh`}>
                <AnimatePresence>
                    {show? 
                        <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            key="box"
                            style={{
                                padding: "10px 50px"
                            }}
                            className={`border-4 ${borderColor} shadow-2xl bg-white rounded-2xl flex justify-center items-stretch`}
                            >
                                <div className="text-center">
                                    <p style={{ fontWeight: 'bold', fontSize: '30px' }}>🎉🎉Congratulations🎉🎉 </p>
                                    <p className="mb-10">You have Acquired</p>
                                    <div className="flex justify-center">
                                        <Confetti
                                            y={0.9}
                                            particleCount={100}/>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                            key={'trophy'}>
                                            <img className="w-[100px]" src={achievement?.img!} alt={`${achievement?.title!} Trophy`}/>
                                        </motion.div>
                                    </div>
                                    <p className="mt-3"><b>{achievement?.title}</b></p>
                                    <small className="text-gray-500">Click anywhere to close</small>
                                </div>
                        </motion.div>
                    : null}
                </AnimatePresence>
            </div>
        </TrophyContext.Provider>
    );

}

export default TrophyProvider;