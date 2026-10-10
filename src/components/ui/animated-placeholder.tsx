import { useState, useEffect } from "react";
import { TypingAnimation } from "./typing-animation";
import { cn } from "@/lib/utils";

interface AnimatedPlaceholderProps {
  placeholders: string[];
  duration?: number;
  typingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function AnimatedPlaceholder({
  placeholders,
  duration = 3000,
  typingSpeed = 50,
  pauseDuration = 1000,
  className,
}: AnimatedPlaceholderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        setIsTyping(true);
      }, pauseDuration);

      return () => clearTimeout(timeout);
    }
  }, [isTyping, placeholders.length, pauseDuration]);

  return (
    <TypingAnimation
      text={placeholders[currentIndex]}
      duration={typingSpeed}
      className={cn("text-gray-400", className)}
      onComplete={() => setIsTyping(false)}
    />
  );
}
