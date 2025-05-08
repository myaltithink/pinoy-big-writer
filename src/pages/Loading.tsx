import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthRedirect } from "../hooks/useAuthRedirect";

function Loading() {
  const navigate = useNavigate();
  const [startZoom, setStartZoom] = useState(false);

  useAuthRedirect();

  const handleClick = () => {
    if (!startZoom) {
      setStartZoom(true);
      setTimeout(() => navigate("/overview"), 1000); // Navigate after zoom
    }
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center background cursor-pointer"
      onClick={handleClick}
    >
      <motion.img
        src="house.png"
        alt="Loading house"
        className="w-[800px] h-auto"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={
          startZoom
            ? {
                scale: 2.5,
                x: -20,
                y: -500,
                opacity: 0.5,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }
            : {
                scale: [1, 1.05, 1],
                transition: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2,
                  ease: "easeInOut",
                },
              }
        }
      />
    </div>
  );
}

export default Loading;
