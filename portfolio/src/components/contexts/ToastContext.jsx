// src/contexts/ToastContext.js
import React, { createContext, useState } from "react";
export const ToastContext = createContext();
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const toast = ({ title, description }) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, description }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };
  return (
    <ToastContext.Provider value={{ toast, toasts }}>
      {children}
      {/* <ToastsContainer toasts={toasts} /> */}
    </ToastContext.Provider>
  );
}
