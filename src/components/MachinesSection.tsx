"use client";

import { motion } from "framer-motion";
import { Server, Shield, CheckCircle2, Clock } from "lucide-react";

const machines = [
  { name: "FOREST", os: "Windows", difficulty: "Easy", status: "owned", points: 20 },
  { name: "LAME", os: "Linux", difficulty: "Easy", status: "owned", points: 20 },
  { name: "ACTIVE", os: "Windows", difficulty: "Medium", status: "owned", points: 30 },
  { name: "MONTEVERDE", os: "Windows", difficulty: "Medium", status: "owned", points: 30 },
  { name: "BLACKFIELD", os: "Windows", difficulty: "Hard", status: "owned", points: 40 },
  { name: "SAUNA", os: "Windows", difficulty: "Easy", status: "owned", points: 20 },
  { name: "CASCADE", os: "Windows", difficulty: "Medium", status: "in_progress", points: 30 },
  { name: "RESOLUTE", os: "Windows", difficulty: "Medium", status: "owned", points: 30 },
];

const difficultyColors: Record<string, string> = {
  Easy: "#9fef00",
  Medium: "#ffaf00",
  Hard: "#ff3e3e",
  Insane: "#ff00ff",
};

export function MachinesSection() {
  return (
    <section id="machines" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#9fef00] mb-4" style={{ fontFamily: "Orbitron" }}>
            PWNED MACHINES
          </h2>
          <div className="neon-line w-48 mx-auto mb-4" />
          <p className="text-[#a4b1cd] text-lg">Recent Hack The Box Conquests</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {machines.map((machine, index) => (
            <motion.div
              key={machine.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#141d2b] border border-[#2a3a50] rounded-lg p-5 hover:border-[#9fef00]/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {machine.os === "Windows" ? (
                    <Server className="w-5 h-5 text-[#00d4ff]" />
                  ) : (
                    <Shield className="w-5 h-5 text-[#ffaf00]" />
                  )}
                  <span className="text-xs text-[#6b7f9e] font-mono">{machine.os}</span>
                </div>
                {machine.status === "owned" ? (
                  <CheckCircle2 className="w-5 h-5 text-[#9fef00]" />
                ) : (
                  <Clock className="w-5 h-5 text-[#ffaf00]" />
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "Orbitron" }}>
                {machine.name}
              </h3>

              <div className="flex items-center justify-between">
                <span
                  className="text-xs px-2 py-1 rounded font-mono"
                  style={{
                    backgroundColor: `${difficultyColors[machine.difficulty]}20`,
                    color: difficultyColors[machine.difficulty],
                  }}
                >
                  {machine.difficulty}
                </span>
                <span className="text-[#9fef00] font-mono text-sm">+{machine.points} pts</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://hackthebox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#141d2b] border border-[#9fef00] text-[#9fef00] rounded-lg hover:bg-[#9fef00] hover:text-[#0a0e14] transition-all font-bold"
            style={{ fontFamily: "Orbitron" }}
          >
            VIEW FULL PROFILE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
