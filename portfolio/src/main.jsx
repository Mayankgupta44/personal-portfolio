import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

import { ThemeProvider } from "./components/contexts/ThemeContext";
import { ToastProvider } from "./components/contexts/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
  </ThemeProvider>
);
