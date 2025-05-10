import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localstorage";
import type { User } from "../types";

function Loading() {
  const navigate = useNavigate();
  const [startZoom, setStartZoom] = useState(false);
  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (!user) {
      const localUser = getLocalStorageItem<User>("user");

      if (localUser) {
        setLocalStorageItem("user", localUser);
        setUser(localUser);
      }
    }

    const timeout = setTimeout(() => {
      setStartZoom(true);
      setTimeout(() => {
        navigate(user ? "/home" : "/overview");
      }, 1000); // Wait for zoom animation
    }, 3000); // Initial delay before zoom

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center background">
      <motion.img
        src="house.png"
        alt="Loading house"
        className="w-[800px] h-auto"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={
          startZoom
            ? {
                scale: 2.5,
                x: 0,
                y: 0,
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
