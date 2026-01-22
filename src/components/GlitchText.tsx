"use client";

import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    
    const interval = setInterval(() => {
      if (index <= text.length) {
        const revealed = text.slice(0, index);
        const scrambled = text
          .slice(index, index + 3)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("");
        setDisplayText(revealed + scrambled);
        index++;
      } else {
        setDisplayText(text);
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`${className} ${isComplete ? "glow-text" : ""}`}>
      {displayText}
    </span>
  );
}
