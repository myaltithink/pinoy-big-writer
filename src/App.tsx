import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./pages/Loading";
import Overview from "./pages/Overview";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Achievements from "./pages/Achievements";
import Games from "./pages/Games";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
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
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/games" element={<Games />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
