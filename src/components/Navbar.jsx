import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // === HANDLE SCROLL NAVBAR ===
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === LOAD THEME (localStorage / system) ===
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDark(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  // === APPLY THEME ===
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const menu = [
    {
      label: (
        <>
          <i className="ri-home-8-line ri-xl block md:hidden"></i>
          <span className="hidden md:block">Home</span>
        </>
      ),
      target: "Home",
    },
    { label: "Tools", target: "Tools" },
    { label: "Project", target: "Project" },
    { label: "Equipment", target: "Equipment" },
    {
      label: (
        <>
          <i className="ri-briefcase-line ri-xl block md:hidden"></i>
          <span className="hidden md:block">Experience</span>
        </>
      ),
      target: "Experience",
    },
  ];

  return (
    <div className="NavBar relative z-50 py-7 flex items-center justify-between px-6">
      {/* LOGO */}
      <div className="logo">
        <img
          src="/assets/logozinc2.png"
          className="h-8 w-auto block dark:hidden"
          alt="Logo Light"
        />
        <img
          src="/assets/logo1.png"
          className="h-8 w-auto hidden dark:block"
          alt="Logo Dark"
        />
      </div>

      {/* MENU */}
      <ul
        className={`menu flex items-center gap-4 sm:gap-10
        md:static fixed left-1/2 -translate-x-1/2
        md:translate-x-0
        bg-zinc-300/30 dark:bg-zinc-900/40
        backdrop-blur-md
        p-3 rounded-full
        border border-zinc-500/20 dark:border-zinc-500/10
        md:bg-transparent
        transition-all
        z-40
        ${active ? "top-0 opacity-100" : "top-10 opacity-0"}
        md:opacity-100 md:top-0`}
      >
        {menu.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.target}`}
              className="text-xs md:text-lg font-medium hover:font-bold hover:text-violet-500 transition-all"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* DARK MODE BUTTON */}
      <button
        aria-label="Toggle dark mode"
        onClick={() => setIsDark(!isDark)}
        className="
          relative z-50
          flex items-center justify-center
          w-10 h-10
          text-lg
          rounded-full
          transition-all duration-300
          bg-zinc-200 border border-zinc-300
          dark:bg-white/10 dark:border-white/20
          backdrop-blur-md
          hover:bg-zinc-300 dark:hover:bg-zinc-800
        "
      >
        {isDark ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Navbar;
