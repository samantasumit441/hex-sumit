"use client";

import { motion } from "framer-motion";
import { Cube3D } from "@/components/Cube3D";
import { GlitchText } from "@/components/GlitchText";
import { Terminal } from "@/components/Terminal";
import { ChevronDown } from "lucide-react";

const terminalLines = [
  "whoami",
  "Penetration Tester | Security Researcher | CTF Player",
  "cat /etc/skills",
  "Web Exploitation • Network Pentesting • Reverse Engineering",
  "nmap -sV hackthebox.com",
  "Scanning targets... 150+ machines pwned",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative pt-16 px-4"
    >
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-[#00d4ff] text-sm font-mono px-3 py-1 bg-[#00d4ff]/10 rounded border border-[#00d4ff]/30">
                HACK THE BOX CERTIFIED
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-[#a4b1cd] mb-2"
            >
              Hello, I am <span className="text-[#9fef00] glow-text font-semibold">Sumit Samanta</span>
            </motion.p>
            
            <h1
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: "Orbitron" }}
            >
              <GlitchText text="PENTESTER" className="text-[#9fef00]" />
          </h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-[#a4b1cd] mb-6"
            style={{ fontFamily: "Orbitron" }}
          >
            OFFENSIVE SECURITY
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[#6b7f9e] text-lg mb-8 max-w-xl"
          >
            Ethical hacker trained on Hack The Box platform. Specializing in 
            penetration testing, vulnerability assessment, and security research.
            Breaking systems to make them stronger.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-[#9fef00] text-[#0a0e14] font-bold rounded-lg hover:bg-[#8bd900] transition-all glow-box"
              style={{ fontFamily: "Orbitron" }}
            >
              HIRE ME
            </a>
            <a
              href="#achievements"
              className="px-8 py-4 bg-transparent border-2 border-[#9fef00] text-[#9fef00] font-bold rounded-lg hover:bg-[#9fef00]/10 transition-all"
              style={{ fontFamily: "Orbitron" }}
            >
              VIEW STATS
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          <Cube3D />
          <Terminal lines={terminalLines} />
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#9fef00] animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
