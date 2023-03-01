import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { SiteRouter } from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SiteRouter />
  </React.StrictMode>
);
