import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "./pages/Loading";
import Overview from "./pages/Overview";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import TaskRoomEntrance from "./pages/TaskRoomEntrance";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";
import Capitalization from "./pages/Capitalization";
import Punctuation from "./pages/Punctuation";
import Spelling from "./pages/Spelling";

import CapLevel1 from "./pages/capitalization/CapLevel1";
import CapLevel2 from "./pages/capitalization/CapLevel2";
import CapLevel3 from "./pages/capitalization/CapLevel3";

import PuncLevel1 from "./pages/punctuation/PuncLevel1";
import PuncLevel2 from "./pages/punctuation/PuncLevel2";
import PuncLevel3 from "./pages/punctuation/PuncLevel3";

import SpellLevel1 from "./pages/spelling/SpellLevel1";
import SpellLevel2 from "./pages/spelling/SpellLevel2";
import SpellLevel3 from "./pages/spelling/SpellLevel3";

import SoundProvider from "./layouts/SoundProvider";
import CapVault from "./pages/capitalization/CapVault";
import PuncVault from "./pages/punctuation/PuncVault";
import SpellVault from "./pages/spelling/SpellVault";
import Board from "./pages/Board";
import RotateScreen from "./pages/RotateScreen";
import { ScreenSizeProvider } from "./layouts/ScreenSizeProvider";
import Terms from "./pages/Terms";

import { useUserStore } from "./stores/useUserStore";
import LevelGuard from "./layouts/LevelGuard";
import Rules from "./pages/Rules";
import TaskRoom from "./pages/TaskRoom";

import { ORGANIZATION_QUIZ } from "./constants/new_seeder";

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const { user } = useUserStore();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen && !window.location.pathname.endsWith("3")) {
    return <RotateScreen />;
  }

  // TODO: remove log
  console.log(ORGANIZATION_QUIZ)

  return (
    <Router>
      <ScreenSizeProvider>
        <SoundProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Loading />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms-and-conditions" element={<Terms />} />

            {/* Private routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/rules" element={<Rules/>}/>
              <Route path="/vault" element={<Vault />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/task-room-entrance" element={<TaskRoomEntrance />} />
              <Route path="/task-room" element={<TaskRoom/>} />
              <Route
                path="/games/capitalization"
                element={<Capitalization />}
              />
              <Route path="/games/punctuation" element={<Punctuation />} />
              <Route path="/games/spelling" element={<Spelling />} />

              {/* Capitalization Levels */}
              <Route
                path="/games/capitalization/level-1"
                element={
                  <LevelGuard
                    topic="capitalization"
                    level={1}
                    userProgress={user?.progress}
                  >
                    <CapLevel1 />
                  </LevelGuard>
                }
              />
              <Route
                path="/games/capitalization/level-2"
                element={
                  <LevelGuard
                    topic="capitalization"
                    level={2}
                    userProgress={user?.progress}
                  >
                    <CapLevel2 />
                  </LevelGuard>
                }
              />
              <Route
                path="/games/capitalization/level-3"
                element={
                  <LevelGuard
                    topic="capitalization"
                    level={3}
                    userProgress={user?.progress}
                  >
                    <CapLevel3 />
                  </LevelGuard>
                }
              />

              {/* Punctuation Levels */}
              <Route
                path="/games/punctuation/level-1"
                element={
                  <LevelGuard
                    topic="punctuation"
                    level={1}
                    userProgress={user?.progress}
                  >
                    <PuncLevel1 />
                  </LevelGuard>
                }
              />
              <Route
                path="/games/punctuation/level-2"
                element={
                  <LevelGuard
                    topic="punctuation"
                    level={2}
                    userProgress={user?.progress}
                  >
                    <PuncLevel2 />
                  </LevelGuard>
                }
              />
              <Route
                path="/games/punctuation/level-3"
                element={
                  <LevelGuard
                    topic="punctuation"
                    level={3}
                    userProgress={user?.progress}
                  >
                    <PuncLevel3 />
                  </LevelGuard>
                }
              />

              {/* Spelling Levels */}
              <Route
                path="/games/spelling/level-1"
                element={
                  <LevelGuard
                    topic="spelling"
                    level={1}
                    userProgress={user?.progress}
                  >
                    <SpellLevel1 />
                  </LevelGuard>
                }
              />
              <Route
                path="/games/spelling/level-2"
                element={
                  <LevelGuard
                    topic="spelling"
                    level={2}
                    userProgress={user?.progress}
                  >
                    <SpellLevel2 />
                  </LevelGuard>
                }
              />
              <Route
                path="/games/spelling/level-3"
                element={
                  <LevelGuard
                    topic="spelling"
                    level={3}
                    userProgress={user?.progress}
                  >
                    <SpellLevel3 />
                  </LevelGuard>
                }
              />

              {/* Vaults */}
              <Route path="/vault/capitalization" element={<CapVault />} />
              <Route path="/vault/punctuation" element={<PuncVault />} />
              <Route path="/vault/spelling" element={<SpellVault />} />

              <Route path="/board/*" element={<Board />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SoundProvider>
      </ScreenSizeProvider>
    </Router>
  );
};

export default App;
