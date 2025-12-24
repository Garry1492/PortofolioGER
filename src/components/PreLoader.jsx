import { useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div
  className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center
  transition-opacity duration-[1200ms] ease-in-out
  ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
>
  <video
    src="/assets/BUMPER.mp4"
    autoPlay
    muted
    playsInline
    preload="auto"
    onEnded={() => setLoading(false)}
    className="w-full h-full object-cover"
  />
</div>

  );
};

export default Preloader;
