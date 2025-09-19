"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

export default function FAQPage() {
  const t = useTranslations("FAQ");

  const items: FAQItem[] = Array.from({ length: 9 }).map((_, i) => {
    const idx = i + 1;
    return {
      id: `q${idx}`,
      q: t(`q${idx}`),
      a: t(`a${idx}`),
    };
  });

  const [openId, setOpenId] = useState<string | null>(items[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden py-40 px-4 sm:px-6 lg:px-8">
      {/* Decorative background similar to join page */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,222,130,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(255,222,130,0.15),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,230,160,0.18),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-bg dark:text-white">
            {t("title")}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            {t("intro")}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="group relative rounded-xl border border-yellow-300/50 bg-white/80 backdrop-blur-sm dark:bg-dark-bg/70 dark:border-primary-yellow/30 shadow transition-all duration-200 hover:shadow-lg hover:border-yellow-400/70 dark:hover:border-primary-yellow/50 hover:bg-white/90 dark:hover:bg-dark-bg/80"
              >
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                  className="w-full flex items-start gap-4 text-start px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-yellow dark:focus-visible:ring-primary-yellow/70"
                >
                  <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-yellow text-dark-bg font-bold text-sm">
                    {idx + 1}
                  </span>
                  <span className="flex-1 text-base sm:text-lg font-semibold text-dark-bg dark:text-white leading-snug">
                    {item.q}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-dark-bg dark:text-primary-yellow transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 8l4 4 4-4" />
                  </svg>
                </button>
                <div
                  id={`${item.id}-panel`}
                  role="region"
                  aria-labelledby={item.id}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-16 pb-6 -mt-2 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
