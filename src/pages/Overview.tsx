import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa6";
import { useUserStore } from "../stores/useUserStore";

function Overview() {
  const navigate = useNavigate();
  const { user } = useUserStore();

  return (
    <div className="w-screen h-screen background ff9288] flex items-center justify-center overflow-hidden">
      <motion.div
        className="w-full h-full overview"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        <motion.button
          className="absolute bottom-5 right-5 flex items-center gap-2 bg-red-400 px-6 py-3 text-white font-bold text-2xl rounded-lg hover:bg-white hover:text-red-400 hover:scale-90"
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.1, 1, 1.1, 1],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
          onClick={() => {
            if (user) {
              navigate("/home");
            } else {
              navigate("/login");
            }
          }}
        >
          {user ? "Go to Home" : "Skip"}
          <FaCaretRight />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Overview;
