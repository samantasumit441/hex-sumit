"use client";

import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "SKILLS", href: "#skills" },
  { name: "ACHIEVEMENTS", href: "#achievements" },
  { name: "MACHINES", href: "#machines" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e14]/90 backdrop-blur-md border-b border-[#2a3a50]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#9fef00]/10 rounded flex items-center justify-center">
              <Terminal className="w-5 h-5 text-[#9fef00]" />
            </div>
            <span className="text-[#9fef00] text-xl font-bold" style={{ fontFamily: "Orbitron" }}>
              ROOT@HTB
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-[#a4b1cd] hover:text-[#9fef00] transition-colors font-medium"
                style={{ fontFamily: "Orbitron" }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#a4b1cd] hover:text-[#9fef00] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#141d2b] border-t border-[#2a3a50]"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-[#a4b1cd] hover:text-[#9fef00] hover:bg-[#1a2332] rounded transition-colors"
                style={{ fontFamily: "Orbitron" }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
