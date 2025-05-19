import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useSound from "use-sound";

import clickSfx from "/sounds/click.mp3";
import defaultSfx from "/sounds/default.mp3";
import capitalizationSfx from "/sounds/capitalization.mp3";
import punctuationSfx from "/sounds/punctuation.mp3";
import spellingSfx from "/sounds/spelling.mp3";
import vaultSfx from "/sounds/vault.mp3";
import overviewSfx from "/sounds/overview.mp3";

interface SoundContextType {
  toggleMusic: () => void;
  toggleClickSound: () => void;
  musicEnabled: boolean;
  clickEnabled: boolean;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context;
};

interface SoundProviderProps {
  children: React.ReactNode;
}

const SoundProvider = ({ children }: SoundProviderProps) => {
  const location = useLocation();

  const [musicEnabled, setMusicEnabled] = useState(() =>
    JSON.parse(localStorage.getItem("musicEnabled") || "true")
  );
  const [clickEnabled, setClickEnabled] = useState(() =>
    JSON.parse(localStorage.getItem("clickEnabled") || "true")
  );

  const [playClick] = useSound(clickSfx, { volume: 0.5 });

  const [playDefault, { sound: defaultSound }] = useSound(defaultSfx, {
    loop: true,
    volume: 0.5,
    interrupt: true,
  });
  const [playCapitalization, { sound: capSound }] = useSound(
    capitalizationSfx,
    {
      loop: true,
      volume: 0.5,
      interrupt: true,
    }
  );
  const [playPunctuation, { sound: puncSound }] = useSound(punctuationSfx, {
    loop: true,
    volume: 0.5,
    interrupt: true,
  });
  const [playSpelling, { sound: spellSound }] = useSound(spellingSfx, {
    loop: true,
    interrupt: true,
    volume: location.pathname === "/games/spelling/level-3" ? 0.1 : 0.5,
  });
  // Initialize the new sounds
  const [playVault, { sound: vaultSound }] = useSound(vaultSfx, {
    loop: true,
    volume: 0.5,
    interrupt: true,
  });
  const [playOverview, { sound: overviewSound }] = useSound(overviewSfx, {
    loop: true,
    volume: 0.5,
    interrupt: true,
  });

  // Save preferences
  useEffect(() => {
    localStorage.setItem("musicEnabled", JSON.stringify(musicEnabled));
  }, [musicEnabled]);

  useEffect(() => {
    localStorage.setItem("clickEnabled", JSON.stringify(clickEnabled));
  }, [clickEnabled]);

  // Toggle click sound
  const toggleClickSound = () => {
    setClickEnabled((prev: boolean) => !prev);
  };

  // Toggle music
  const toggleMusic = () => {
    setMusicEnabled((prev: boolean) => {
      const newState = !prev;
      if (!newState) {
        defaultSound?.stop();
        capSound?.stop();
        puncSound?.stop();
        spellSound?.stop();
        // Stop the new sounds as well
        vaultSound?.stop();
        overviewSound?.stop();
      }
      return newState;
    });
  };

  // Play click on user interaction
  useEffect(() => {
    const handleClick = () => {
      if (clickEnabled) playClick();
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [clickEnabled, playClick]);

  // Route-based music logic
  useEffect(() => {
    if (!musicEnabled) return;

    // Stop all existing music
    defaultSound?.stop();
    capSound?.stop();
    puncSound?.stop();
    spellSound?.stop();
    // Stop the new sounds when the route changes
    vaultSound?.stop();
    overviewSound?.stop();

    if (location.pathname.startsWith("/games/capitalization")) {
      playCapitalization();
    } else if (location.pathname.startsWith("/games/punctuation")) {
      playPunctuation();
    } else if (location.pathname.startsWith("/games/spelling")) {
      playSpelling();
    } else if (location.pathname.startsWith("/vault")) {
      playVault();
    } else if (location.pathname.startsWith("/overview")) {
      playOverview();
    } else {
      playDefault();
    }

    return () => {
      defaultSound?.stop();
      capSound?.stop();
      puncSound?.stop();
      spellSound?.stop();
      // Ensure new sounds are stopped on unmount or route change
      vaultSound?.stop();
      overviewSound?.stop();
    };
  }, [location.pathname, musicEnabled]);

  return (
    <SoundContext.Provider
      value={{
        toggleMusic,
        toggleClickSound,
        musicEnabled,
        clickEnabled,
      }}
    >
      <div>{children}</div>
    </SoundContext.Provider>
  );
};

export default SoundProvider;
