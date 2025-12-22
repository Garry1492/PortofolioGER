import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // scroll navbar
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  // apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    
    <div className="NavBar py-7 flex items-center justify-between">
        {/* LOGO */}
      <div className="logo">
        {/* LOGO HITAM (LIGHT MODE) */}
        <img
          src="/assets/logozinc2.png"
          className="h-8 w-auto block dark:hidden"
          alt="Logo"
        />

        {/* LOGO PUTIH (DARK MODE) */}
        <img
          src="/assets/logo1.png"
          className="h-8 w-auto hidden dark:block"
          alt="Logo"
        />
        </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2
        md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-3 rounded-full border-zinc-900

        md:bg-transparent mt-4 transition-all md:transition-none z-40
        ${active ? "top-0 opacity-100" : "top-10 opacity-0"}`}
      >
        {["Home", "Tools", "Project", "Equipments", "Experience"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-xs md:text-lg font-medium hover:font-bold hover:text-violet-500 transition-all"
              >
                {item}
              </a>
            </li>
          )
        )}
        
      </ul>

      {/* DARK MODE BUTTON */}
      <button
  aria-label="Toggle dark mode"
  onClick={() => setIsDark(!isDark)}
  className="
    flex items-center justify-center
    w-10 h-10
    text-lg
    rounded-full
    transition-all duration-300
    bg-zinc-200 border-zinc-300
    dark:bg-white/10 backdrop-blur-md
    border dark:border-white/20
    hover:bg-zinc-300 dark:hover:bg-zinc-800
  "
>
  {isDark ? "🌙" : "☀️"}
</button>

    </div>
   
  );
};

export default Navbar;
