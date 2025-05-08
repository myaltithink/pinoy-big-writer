import { FaStar, FaCog, FaUser } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { BsDoorOpenFill } from "react-icons/bs";
import { PiVaultFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4 font-sans stripes">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/settings"
          className="w-10 h-10 inline-flex items-center justify-center rounded-md text-gray-600 hover:scale-90"
        >
          <FaCog className="w-40 h-40" />
        </Link>

        <Link
          to="/profile"
          className="w-10 h-10 inline-flex items-center justify-center rounded-md text-yellow-500 hover:scale-90"
        >
          <FaUser className="w-10 h-10" />
        </Link>
      </div>

      {/* Title */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img src="brand.png" alt="" className="w-[30%]" />
      </motion.div>

      {/* Main Buttons */}
      <div className="mx-auto flex flex-col items-center gap-8 w-[50%] font-serif">
        {[
          {
            icon: <BsDoorOpenFill className="w-6 h-6 text-green-600" />,
            label: "Play",
            path: "/games",
          },
          {
            icon: <PiVaultFill className="w-6 h-6 text-green-600" />,
            label: "Practice",
            path: "/vault",
          },
          {
            icon: <FaStar className="w-6 h-6 text-green-600" />,
            label: "Achievements",
            path: "/achievements",
          },
          {
            icon: <MdAssignment className="w-6 h-6 text-green-600" />,
            label: "Overview",
            path: "/overview",
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6 + idx * 0.2,
              duration: 0.5,
              type: "spring",
            }}
            className="w-full flex justify-center"
          >
            <Link
              to={card.path}
              className="flex items-center justify-center gap-4 px-4 py-2 bg-[#F5BF2F] rounded-lg text-4xl text-white uppercase w-1/2 hover:scale-90 cursor-pointer"
            >
              <span className="font-semibold">{card.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* <img src="books.png" className="absolute bottom-0 left-0 w-full" /> */}
    </div>
  );
}
