import { useEffect, useState } from "react";

const Preloader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // SAFETY NET — kalau video gagal / autoplay error
    const fallback = setTimeout(() => {
      handleFinish();
    }, 6000);

    return () => clearTimeout(fallback);
  }, []);

  const handleFinish = () => {
    setVisible(false);

    // kasih waktu buat fade out
    setTimeout(() => {
      onFinish && onFinish();
    }, 800);
  };

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        bg-black
        flex items-center justify-center
        transition-opacity duration-700 ease-in-out
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <video
        src="/assets/BUMPER.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleFinish}
        className="w-screen h-screen object-cover"
      />
    </div>
  );
};

export default Preloader;
