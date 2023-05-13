import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tippy.js/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import MailDataContextProvider from "./Contexts/MailDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MailDataContextProvider>
        <App />
      </MailDataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
