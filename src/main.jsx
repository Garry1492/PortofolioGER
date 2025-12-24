import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import Preloader from "./components/PreLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // safety fallback kalau video error
    const fallback = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      {/* PRELOADER OVERLAY */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* MAIN LAYOUT */}
      <main
        className="
          min-h-screen
          bg-gradient-to-br
          from-zinc-100 to-zinc-200
          dark:from-zinc-950 dark:to-neutral-800
          text-zinc-700 dark:text-zinc-300
          transition-colors duration-700 ease-in-out
        "
      >
        <div className="container mx-auto px-3 min-h-full">
          <BackToTop />
          <Navbar />
          {/* CONTENT APP */}
          <div id="app-content" className={`${loading ? "pointer-events-none" : ""}`}>
            {/* content App.jsx mu bakal masuk sini */}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
