import { motion } from "framer-motion";
import cloverOutline from "@/assets/clover-outline.png";

export function Background() {
  // Generate random positions for floating clovers
  const clovers = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 1.5,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.03),transparent_70%)]" />
      
      {clovers.map((clover) => (
        <motion.div
          key={clover.id}
          className="absolute opacity-[0.03] blur-sm"
          initial={{ 
            x: `${clover.x}vw`, 
            y: `${clover.y}vh`, 
            rotate: 0,
            scale: clover.scale 
          }}
          animate={{ 
            y: [`${clover.y}vh`, `${(clover.y + 20) % 100}vh`, `${clover.y}vh`],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: clover.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: clover.delay
          }}
        >
          <img 
            src={cloverOutline} 
            alt="Decorative Clover" 
            className="w-64 h-64 object-contain brightness-200 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" 
          />
        </motion.div>
      ))}
      
      {/* Grid overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
}
