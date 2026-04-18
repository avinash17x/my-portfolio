import { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = ({ items = [], speed = 50 }) => {
  const marqueeRef = useRef();

  useEffect(() => {
    const el = marqueeRef.current;

    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: `-=${totalWidth}`,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
    });
  }, [speed]);

  return (
    <div className="overflow-hidden w-full bg-black text-white py-4">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
      >
        {/* duplicate items for seamless loop */}
        {[...items, ...items].map((text, i) => (
          <span key={i} className="px-10 text-lg uppercase">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;