import { useState } from "react"

const InfiniteRow = ({ direction = "left", listTools }) => {
    const [paused, setPaused] = useState(false)
  return (
    <div className="overflow-hidden w-full">
        <div className="relative overflow-hidden w-full marquee-fade">
      <div onClick={() => setPaused(!paused)}
        className={`flex w-max gap-4 
        animate-marquee-${direction}
        ${paused ? "paused":""}
        hover:[animation-play-state:paused] cursor-pointer`}
      >
        {[...listTools, ...listTools].map((tool, index) => (
          <div
            key={`${tool.id}-clone-${index}`}
            className="min-w-[200px] sm:min-w-[300px] lg:min-w-[340px] flex items-center sm:gap-3 sm:p-4 gap-2 p-2
             backdrop-blur-xl
    transition-all duration-500 ease-in-out rounded-3xl

    /* LIGHT MODE */
   bg-white
    border border-black/10
    

    /* DARK MODE */
    dark:bg-zinc-900/60
    dark:border-white/10
    dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          >
            <img src={tool.gambar} alt="Tools Image" className="w-10 p-1 sm:w-14"
            />
            <div>
              <h4 className="font-bold sm:text-base text-sm">{tool.nama}</h4>
              <p className="opacity-50 sm:text-base text-xs">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default InfiniteRow