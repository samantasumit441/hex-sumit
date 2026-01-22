"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Flag, Award, Shield, Zap } from "lucide-react";

const stats = [
  { label: "Machines Owned", value: "150+", icon: Target },
  { label: "User Flags", value: "200+", icon: Flag },
  { label: "Root Flags", value: "180+", icon: Shield },
  { label: "Global Rank", value: "Top 5%", icon: Trophy },
];

const achievements = [
  {
    title: "Pro Hacker",
    description: "Achieved Pro Hacker rank on Hack The Box",
    icon: Award,
    date: "2024",
    color: "#9fef00",
  },
  {
    title: "OSCP Certified",
    description: "Offensive Security Certified Professional",
    icon: Shield,
    date: "2024",
    color: "#00d4ff",
  },
  {
    title: "CTF Champion",
    description: "1st Place in HTB Cyber Apocalypse 2024",
    icon: Trophy,
    date: "2024",
    color: "#ffaf00",
  },
  {
    title: "Bug Bounty Hunter",
    description: "Critical vulnerabilities discovered in Fortune 500",
    icon: Zap,
    date: "2023",
    color: "#ff3e3e",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 relative bg-[#0a0e14]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#9fef00] mb-4" style={{ fontFamily: "Orbitron" }}>
            ACHIEVEMENTS
          </h2>
          <div className="neon-line w-48 mx-auto mb-4" />
          <p className="text-[#a4b1cd] text-lg">Battle-Proven Track Record</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#141d2b] border border-[#2a3a50] rounded-lg p-6 text-center glow-box"
            >
              <stat.icon className="w-8 h-8 text-[#9fef00] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-[#9fef00] mb-1" style={{ fontFamily: "Orbitron" }}>
                {stat.value}
              </div>
              <div className="text-sm text-[#6b7f9e]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#141d2b] border border-[#2a3a50] rounded-lg p-6 hover:border-[#9fef00]/50 transition-all group card-3d"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${achievement.color}20` }}
                >
                  <achievement.icon className="w-7 h-7" style={{ color: achievement.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "Orbitron" }}>
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-[#6b7f9e] font-mono">{achievement.date}</span>
                  </div>
                  <p className="text-[#a4b1cd]">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
