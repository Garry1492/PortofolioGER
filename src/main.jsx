import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";
import BackToTop from "./components/BackToTop.jsx";

import "remixicon/fonts/remixicon.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    

       <main
  className="
    min-h-screen
    bg-linear-to-br
    from-zinc-100 to-zinc-200
    text-
    dark:bg-linear-to-br
    dark:from-zinc-950
    dark:to-neutral-800
    text-zinc-700 dark:text-zinc-300
    transition-colors duration-700 ease-in-out
  "
>

          <PreLoader />

          <div className="container mx-auto px-3 min-h-full">
            <BackToTop />
            <Navbar />
            <App />
            <Footer />
          </div>
        </main>
      
    
  </StrictMode>
);
