"use client";

import { useTranslations } from "next-intl";
import { Branches } from "@/sections";

export default function AboutPage() {
  const t = useTranslations("About");
  const slogans = useTranslations("Slogans");

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,222,130,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(255,222,130,0.15),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,230,160,0.18),transparent_70%)] blur-2xl" />
      </div>

      {/* Who We Are Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-bg dark:text-white mb-6">
            {t("title")}
          </h1>

          {/* Our Slogans */}
          <div className="space-y-6 mb-12">
            <div className="bg-white/80 dark:bg-dark-bg/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-yellow-300/50 dark:border-primary-yellow/30">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-yellow mb-4">
                {slogans("branchesCloser")}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {slogans("branchesCloserDesc")}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-dark-bg/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-yellow-300/50 dark:border-primary-yellow/30">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-yellow mb-4">
                {slogans("salesEverywhere")}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {slogans("salesEverywhereDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <Branches />
    </div>
  );
}
