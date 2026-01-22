"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalProps {
  lines: string[];
  typingSpeed?: number;
}

export function Terminal({ lines, typingSpeed = 30 }: TerminalProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, line]);
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, displayedLines, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0a0e14] border border-[#2a3a50] rounded-lg p-4 font-mono text-sm max-w-2xl w-full"
    >
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#2a3a50]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-[#6b7f9e] text-xs">root@htb:~</span>
      </div>
      <div className="space-y-1">
        {displayedLines.map((line, i) => (
          <div key={i} className="text-[#a4b1cd]">
            <span className="text-[#9fef00]">➜</span> {line}
          </div>
        ))}
        {currentLine < lines.length && (
          <div className="text-[#a4b1cd]">
            <span className="text-[#9fef00]">➜</span>{" "}
            {lines[currentLine].slice(0, currentChar)}
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
