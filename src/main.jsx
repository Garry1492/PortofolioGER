import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
import BackToTop from "./components/BackToTop";

// jangan ada useState, useEffect, Preloader, Navbar, dll di sini

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
