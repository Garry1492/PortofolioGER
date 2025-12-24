import DataImage, { listEquipment } from "./data";
import { listTools, listProyek } from "./data";
import CounterOnScroll from "./CounterOnScroll";
import InfiniteRow from "./components/InfiniteRow";
import Snowfall from "react-snowfall";
import { useState, useEffect } from "react";
import Preloader from "./components/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fallback ONLY (kalau video error)
    const safety = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(safety);
  }, []);

  return (
    <>
      {/* PRELOADER — OVERLAY, BUKAN RETURN */}
      <Preloader loading={loading} onFinish={() => setLoading(false)} />

      {/* ====== SEMUA KONTEN LU (TIDAK DIUBAH) ====== */}
      <Snowfall color="#8fb5c2" />

      {/* HERO */}
      <div className="hero items-center pt-25 sm:pt-45" id="Home">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-2xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">
            Wazzup, I’m parry
            <span className="ml-1 inline-flex items-center justify-center w-10">
              🍺
            </span>
          </h1>

          <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/4 mx-auto mb-8 sm:mb-12 px-4 overflow-hidden">
            <div className="group relative flex items-center justify-center bg-zinc-800 text-white p-3 rounded-3xl drop-shadow-md text-center overflow-hidden hover:bg-zinc-700 transition-all duration-300 dark:bg-zinc-800">
              <q className="transition-all duration-300 group-hover:opacity-0">
                半分デザイナー、半分エンジニア 🤘
              </q>

              <q className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                Half Designer, Half Engineer 🤘
              </q>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <p className="text-sm sm:text-base leading-loose mb-8 sm:mb-12 opacity-50 text-center w-full sm:w-3/4 md:w-3/4 mx-auto px-4 break-words">
            Hi, long time no see!{" "}
            <span className="underline italic font-bold">
              Welcome to my universe.
            </span>{" "}
            I built this space so you can get to know me better, hehe. You’ll
            find my projects, tools, resume, social media, and a bit information
            about who I am.
            <p className="mt-2 font-bold italic">
              Until next time... PIWWW 🚀
            </p>
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-4 sm:gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/garry-yehosyafat/"
              className="flex items-center gap-2 p-5 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-md border border-blue-300/20 hover:from-blue-500/30 hover:to-blue-700/30 transition-all text-sm sm:text-base"
            >
              My Linkedin
              <i className="ri-linkedin-box-fill ri-lg hidden md:block"></i>
            </a>

            <a
              href="https://drive.google.com/file/d/1MCbcw0udwfoEBE4ECud2kr4XUDoLVsOh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-5 rounded-full bg-gradient-to-br from-red-500/20 to-red-700/20 backdrop-blur-md border border-red-300/20 hover:from-red-500/30 hover:to-red-700/30 transition-all text-sm sm:text-base"
            >
              Download CV
              <i className="ri-file-download-line ri-lg hidden md:block"></i>
            </a>
          </div>
        </div>
      </div>

      {/* === BAGIAN BAWAH LU AMAN, TIDAK DIUBAH === */}
      {/* A LITTLE MORE, TOOLS, PROJECT, EQUIPMENT */}
      {/* (semua kode lu lanjut persis kayak sebelumnya) */}
    </>
  );
}

export default App;
