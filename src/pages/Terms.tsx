import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { useScreenSize } from "../layouts/ScreenSizeProvider";
import { FaBookOpenReader } from "react-icons/fa6";

function Terms() {
  const { isMediumScreen } = useScreenSize();

  return (
    <div
      className={`w-dvw h-dvh flex flex-col items-center bg-black/10 text-white ${
        isMediumScreen ? "p-2" : "p-8"
      } background`}
    >
      <div className="w-full flex items-center justify-start">
        <span
          className={`bg-black/50 flex items-center gap-4 rounded-t-3xl border-8 border-black/50 ${
            isMediumScreen ? "text-lg px-2 py-1" : "text-3xl px-6 py-3"
          }`}
          style={{ fontFamily: "Arco" }}
        >
          Terms and Conditions
          <FaBookOpenReader
            className={`text-${isMediumScreen ? "xl" : "3xl"} text-[#F3B73F]`}
          />
        </span>
      </div>

      <div
        className={`flex-1 w-full overflow-y-auto border-8 border-black/50 bg-black/25 rounded-xl rounded-tl-none ${
          isMediumScreen ? "gap-2 p-2" : "gap-8 p-8"
        } flex flex-col text-lg`}
      >
        <h2 className="text-2xl font-bold" style={{ fontFamily: "Arco" }}>
          Welcome to Pinoy Big Writer!
        </h2>
        <p>
          By using this website, you agree to the following terms. We only store
          your username and password for authentication purposes.
        </p>

        <h3
          className="text-xl font-semibold mt-4"
          style={{ fontFamily: "Arco" }}
        >
          Usage
        </h3>
        <p>
          This application is for educational use. Please do not copy,
          distribute, or use it for commercial purposes without permission.
        </p>

        <h3
          className="text-xl font-semibold mt-4"
          style={{ fontFamily: "Arco" }}
        >
          Privacy
        </h3>
        <p>
          Your data is kept private and is only used for logging into the app,
          ranking users, user profiles, and achievements. We do not share or
          sell your information.
        </p>
      </div>

      <Link to="/home">
        <motion.div
          className={`bg-black/50 text-white rounded-full flex items-center justify-center mt-4 cursor-pointer ${
            isMediumScreen ? "w-12 h-12" : "w-16 h-16"
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TiHome className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Terms;
