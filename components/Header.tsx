"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Logo from "./Logo";
import Navigation from "./Navigation";

import MobileNavigation from "./MobileNavigation";
import { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  // Handle scroll to update header style
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const locale = useLocale();
  const t = useTranslations("Header");

  // Settings dropdown state and outside click handler
  const [showSettings, setShowSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Scroll state for header style
  const [scrolled, setScrolled] = useState(false);

  // Close settings dropdown on outside click
  useEffect(() => {
    if (!showSettings) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettings(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSettings]);

  return (
    <div className="relative z-30">
      <header
        className={`fixed z-50 border-b bg-[#33BD97] text-[#202332] dark:bg-[#212529] dark:text-[#33BD97] transition-all duration-300 w-full
          ${
            scrolled
              ? "top-0 left-0 translate-x-0 rounded-none mx-0"
              : "top-12 left-1/2 -translate-x-1/2 rounded-2xl shadow-xl"
          }
        `}
        style={{
          maxWidth: scrolled ? "100vw" : "1200px",
        }}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-20 py-4 px-4">
            {/* Logo */}
            <div className="flex-shrink-0 order-2">
              <Link href={`/${locale}`}>
                <Logo className="h-20 w-auto" />
              </Link>
            </div>
            {/* Desktop Navigation + Join Now Button */}
            <div className="order-3 flex-1 flex justify-center items-center gap-4">
              <Navigation />
              <Link
                href="/join"
                className="hidden lg:inline-block bg-[#202332] text-white dark:bg-[#33BD97] dark:text-[#202332] font-bold px-6 py-2 rounded-full text-base shadow hover:bg-[#11131a] dark:hover:bg-[#16a34a] transition-colors duration-200"
                style={{ whiteSpace: "nowrap" }}
              >
                {t("joinNow")}
              </Link>
            </div>
            {/* Right side controls */}
            <div className="flex items-center gap-4 order-4 relative">
              <MobileNavigation />
              {/* Settings Icon */}
              <div ref={settingsRef} className="relative">
                <button
                  className="p-2 rounded-full hover:bg-[#33BD97]/20 dark:hover:bg-[#33BD97]/10 transition-colors"
                  aria-label="Settings"
                  onClick={() => setShowSettings((v) => !v)}
                >
                  <Settings size={24} />
                </button>
                {showSettings && (
                  <div
                    className={`absolute mt-3 max-w-[90vw] z-50 flex flex-col gap-4 p-4 rounded-2xl shadow-2xl border border-[#33BD97]/30 dark:border-[#33BD97]/20 backdrop-blur-xl bg-white/80 dark:bg-[#202332]/80 ring-1 ring-[#33BD97]/10 ${
                      locale === "ar" ? "left-0" : "right-0"
                    }`}
                    style={{
                      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
                    }}
                  >
                    {/* Arrow */}
                    <span
                      className={
                        "absolute -top-2 " +
                        (locale === "ar" ? "left-6" : "right-6") +
                        " w-4 h-4 bg-white dark:bg-[#202332] rotate-45 border-t border-l border-[#33BD97]/30 dark:border-[#33BD97]/20 shadow-sm"
                      }
                      style={{ zIndex: 51 }}
                    />
                    <div className="w-full flex flex-col gap-1">
                      <span className="block text-xs font-semibold text-gray-500 dark:text-gray-300 tracking-wide mb-1">
                        {locale === "ar" ? "اللغة" : "Language"}
                      </span>
                      <div className="w-full flex">
                        <LanguageSelector />
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                      <span className="block text-xs font-semibold text-gray-500 dark:text-gray-300 tracking-wide mb-1">
                        {locale === "ar" ? "المظهر" : "Theme"}
                      </span>
                      <div className="w-full flex">
                        <ThemeSwitcher />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
