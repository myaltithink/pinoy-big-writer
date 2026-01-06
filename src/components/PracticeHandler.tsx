import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuizHandler from "../pages/QuizHandler";
import type { PracticeQuiz, Room, SetContainer } from "../types";
import { PRACTICE_QUIZ } from "../constants/seeder";

interface CategoryData {
    background: string,
    questionSet: SetContainer[],
    levelIndex: number,
}

const PracticeHandler = () => {

    const { category, weekNumber, lessonNumber } = useParams();
    const [data, setData] = useState<CategoryData>();

    useEffect(() => {
        const room = category as Room;
        const week = `week${weekNumber}` as keyof PracticeQuiz;

        const quiz = PRACTICE_QUIZ[room].practice!
        const weekData = quiz[week]
        const lesson = weekData.filter((lesson) => lesson.lessonNumber == Number(lessonNumber))[0];

        setData({
            background: `${category}-bg`,
            levelIndex: 0,
            questionSet: lesson.sets
        });        
    }, []);

    return(
        <>
            {data !== undefined &&

                <QuizHandler
                    backgroundClass={data?.background!}
                    category={category! as Room}
                    levelIndex={data?.levelIndex!}
                    questionSet={data?.questionSet!}
                    practiceMode
                    />
            }
        </>
    );
}

export default PracticeHandler;