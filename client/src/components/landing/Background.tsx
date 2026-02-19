import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cloverRealistic from "@/assets/clover-realistic.png";

export function Background() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const clovers = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 400, 
    scale: 0.4 + Math.random() * 1.4,
    duration: 20 + Math.random() * 30,
    delay: Math.random() * 10,
    parallaxSpeed: 80 + Math.random() * 200,
  }));

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.12),transparent_60%)]" />
      
      {clovers.map((clover) => (
        <FloatingClover key={clover.id} clover={clover} scrollYProgress={scrollYProgress} />
      ))}
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
    </div>
  );
}

function FloatingClover({ clover, scrollYProgress }: { clover: any, scrollYProgress: any }) {
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -clover.parallaxSpeed]);
  
  return (
    <motion.div
      className="absolute opacity-[0.06] blur-[1px]"
      style={{ 
        left: `${clover.x}vw`, 
        top: `${clover.y}vh`,
        y: yOffset,
        scale: clover.scale
      }}
      animate={{ 
        rotate: [0, 360],
      }}
      transition={{ 
        duration: clover.duration, 
        repeat: Infinity, 
        ease: "linear",
        delay: clover.delay
      }}
    >
      <img 
        src={cloverRealistic} 
        alt="" 
        className="w-56 h-56 object-contain brightness-150 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]" 
      />
    </motion.div>
  );
}
