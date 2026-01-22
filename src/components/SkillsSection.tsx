"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Bug, Lock, Wifi, Database, Server, Code } from "lucide-react";

const skills = [
  { name: "Network Penetration Testing", level: 90, icon: Wifi },
  { name: "Web Application Security", level: 85, icon: Code },
  { name: "Reverse Engineering", level: 75, icon: Bug },
  { name: "Cryptography", level: 70, icon: Lock },
  { name: "Linux Administration", level: 95, icon: Terminal },
  { name: "Active Directory Attacks", level: 80, icon: Server },
  { name: "Database Exploitation", level: 75, icon: Database },
  { name: "Malware Analysis", level: 65, icon: Shield },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#9fef00] mb-4" style={{ fontFamily: "Orbitron" }}>
            SKILL MATRIX
          </h2>
          <div className="neon-line w-48 mx-auto mb-4" />
          <p className="text-[#a4b1cd] text-lg">Offensive Security Capabilities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#141d2b] border border-[#2a3a50] rounded-lg p-5 hover:border-[#9fef00]/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#9fef00]/10 flex items-center justify-center group-hover:bg-[#9fef00]/20 transition-colors">
                  <skill.icon className="w-5 h-5 text-[#9fef00]" />
                </div>
                <span className="text-[#a4b1cd] font-semibold">{skill.name}</span>
                <span className="ml-auto text-[#9fef00] font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[#0a0e14] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-[#9fef00] to-[#00d4ff] rounded-full"
                  style={{
                    boxShadow: "0 0 10px rgba(159, 239, 0, 0.5)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
