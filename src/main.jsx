import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: "https://localhost:5173",
  signOutRedirectURL: "https://localhost:5173",
  clientID: "jxBEEcv3pR_AyMC2d216cH0P6vka",
  baseUrl: "https://api.asgardeo.io/t/wimukthi",
  scope: ["openid", "profile"],
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider config={config}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
