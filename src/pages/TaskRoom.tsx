import { Link } from "react-router-dom";
import { useScreenSize } from "../layouts/ScreenSizeProvider";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import type { Room } from "../types";

import "../assets/styles/taskroom.css";

interface Categories{
  label: string,
  destination: string,
  width? : string
}

const destinationPrefix = "/tasks/";

function TaskRoom() {

  const selections: Record<Room, Categories> = {
    content: { label: "Content", destination: destinationPrefix + "content" },
    organization: { label: "Organization", destination: destinationPrefix + "organization"},
    vocabulary: { label: "Vocabulary", destination: destinationPrefix + "vocabulary"},
    grammar: { label: "Grammar", destination: destinationPrefix + "grammar", width: "35%"},
    mechanics: { label: "Mechanics", destination: destinationPrefix + "mechanics", width: "35%" }
  }
  

  const { isMediumScreen } = useScreenSize();
  
  return (

    <div className={`task-room w-dvw h-dvh flex flex-col justify-center items-center task-room ${
        isMediumScreen ? "p-2" : "p-8"
      }`}>

        <div className="selection-container">
            <div className="top-category flex justify-between">
              <Category category={selections.content} id={1}/>
              <Category category={selections.organization} id={2}/>
              <Category category={selections.vocabulary} id={3}/>
            </div>
            <div className="bottom-category flex justify-between">
              <Category category={selections.grammar} id={4}/>
              <Category category={selections.mechanics} id={5}/>
            </div>
        </div>

          <Link to="/home" className="absolute bottom-10">
            <motion.div
              className={`w-${isMediumScreen ? 12 : 16} h-${
                isMediumScreen ? 12 : 16
              } bg-black/50 text-[#fdf9ef] rounded-full flex items-center justify-center cursor-pointer mt-4`}
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
                <TiHome
                  className={`w-${isMediumScreen ? 8 : 8} h-${
                    isMediumScreen ? 8 : 8
                  }`}
                />
              </motion.div>
            </motion.div>
          </Link>

    </div>
  );
}

function Category(props: { category: Categories, id: number }) {

  const { isMediumScreen } = useScreenSize();

  return(
    <Link to={props.category.destination}
      className={`category ${props.category.label}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: props.id * 0.2,
            type: "spring",
          }}
          whileHover={{ scale: 1.1 }}
          className={`text-center`}>
            <p style={{fontFamily: "Arco", fontSize: `${isMediumScreen? "15px" : "22px"}`}} className="text-[#552b1a]">
              {props.category.label}
            </p>
        </motion.div>
    </Link>
  )
}

export default TaskRoom;