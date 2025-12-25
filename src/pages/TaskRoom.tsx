import { Link } from "react-router-dom";
import { useScreenSize } from "../layouts/ScreenSizeProvider";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";

interface selection{
  label: string,
  destination: string,
  width? : string
}

const destinationPrefix = "/tasks/";

function TaskRoom() {

  const selections: selection[] = [
    { label: "Content", destination: destinationPrefix + "content" },
    { label: "Organization", destination: destinationPrefix + "organization"},
    { label: "Vocabulary", destination: destinationPrefix + "vocabulary"},
    { label: "Grammar", destination: destinationPrefix + "grammar", width: "35%"},
    { label: "Mechanics", destination: destinationPrefix + "mechanics", width: "35%" }
  ]

  const { isMediumScreen } = useScreenSize();
  
  return (

    <div className={`w-dvw h-dvh flex flex-col justify-center items-center task-room ${
        isMediumScreen ? "p-2" : "p-8"
      }`}>

        <div className={`flex justify-evenly items-center flex-wrap 
            ${isMediumScreen ? "w-[70dvw] h-[75dvh] mt-10 me-10" : "w-[65dvw] h-[63dvh] mb-[60px] me-20"}`}
          >
          {selections.map((selection, id) => (
            <Link to={selection.destination} key={id}
              className={`${isMediumScreen? "w-[28%]" : `w-[${ selection.width ?? "30%"}]`}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: id * 0.2,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`text-center ${isMediumScreen? "p-10" : "p-20"}`}>
                    <p style={{fontFamily: "Arco", fontSize: `${isMediumScreen? "15px" : "22px"}`}} className="text-[#552b1a]">
                      {selection.label}
                    </p>
                </motion.div>
            </Link>
          ))}
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

export default TaskRoom;