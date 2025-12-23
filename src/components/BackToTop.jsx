import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="scroll"
      className={`fixed sm:bottom-10 sm:right-10 bottom-20 right-6 p-3 rounded-full  
        bg-white/10 backdrop-blur-md 
        border border-white/20 
        shadow-lg hover:bg-white/20
        transition-all Z-9999
        
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <i className="ri-arrow-drop-up-line text-3xl"></i>
    </button>
  );
};

export default BackToTop;
