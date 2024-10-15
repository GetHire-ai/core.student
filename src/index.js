import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { StudentProvider } from "./Context/StudentContext";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./styles/font.css";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StudentProvider>
      <App /> <ToastContainer />
      {/* hi */}
    </StudentProvider>
  </React.StrictMode>
);
reportWebVitals();
