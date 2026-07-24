import { useState, useEffect } from "react";

const greetings = [
  { text: "Hello", lang: "ENGLISH" },
  { text: "Bonjour", lang: "FRENCH" },
  { text: "Ciao", lang: "ITALIAN" },
  { text: "Hallo", lang: "GERMAN" },
  { text: "Olá", lang: "PORTUGUESE" },
  { text: "こんにちは", lang: "JAPANESE" },
  { text: "안녕하세요", lang: "KOREAN" },
  { text: "你好", lang: "CHINESE" },
  { text: "مرحبا", lang: "ARABIC" },
  { text: "Привет", lang: "RUSSIAN" },
  { text: "नमस्ते", lang: "HINDI" },
  { text: "Merhaba", lang: "TURKISH" },
  { text: "Hej", lang: "SWEDISH" },
  { text: "হ্যালো", lang: "BENGALI" },
];

export const Loader = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval); // stop cycling after last greeting
          setTimeout(() => setFadeOut(true), 300); // trigger fade out
          setTimeout(() => onFinish(), 500); // finish after fade
          return prev; // stay on last greeting until fade
        }
      });
    }, 130); // change every second

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-black text-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 key={index} className="text-5xl animate-fade-out">
        {greetings[index].text}
      </h1>
      <span className="text-sm  text-muted-foreground mt-4 opacity-25">
        {greetings[index].lang}
      </span>
    </div>
  );
};
