import { useEffect, useRef } from "react";
import useSound from "use-sound";
import clickSfx from "/sounds/click.mp3";
import bgSfx from "/sounds/background.mp3";

interface SoundProviderProps {
  children: React.ReactNode;
}

const SoundProvider = ({ children }: SoundProviderProps) => {
  const [playClick] = useSound(clickSfx, { volume: 0.5 });

  const [playOnce, { sound: soundOnce }] = useSound(bgSfx, {
    loop: false,
    volume: 0.5,
    interrupt: true,
  });

  const [playLoop] = useSound(bgSfx, {
    loop: true,
    volume: 0.5,
    interrupt: true,
  });

  const hasStarted = useRef(false);

  useEffect(() => {
    const handleClick = () => {
      playClick();

      if (!hasStarted.current) {
        hasStarted.current = true;

        playOnce();

        if (soundOnce) {
          soundOnce.on("end", () => {
            playLoop();
          });
        } else {
          // fallback just in case
          setTimeout(() => playLoop(), 5000); // e.g. 5s fallback
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      soundOnce?.stop();
    };
  }, [playClick, playOnce, playLoop, soundOnce]);

  return <div>{children}</div>;
};

export default SoundProvider;
