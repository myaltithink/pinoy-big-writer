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

import { CONTENT_QUIZ, GRAMMAR_QUIZ, MECHANIC_QUIZ, ORGANIZATION_QUIZ, VOCAB_QUIZ } from "./constants/seeder";
import Content from "./pages/tasks/Content";
import QuizHandler from "./pages/QuizHandler";
import Grammar from "./pages/tasks/Grammar";
import Organization from "./pages/tasks/Organization";
import Mechanics from "./pages/tasks/Mechanics";
import Vocabulary from "./pages/tasks/Vocabulary";

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

              <Route path="/tasks/content" element={<Content/>}/>
              <Route path="/tasks/grammar" element={<Grammar/>}/>
              <Route path="/tasks/organization" element={<Organization/>}/>
              <Route path="/tasks/mechanics" element={<Mechanics/>}/>
              <Route path="/tasks/vocabulary" element={<Vocabulary/>}/>

              <Route
                path="/games/capitalization"
                element={<Capitalization />}
              />
              <Route path="/games/punctuation" element={<Punctuation />} />
              <Route path="/games/spelling" element={<Spelling />} />

              {/* Content Levels */}
              <>
                <Route
                  path="/tasks/content/level-1"
                  element={
                    <LevelGuard
                      topic='content'
                      level={1}
                      userProgress={user?.progress}
                    >
                      <QuizHandler
                        category="content"
                        backgroundClass="content-bg"
                        levelIndex={0}
                        questionSet={CONTENT_QUIZ.beginner}/>
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/content/level-2"
                  element={
                    <LevelGuard
                      topic='content'
                      level={2}
                      userProgress={user?.progress}
                    >
                      <QuizHandler
                        category="content"
                        backgroundClass="content-bg"
                        levelIndex={1}
                        questionSet={CONTENT_QUIZ.intermidiate}/>
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/content/level-3"
                  element={
                    <LevelGuard
                      topic='content'
                      level={3}
                      userProgress={user?.progress}
                    >
                      <QuizHandler
                        category="content"
                        backgroundClass="content-bg"
                        levelIndex={2}
                        questionSet={CONTENT_QUIZ.advance}/>
                    </LevelGuard>
                  }
                />
              </>

              {/* Grammar Levels */}
              <>
                <Route
                  path="/tasks/grammar/level-1"
                  element={
                    <LevelGuard
                      topic="grammar"
                      level={1}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="grammar"
                          backgroundClass="grammar-bg"
                          levelIndex={0}
                          questionSet={GRAMMAR_QUIZ.beginner}
                        />
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/grammar/level-2"
                  element={
                    <LevelGuard
                      topic="grammar"
                      level={2}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="grammar"
                          backgroundClass="grammar-bg"
                          levelIndex={1}
                          questionSet={GRAMMAR_QUIZ.intermidiate}
                        />
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/grammar/level-3"
                  element={
                    <LevelGuard
                      topic="grammar"
                      level={3}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="grammar"
                          backgroundClass="grammar-bg"
                          levelIndex={2}
                          questionSet={GRAMMAR_QUIZ.advance}
                        />
                    </LevelGuard>
                  }
                />
              </>

              {/* Organization Levels */}
              <>
                <Route
                  path="/tasks/organization/level-1"
                  element={
                    <LevelGuard
                      topic="organization"
                      level={1}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="organization"
                          backgroundClass="organization-bg"
                          levelIndex={0}
                          questionSet={ORGANIZATION_QUIZ.beginner}/>
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/organization/level-2"
                  element={
                    <LevelGuard
                      topic="organization"
                      level={2}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="organization"
                          backgroundClass="organization-bg"
                          levelIndex={1}
                          questionSet={ORGANIZATION_QUIZ.intermidiate}/>
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/organization/level-3"
                  element={
                    <LevelGuard
                      topic="organization"
                      level={3}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="organization"
                          backgroundClass="organization-bg"
                          levelIndex={2}
                          questionSet={ORGANIZATION_QUIZ.advance}/>
                    </LevelGuard>
                  }
                />
              </>

              {/* Mechanics Levels */}
              <>
                <Route
                  path="/tasks/mechanics/level-1"
                  element={
                    <LevelGuard
                      topic="mechanics"
                      level={1}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="mechanics"
                          backgroundClass="mechanics-bg"
                          levelIndex={0}
                          questionSet={MECHANIC_QUIZ.beginner}/>
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/mechanics/level-2"
                  element={
                    <LevelGuard
                      topic="mechanics"
                      level={2}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="mechanics"
                          backgroundClass="mechanics-bg"
                          levelIndex={1}
                          questionSet={MECHANIC_QUIZ.intermidiate}/>
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/mechanics/level-3"
                  element={
                    <LevelGuard
                      topic="mechanics"
                      level={3}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="mechanics"
                          backgroundClass="mechanics-bg"
                          levelIndex={2}
                          questionSet={MECHANIC_QUIZ.advance}/>
                    </LevelGuard>
                  }
                />
              </>

              {/* Vocabulary Levels */}
              <>
                <Route
                  path="/tasks/vocabulary/level-1"
                  element={
                    <LevelGuard
                      topic="vocabulary"
                      level={1}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="vocabulary"
                          backgroundClass="vocabulary-bg"
                          levelIndex={0}
                          questionSet={VOCAB_QUIZ.beginner}/>
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/vocabulary/level-2"
                  element={
                    <LevelGuard
                      topic="vocabulary"
                      level={2}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="vocabulary"
                          backgroundClass="vocabulary-bg"
                          levelIndex={1}
                          questionSet={VOCAB_QUIZ.beginner}/>
                    </LevelGuard>
                  }
                />
                <Route
                  path="/tasks/vocabulary/level-3"
                  element={
                    <LevelGuard
                      topic="vocabulary"
                      level={3}
                      userProgress={user?.progress}>
                        <QuizHandler
                          category="vocabulary"
                          backgroundClass="vocabulary-bg"
                          levelIndex={2}
                          questionSet={VOCAB_QUIZ.beginner}/>
                    </LevelGuard>
                  }
                />
              </>

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
