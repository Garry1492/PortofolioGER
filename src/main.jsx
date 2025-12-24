import { useState } from "react";
import Preloader from "./components/PreLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";



  return (
    <main
      className="
        min-h-screen
        bg-linear-to-br
        from-zinc-100 to-zinc-200
        dark:from-zinc-950
        dark:to-neutral-800
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


export default App;
