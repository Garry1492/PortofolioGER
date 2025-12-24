const Footer = () => {
  return (
    <footer className="w-full py-10 pb-12 md:pb-8">
      {/* divider */}
      <div className="mb-8 border-t border-white/20"></div>

      {/* ROW 1 */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">

        {/* LOGO */}
        <div className="logo">
          <img
            src="/assets/logozinc2.png"
            className="h-5 sm:h-8 w-auto block dark:hidden"
            alt="Logo"
          />
          <img
            src="/assets/logo1.png"
            className="h-5 sm:h-8 w-auto hidden dark:block"
            alt="Logo"
          />
        </div>

        {/* ICONS */}
        <div className="flex gap-3 items-center">
          <a href="https://www.instagram.com/garry_yehosyafat/">
            <i className="ri-instagram-fill ri-xl sm:ri-2x hover:text-violet-500 transition-colors "></i>
          </a>
          <a href="https://www.tiktok.com/@ger.yehosyafat">
            <i className="ri-tiktok-fill ri-xl sm:ri-2x hover:text-violet-500 transition-colors"></i>
          </a>
          <a href="https://www.linkedin.com/in/garry-yehosyafat/">
            <i className="ri-linkedin-fill ri-xl sm:ri-2x hover:text-violet-500 transition-colors"></i>
          </a>
          <a href="https://www.youtube.com/@Ger_yehosyafat">
            <i className="ri-youtube-fill ri-xl sm:ri-2x hover:text-violet-500 transition-colors"></i>
          </a>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="text-sm sm:text-base text-center mt-6 font-semibold">
        🤘 Made On Earth by Human (GER!) 🌏
      </div>

      <div className="text-sm sm:text-base text-center mt-2 font-light opacity-50">
        Copyright ©2025
      </div>
    </footer>
  );
};

export default Footer;
