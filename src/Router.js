import { Routes, Route, HashRouter } from "react-router-dom";
import { LeaderBoard } from "./components/Leaderboard";
import { Main } from "./components/Main";

const SiteRouter = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </HashRouter>
  );
};

export { SiteRouter };
