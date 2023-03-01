import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";

const SiteRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export { SiteRouter };
