import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { QuestionType } from "../constants/QuestionType.Enum";
import type { QuizQuestion, Room } from "../types";
import { useSoundContext } from "../layouts/SoundProvider";
import useSound from "use-sound";

interface Props {
    category: Room,
    question: QuizQuestion,
    isMediumScreen: boolean,
    timeRemaining: number,
    answeredCallback: (isCorrect: boolean) => void,
}

interface QuestionTypeProps {
    data: Props,
    handleAnswer: (selectedAnswer: string) => void,
    answer: string | null,
    isCorrect: boolean | null
}

const correctSoundPath = "/sounds/correct.mp3";
const wrongSoundPath = "/sounds/wrong.mp3";
const correctColor = "bg-green-500";
const wrongColor = "bg-red-500"

function Question(props: Props) {

    // Sounds
    const { clickEnabled } = useSoundContext(); // Get clickEnabled from the context
    const [playCorrectSound] = useSound(correctSoundPath, {
        soundEnabled: clickEnabled,
    });
    const [playWrongSound] = useSound(wrongSoundPath, {
        soundEnabled: clickEnabled,
    });
    const handleSound = (isCorrect: boolean) => {
        isCorrect? playCorrectSound() : playWrongSound();
    }

    // Quiz Data
    const correctAnswer = props.question.correctAnswer;
    const [answer, setAnswer] = useState<string | null>(null);
    const [isCorrect, setCorrect] = useState<boolean | null>(null);

    // provides gibbering text as an answer that signify that the user ran out of time
    useEffect(() => {
      if (props.timeRemaining != 0 || answer != null) 
          return;

      handleAnswer('-1');
    }, [props.timeRemaining])

    useEffect(() => {
      resetStates();
    }, [props.question]);

    const resetStates = () => {
      setAnswer(null);
      setCorrect(null);
    }

    const handleAnswer = (selectedAnswer: string, handlerCleanup: () => void = () => {}) => {
      const answer = (props.question.type == QuestionType.LetterOrder)? correctAnswer.toString().toUpperCase() : correctAnswer;
      const correct = selectedAnswer == answer;
      setCorrect(correct);
      setAnswer(selectedAnswer);
      handleSound(correct);
      handlerCleanup();
      props.answeredCallback(correct)
    }

    const mcq = () => {
      return (
        <MCQ 
          data={props}
          answer={answer}
          handleAnswer={handleAnswer}
          isCorrect={isCorrect}
        />
      );

    }

    const orderedQuestion = () => {
      return (
        <OrderedChoices
        data={props}
        answer={answer}
        handleAnswer={handleAnswer}
        isCorrect={isCorrect}
        />
      );
    }

    if (props.question.type == QuestionType.Transitional) {
      const multipleTransition = (props.question.transitions ?? 0) > 1;
      if (multipleTransition) return orderedQuestion();
      
      return mcq();
    }

    switch (props.question.type) {
        case QuestionType.MultipleChoice:
        case QuestionType.ImageIdentification:
          return mcq();
          
        case QuestionType.SentenceOrder:
        case QuestionType.CompleteTheSentence:
        case QuestionType.WordLevel:
          return orderedQuestion();

        case QuestionType.LetterOrder:
          return (
            <WordConstruction
              data={props}
              answer={answer}
              handleAnswer={handleAnswer}
              isCorrect={isCorrect}/>
          );
        case QuestionType.Identification:
        case QuestionType.ReWriteSentence:
          return (
            <Identification
              data={props}
              answer={answer}
              handleAnswer={handleAnswer}
              isCorrect={isCorrect}
            />
          );
    }

}

export default Question;

function Identification(props: QuestionTypeProps) {

  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState<boolean>();
  const [inputBg, setInputBg] = useState('');

  // reset internal states when new question is fed as props
  useEffect(() => {
    cleanUp();
  }, [props.data.question])

  useEffect(() => {
    if (props.isCorrect == null) return;
    const bg = ((props.isCorrect)? correctColor : wrongColor) + " text-black";
    setInputBg(bg);
  }, [props.isCorrect])

  const cleanUp = () => {
    setSubmitted(false);
    setAnswer('');
    setInputBg('');
  }

  const updateInput = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setAnswer(value);
  }

  const checkAnswer = (event: FormEvent) => {
    event.preventDefault();

    if (submitted) return;
    setSubmitted(true);
    props.handleAnswer(answer.trim());
  }

  const getCorrectSentence = () => {
    const question = props.data.question.question;
    const explanation = props.data.question.explanation
    const startIndex = explanation.indexOf("“") + 1;
    const endIndex = explanation.indexOf("”");
    const word = explanation.substring(startIndex, endIndex).toLowerCase();

    const text = question.substring(2).toLowerCase();
    const correctWord = `<b>${props.data.question.correctAnswer.toString()}</b>`
    const correctSentence = text.replace(word, correctWord).trim();
    const formatted = correctSentence[0].toUpperCase() + correctSentence.substring(1);
    return formatted;
  }

  return (
    
    <div
      className={` flex flex-col gap-${
        props.data.isMediumScreen ? "2" : "6"
      } text-white`}
    >
      <p
        className={`font-medium ${
          props.data.isMediumScreen ? "text-xl" : "text-4xl"
        }`}
        dangerouslySetInnerHTML={{ __html: props.data.question.question }}
      >
      </p>
      
      <div className={`grid gap-${props.data.isMediumScreen ? 2 : 4} `}>
        <form onSubmit={checkAnswer}>
          <div className="flex justify-between items-center">
            <p className="me-2">Your Answer: </p>
            <input 
              onChange={updateInput} 
              value={answer}
              type="text"
              className={`border-2 ${inputBg} border-white rounded text-white w-[80%] ps-2 pt-1 pb-1`} />
          </div>
          <button 
            type="submit" 
            disabled={submitted}
            className="
                      border-2
                      border-white 
                      bg-blue-400 
                      text-gray-800 
                      rounded-md 
                      p-2
                      mt-2
                      w-[100%]
                    ">
            <b>Submit</b>
          </button>
        </form>
      </div>
      {props.isCorrect !== null &&
       !props.isCorrect &&
      (
        <>
          <p dangerouslySetInnerHTML={{ __html: props.data.question.explanation }}></p>
          {props.data.category === "vocabulary" && 
          (<p><b className="text-green-500">Correct Answer</b>: <u dangerouslySetInnerHTML={{__html: getCorrectSentence()}}></u></p>)
          }
        </>
      )}
    </div>
  )
}

function WordConstruction(props: QuestionTypeProps) {

  const answerLength = props.data.question.choices?.length;
  const [order, setOrder] = useState<number[]>([]);
  const [displayOrder, setDisplayOrder] = useState('');

  // cleanup
  useEffect(() => {
    setOrder([]);
    setDisplayOrder('');
  }, [props.data.question])

  // listens to order and process the new display
  useEffect(() => {

    console.log(props.data.question.explanation)

    const choices = props.data.question.choices!;
    let display = "";

    order.forEach((i) => {
      display += choices[i];
    });
    setDisplayOrder(display.toUpperCase());

    if (order.length == answerLength) {
      props.handleAnswer(display);
    }
  }, [order])

  const optionClicked = (option: number, selected: boolean) => {
    if (selected) {
      setOrder(o => o.filter(i => i != option));
      return;
    }
    setOrder(o => [...o, option]);
  }

  return (
    <div
        className={` flex flex-col gap-${
          props.data.isMediumScreen ? "2" : "6"
        } text-white`}
      >
        <p
          className={`font-medium ${
            props.data.isMediumScreen ? "text-xl" : "text-4xl"
          }`}
          dangerouslySetInnerHTML={{ __html: props.data.question.question }}
        >
        </p>
        <p><u>Your Answer: {displayOrder}</u></p>
        
          {props.isCorrect !== null && !props.isCorrect &&
            (
              <>
                <p>Explanation: {props.data.question.explanation}</p>
                <p><span className="text-green-500">Correct Answer</span>: {props.data.question.correctAnswer}</p>
              </>
            )
          }
        <div className={`flex justify-between`}>
          {props.data.question?.choices!.map((option, idx) => {
            const selected = order.includes(idx);
            let bgClass = (selected)? "bg-green-300" : "bg-white/20";

            if (order.length === answerLength) {
              bgClass = (props.isCorrect)? correctColor : wrongColor;
            }
            
            return (
              <button
                key={idx}
                onClick={() => optionClicked(idx, selected)}
                className={`${bgClass} border-2 border-white text-${
                  props.data.isMediumScreen ? "md" : "3xl"
                } font-medium px-${props.data.isMediumScreen ? 2 : 4} py-${
                  props.data.isMediumScreen ? 1 : 2
                } rounded-lg text-left transition`}
                disabled={props.answer !== null}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
  )
}

function OrderedChoices(props: QuestionTypeProps) {

  const answerLength = props.data.question.correctAnswer.toString().split("-").length;
  const [order, setOrder] = useState<string[]>([]);
  const [displayOrder, setDisplayOrder] = useState('');

  // cleanup
  useEffect(() => {
    setOrder([]);
    setDisplayOrder('');
  }, [props.data.question])

  // listens to order and process the new display
  useEffect(() => {
    let newDisplay = '';

    order.forEach((item, i) => {
      if (newDisplay.length == 0) {
        newDisplay = item + "-";
        return;
      }

      if ((i + 1) == order.length) {
        newDisplay += item;
        return;
      }

      newDisplay += `${item}-`
  
    })

    setDisplayOrder(newDisplay);

    if (order.length == answerLength) {
      props.handleAnswer(newDisplay);
    }
  }, [order])

  const optionClicked = (option: string, selected: boolean) => {
    const choiceNumber = option.split(" - ")[0];
    if (selected) {
      setOrder(o => o.filter(i => i != choiceNumber));
      return;
    }
    setOrder((o) => [...o, choiceNumber]);
  }


  const getExplanation = () => {
    const hasExplanation = props.data.question.explanation != "";

    if (hasExplanation) {
      return `Explanation: ${props.data.question.explanation}`;
    }
    return `<span className="text-green-500">Correct Answer</span>: ${props.data.question.correctAnswer}`;
  }

  return (
    <div
        className={` flex flex-col gap-${
          props.data.isMediumScreen ? "2" : "6"
        } text-white`}
      >
        <p
          className={`font-medium ${
            props.data.isMediumScreen ? "text-xl" : "text-4xl"
          }`}
          dangerouslySetInnerHTML={{ __html: props.data.question?.question }}
        >
        </p>
        <p><u>Your Answer: {displayOrder}</u></p>
        
        <p>
          {props.isCorrect !== null && !props.isCorrect ?
            (props.data.question.explanation == '')?
              `Correct Answer: ${props.data.question.correctAnswer}`
            :
              `Explanation: ${<span dangerouslySetInnerHTML={{ __html: props.data.question?.explanation }}></span>}`
          : null
          }
        </p>
        <div className={`grid gap-${props.data.isMediumScreen ? 2 : 4} `}>
          {props.data.question?.choices!.map((option, idx) => {
            const selected = order.includes(option.split(" - ")[0]);
            let bgClass = (selected)? "bg-green-300" : "bg-white/20";

            if (order.length === answerLength) {
              bgClass = (props.isCorrect)? correctColor : wrongColor;
            }
            
            return (
              <button
                key={idx}
                onClick={() => optionClicked(option, selected)}
                className={`${bgClass} border-2 border-white text-${
                  props.data.isMediumScreen ? "md" : "3xl"
                } font-medium px-${props.data.isMediumScreen ? 2 : 4} py-${
                  props.data.isMediumScreen ? 1 : 2
                } rounded-lg text-left transition`}
                disabled={props.answer !== null}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
  )
}

function MCQ(props: QuestionTypeProps) {
    const alphabeth = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    return (
        <div
            className={` flex flex-col gap-${
              props.data.isMediumScreen ? "2" : "6"
            } text-white`}
          >
            {(props.data.question.type == QuestionType.ImageIdentification)? 
              <>
                <p>Identify the image below</p>
                <img src={props.data.question.question} />
              </>
            :
              <p
                className={`font-medium ${
                  props.data.isMediumScreen ? "text-xl" : "text-4xl"
                }`}
                dangerouslySetInnerHTML={{ __html: props.data.question?.question }}
              >
              </p>
            }
            <div className={`grid gap-${props.data.isMediumScreen ? 2 : 4} `}>
              {props.data.question?.choices!.map((option, idx) => {
                let bgClass = "bg-white/20";
                if (props.answer !== null) {
                  const isSel = props.answer === option;
                  if (isSel) {
                    bgClass = props.isCorrect ? correctColor : wrongColor;
                  } else if (
                    option === props.data.question.correctAnswer
                  ) {
                    bgClass = correctColor; // Highlight correct answer after wrong selection
                  } else {
                    bgClass = "bg-white/10";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => props.handleAnswer(option)}
                    className={`${bgClass} border-2 border-white text-${
                      props.data.isMediumScreen ? "md" : "3xl"
                    } font-medium px-${props.data.isMediumScreen ? 2 : 4} py-${
                      props.data.isMediumScreen ? 1 : 2
                    } rounded-lg text-left transition`}
                    disabled={props.answer !== null}
                  >
                    {(props.data.question.choiceType == 'alpha')? alphabeth[idx] + ".)" : ''} {option}
                  </button>
                );
              })}
            </div>
            
            {props.isCorrect !== null &&
             !props.isCorrect &&
            (
              <p dangerouslySetInnerHTML={{ __html: props.data.question.explanation }}></p>
            )}
          </div>
    )

}