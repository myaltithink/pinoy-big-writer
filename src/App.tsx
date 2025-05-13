import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./pages/Loading";
import Overview from "./pages/Overview";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Achievement from "./pages/Achievements";
import Games from "./pages/Games";
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

const App = () => {
  return (
    <SoundProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Loading />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/login" element={<Login />} />

          {/* Private routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/capitalization" element={<Capitalization />} />
            <Route path="/games/punctuation" element={<Punctuation />} />
            <Route path="/games/spelling" element={<Spelling />} />

            <Route
              path="/games/capitalization/level-1"
              element={<CapLevel1 />}
            />
            <Route
              path="/games/capitalization/level-2"
              element={<CapLevel2 />}
            />
            <Route
              path="/games/capitalization/level-3"
              element={<CapLevel3 />}
            />

            <Route path="/games/punctuation/level-1" element={<PuncLevel1 />} />
            <Route path="/games/punctuation/level-2" element={<PuncLevel2 />} />
            <Route path="/games/punctuation/level-3" element={<PuncLevel3 />} />

            <Route path="/games/spelling/level-1" element={<SpellLevel1 />} />
            <Route path="/games/spelling/level-2" element={<SpellLevel2 />} />
            <Route path="/games/spelling/level-3" element={<SpellLevel3 />} />

            <Route path="/vault/capitalization" element={<CapVault />} />
            <Route path="/vault/punctuation" element={<PuncVault />} />
            <Route path="/vault/spelling" element={<SpellVault />} />

            <Route path="/board/*" element={<Board />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SoundProvider>
  );
};

export default App;
