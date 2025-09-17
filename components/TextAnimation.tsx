// components/TextAnimation.jsx
"use client"; // Required for client-side interactivity in Next.js App Router

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

const textsAr = ["تخيل", "بسهولة", "ببساطة"];
const textsEn = ["Imagine", "Easily", "Simply"];

export default function TextAnimation() {
  const locale = useLocale();
  const texts = locale === "ar" ? textsAr : textsEn;
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = texts[index];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }, 300);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, texts, index]);

  return (
    <div className="flex items-center justify-center text-center text-2xl font-bold mb-2">
      <span className="text-6xl text-[#22c55e] inline-block ">
        {displayed}
        <span className="animate-pulse">|</span>
      </span>
      <span className="inline-block text-6xl font-semibold py-1 rounded  text-[#22c55e]">
        ..
      </span>
    </div>
  );
}
