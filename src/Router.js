import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LeaderBoard } from "./components/Leaderboard";
import { Main } from "./components/Main";

const SiteRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export { SiteRouter };
