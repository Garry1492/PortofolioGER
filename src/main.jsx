import { useState, useEffect } from "react";
import Preloader from "./components/PreLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { createRoot } from "react-dom/client";

function App() {
  const [loading, setLoading] = useState(true);

  // SAFETY NET (WAJIB)
  useEffect(() => {
    const fallback = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(fallback);
  }, []);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
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
        {/* content lu */}
        <Footer />
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
