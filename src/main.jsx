import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

if (import.meta.env.PROD) {
  // Register SW after load + idle to keep it off the critical path.
  const registerPWA = () => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  };
  const scheduleRegistration = () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(registerPWA, { timeout: 10000 });
      return;
    }
    window.setTimeout(registerPWA, 3000);
  };
  if (document.readyState === "complete") scheduleRegistration();
  else window.addEventListener("load", scheduleRegistration, { once: true });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
