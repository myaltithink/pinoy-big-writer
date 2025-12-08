import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa6";
import { useScreenSize } from "../layouts/ScreenSizeProvider";

function Rules() {
  const navigate = useNavigate();

  const { isMediumScreen } = useScreenSize();

  return (
    <div className="w-dvw h-dvh background  flex items-center justify-center overflow-hidden">
      <motion.div
        className="w-full h-full rules"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        <motion.button
          className={`absolute flex items-center gap-2 bg-red-400 px-6 py-3 text-white font-bold rounded-xl border-6 border-black hover:scale-90 cursor-pointer ${
            isMediumScreen
              ? "text-lg bottom-0 right-1"
              : "text-2xl bottom-5 right-5 "
          }`}
          style={{
            fontFamily: "Arco",
          }}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.1],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
          onClick={() => navigate("/home")}
        >
          Home
          <FaCaretRight />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Rules;
