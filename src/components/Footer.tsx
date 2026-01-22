"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-[#2a3a50] bg-[#0a0e14]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#9fef00]/10 rounded flex items-center justify-center">
              <Terminal className="w-4 h-4 text-[#9fef00]" />
            </div>
            <span className="text-[#9fef00] font-bold" style={{ fontFamily: "Orbitron" }}>
              ROOT@HTB
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#6b7f9e] font-mono">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-[#9fef00] rounded-full" />
              STATUS: ONLINE
            </motion.span>
          </div>

          <div className="text-sm text-[#6b7f9e] font-mono">
            &copy; {new Date().getFullYear()} | HACK THE PLANET
          </div>
        </div>
      </div>
    </footer>
  );
}
