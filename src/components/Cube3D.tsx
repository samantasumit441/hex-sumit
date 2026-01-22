"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Cube3D() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [30, -30]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-30, 30]), {
    stiffness: 100,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-64 h-64 md:w-80 md:h-80 perspective-container cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative"
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-[#141d2b]/80 border-2 border-[#9fef00]/50 flex items-center justify-center"
          style={{ transform: "translateZ(128px)" }}
        >
          <div className="text-[#9fef00] text-6xl font-bold" style={{ fontFamily: "Orbitron" }}>
            HTB
          </div>
        </div>
        {/* Back */}
        <div
          className="absolute w-full h-full bg-[#141d2b]/80 border-2 border-[#9fef00]/50 flex items-center justify-center"
          style={{ transform: "rotateY(180deg) translateZ(128px)" }}
        >
          <svg viewBox="0 0 100 100" className="w-24 h-24">
            <path
              d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
              fill="none"
              stroke="#9fef00"
              strokeWidth="2"
            />
            <path
              d="M50 10 L50 90 M10 30 L90 30 M10 70 L90 70"
              fill="none"
              stroke="#9fef00"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </div>
        {/* Left */}
        <div
          className="absolute w-full h-full bg-[#141d2b]/80 border-2 border-[#00d4ff]/50 flex items-center justify-center"
          style={{ transform: "rotateY(-90deg) translateZ(128px)" }}
        >
          <div className="text-[#00d4ff] text-2xl" style={{ fontFamily: "Orbitron" }}>
            PENTEST
          </div>
        </div>
        {/* Right */}
        <div
          className="absolute w-full h-full bg-[#141d2b]/80 border-2 border-[#00d4ff]/50 flex items-center justify-center"
          style={{ transform: "rotateY(90deg) translateZ(128px)" }}
        >
          <div className="text-[#00d4ff] text-2xl" style={{ fontFamily: "Orbitron" }}>
            EXPLOIT
          </div>
        </div>
        {/* Top */}
        <div
          className="absolute w-full h-full bg-[#141d2b]/80 border-2 border-[#9fef00]/30 flex items-center justify-center"
          style={{ transform: "rotateX(90deg) translateZ(128px)" }}
        >
          <div className="w-16 h-16 border-2 border-[#9fef00] rounded-full animate-pulse" />
        </div>
        {/* Bottom */}
        <div
          className="absolute w-full h-full bg-[#141d2b]/80 border-2 border-[#9fef00]/30 flex items-center justify-center"
          style={{ transform: "rotateX(-90deg) translateZ(128px)" }}
        >
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-[#9fef00]/20 border border-[#9fef00]/50"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
