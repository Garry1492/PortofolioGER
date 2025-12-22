import { useEffect, useRef, useState } from "react";

export default function CounterRepeat({ target = 30, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
        
          let current = 0;
          const step = target / (duration / 50);

          const timer = setInterval(() => {
            current += step;

            if (current >= target) {
              current = target;
              clearInterval(timer);
            }

            setCount(Math.floor(current));
          }, 50);
        } else {
          
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="text-2xl sm:text-3xl font-bold">
      {count}+
    </span>
  );
}
