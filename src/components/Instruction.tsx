
interface Props {
    isMediumScreen: boolean,
    instruction: string,
    isStart: boolean
    handleStartGame: () => void,
    handleNext: () => void
}

function Instruction(props : Props) {

    return (
        <div
          className={`flex flex-col gap-${
            props.isMediumScreen ? "2" : "4"
          } text-white w-[60%]`}
        >
            <span
              className={`${props.isMediumScreen ? "text-xl" : "text-3xl "}`}
              style={{ fontFamily: "Arco" }}
            >
                {props.isStart? "General Instruction" : "Instruction"}
            </span>
            <p
              className={`text-justify font-medium ${
                props.isMediumScreen ? "text-xl" : "text-3xl "
              }`}
              dangerouslySetInnerHTML={{ __html: props.instruction}}>
            </p>

            {(props.isStart) ? 
                <button
                onClick={props.handleStartGame}
                className={`bg-green-500 text-white rounded-xl hover:scale-95 transition ease-in-out duration-300 w-fit ${
                    props.isMediumScreen ? "text-md px-3 py-1 " : "text-xl px-6 py-3 "
                }`}
                style={{ fontFamily: "Arco" }}
                >
                Start Game
                </button>
            :
                <button
                onClick={props.handleNext}
                className={`bg-green-500 text-white rounded-xl hover:scale-95 transition ease-in-out duration-300 w-fit ${
                    props.isMediumScreen ? "text-md px-3 py-1 " : "text-xl px-6 py-3 "
                }`}
                style={{ fontFamily: "Arco" }}
                >
                Next
                </button>
            
            }
        </div>
    )

}

export default Instruction;