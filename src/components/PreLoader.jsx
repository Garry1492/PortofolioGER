const Preloader = ({ onFinish }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        src="/assets/BUMPER.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onFinish}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Preloader;
