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
    // safety net kalau video error
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Snowfall color="#8fb5c2" />

      {/* HERO */}
      <div className="hero items-center pt-25 sm:pt-45" id="Home">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-2xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">
            Wazzup, I’m Garry
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

      {/* A LITTLE MORE */}
      <section className="experience mt-10 sm:mt-35 py-10 px-4">
        <h1 className="text-2xl sm:text-3xl font-black mb-10 text-center animate__animated animate__fadeInUp animate__delay-4s">
          A little More 🤘
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative p-3 w-56 h-72 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/60 border border-black/10 shadow-md dark:bg-zinc-900/60 dark:border-white/10">
              <img
                src="/assets/geriii.png"
                alt="profile"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="p-10 sm:min-h-[280px] backdrop-blur-xl rounded-2xl bg-white/60 border border-black/10 shadow-md dark:bg-zinc-900/60 dark:border-white/10">
            <p className="text-sm sm:text-base leading-loose mb-2 text-justify opacity-80 dark:opacity-60">
              Hi, my name is{" "}
              <span className="underline font-bold italic">
                Garry Yehosyafat
              </span>
              , but you can call me Garry or Geri. I'm an informatics graduate
              from Universitas Diponegoro.
            </p>

            <p className="text-sm sm:text-base leading-loose mb-5 text-justify opacity-80 dark:opacity-60">
              I guess that’s enough for my introduction, feel free to check out
              my social media links below.
            </p>

            <div className="flex items-center justify-between">
              <div>
                <img
                  src="/assets/logozinc2.png"
                  className="w-16 sm:w-20 block dark:hidden"
                  alt="Logo"
                />
                <img
                  src="/assets/logo1.png"
                  className="w-16 sm:w-20 hidden dark:block"
                  alt="Logo Dark"
                />
              </div>

              <div className="flex items-center gap-4 sm:gap-8">
                <div>
                  <h1 className="text-sm sm:text-4xl font-semibold">
                    <CounterOnScroll target={30} duration={4000} />
                  </h1>
                  <p className="font-bold text-base sm:text-xl">PROJECT</p>
                </div>

                <div>
                  <h1 className="text-sm sm:text-4xl font-semibold">
                    <CounterOnScroll target={4} duration={2000} />
                  </h1>
                  <p className="font-bold text-base sm:text-xl">YOE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <div className="tools mt-10 sm:mt-20" id="Tools">
        <h1 className="text-2xl sm:text-3xl font-black text-center">TOOLS</h1>
        <p className="text-sm sm:text-base text-center font-semibold opacity-70">
          These are my daily work weapons (software)
        </p>

        <section className="space-y-6 py-10">
          <InfiniteRow direction="left" listTools={listTools.slice(0, 6)} />
          <InfiniteRow direction="right" listTools={listTools.slice(3, 9)} />
          <InfiniteRow direction="left" listTools={listTools.slice(6, 13)} />
        </section>
      </div>

      {/* PROJECT */}
      <div className="project mt-10 sm:mt-20 py-10" id="Project">
        <h1 className="text-2xl sm:text-3xl text-center font-bold mb-2">
          PROJECT
        </h1>
        <p className="text-sm sm:text-base text-center font-semibold opacity-70">
          Some of the projects that I have done
        </p>

        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="p-4 backdrop-blur-xl rounded-2xl bg-white/60 border border-black/10 shadow-md dark:bg-zinc-900/60 dark:border-white/10"
            >
              <img
                src={project.gambar}
                alt="project"
                loading="lazy"
                className="rounded-xl"
              />

              <h1 className="text-xl sm:text-2xl font-bold my-4">
                {project.nama}
              </h1>
              <p className="text-sm sm:text-base leading-loose mb-4">
                {project.desk}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <p
                    key={tool}
                    className="text-sm py-1 px-3 border border-zinc-500 bg-zinc-100 dark:bg-zinc-700 rounded-xl font-semibold"
                  >
                    {tool}
                  </p>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 text-center p-4 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-300/50 backdrop-blur-md hover:from-blue-500/30 hover:to-blue-700/30 transition-all font-semibold"
                >
                  See Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* EQUIPMENT */}
      <div className="equipment mt-10 sm:mt-20 py-10" id="Equipment">
        <h1 className="text-2xl sm:text-3xl text-center font-bold mb-2">
          EQUIPMENT
        </h1>
        <p className="text-sm sm:text-base text-center font-semibold opacity-70">
          These are the tools I use to create something magical
        </p>

        <div className="equipment-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {listEquipment.map((equipment) => (
            <div
              key={equipment.id}
              className="p-4 backdrop-blur-xl rounded-xl bg-white/60 border border-black/10 shadow-md dark:bg-zinc-900/60 dark:border-white/10"
            >
              <img
                src={equipment.gambar}
                alt="equipment"
                className="rounded-2xl mx-auto w-auto h-52 p-2 object-contain"
              />

              <h1 className="text-xl sm:text-2xl font-bold my-4">
                {equipment.nama}
              </h1>
              <p className="text-sm sm:text-base leading-loose mb-4">
                {equipment.desk}
              </p>

              <div className="flex flex-wrap gap-2">
                {equipment.tools.map((tool) => (
                  <p
                    key={tool}
                    className="text-sm py-1 px-3 border border-zinc-500 bg-zinc-100 dark:bg-zinc-700 rounded-2xl font-semibold"
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
