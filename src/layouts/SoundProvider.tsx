import { useEffect } from "react";
import useSound from "use-sound";
import clickSfx from "/sounds/click.mp3";

interface SoundProviderProps {
  children: React.ReactNode;
}

const SoundProvider = ({ children }: SoundProviderProps) => {
  const [play] = useSound(clickSfx, { volume: 0.5 });

  useEffect(() => {
    const handleClick = () => {
      play();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [play]);

  return <div>{children}</div>;
};

export default SoundProvider;
