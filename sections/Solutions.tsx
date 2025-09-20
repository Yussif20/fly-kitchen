"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Solutions() {
  const t = useTranslations("Solutions");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Solutions data with corresponding icons
  const solutions = [
    {
      icon: "/solutions/wallet.svg",
      title: t("solution1Title"),
      subtitle: t("solution1Subtitle"),
    },
    {
      icon: "/solutions/speed.svg",
      title: t("solution2Title"),
      subtitle: t("solution2Subtitle"),
    },
    {
      icon: "/solutions/cash.svg",
      title: t("solution3Title"),
      subtitle: t("solution3Subtitle"),
    },
    {
      icon: "/solutions/storage.svg",
      title: t("solution4Title"),
      subtitle: t("solution4Subtitle"),
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Enhanced Background with Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-bg dark:via-dark-bg/95 dark:to-dark-bg/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/5 via-transparent to-primary-yellow/5" />

        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-yellow/8 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary-yellow/12 rounded-full blur-lg animate-pulse-slower"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary-yellow/10 rounded-full blur-md animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center ${
              isRTL ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Image Section - Left side for LTR, Right side for RTL */}
            <div
              className={`${
                isRTL ? "lg:col-start-2" : "lg:col-start-1"
              } flex items-center justify-center`}
            >
              <div className="relative group">
                {/* Multiple glow layers for depth */}
                <div className="absolute inset-0 bg-primary-yellow/15 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-primary-yellow/8 rounded-full blur-2xl scale-90 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 to-transparent rounded-full blur-xl scale-75 group-hover:scale-95 transition-transform duration-300"></div>

                {/* Enhanced image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/solutions.webp"
                    alt="Solutions"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/10 via-transparent to-dark-bg/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-l-3 border-t-3 border-primary-yellow rounded-tl-lg opacity-60"></div>
                  <div className="absolute top-6 right-6 w-8 h-8 border-r-3 border-t-3 border-primary-yellow rounded-tr-lg opacity-60"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 border-l-3 border-b-3 border-primary-yellow rounded-bl-lg opacity-60"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-r-3 border-b-3 border-primary-yellow rounded-br-lg opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Content Section - Right side for LTR, Left side for RTL */}
            <div
              className={`${
                isRTL ? "lg:col-start-1" : "lg:col-start-2"
              } space-y-12`}
            >
              {/* Enhanced Title */}
              <div className="space-y-6 relative">
                <div
                  className={`absolute -top-4 w-20 h-20 bg-primary-yellow/8 rounded-full blur-xl animate-pulse-slow ${
                    isRTL ? "-right-4" : "-left-4"
                  }`}
                ></div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-dark-bg dark:text-white relative">
                  <span className="bg-gradient-to-r from-dark-bg via-dark-bg/95 to-dark-bg/90 dark:from-white dark:via-white/95 dark:to-white/90 bg-clip-text text-transparent leading-tight">
                    {t("title")}
                  </span>
                  <div
                    className={`absolute -bottom-2 w-20 h-1 bg-gradient-to-r from-primary-yellow to-primary-yellow/50 rounded-full ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  ></div>
                </h1>
              </div>

              {/* Solutions List */}
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className={`group flex items-start gap-6 transition-all duration-300 ${
                      isRTL ? "hover:-translate-x-2" : "hover:translate-x-2"
                    }`}
                  >
                    {/* Icon as bullet point */}
                    <div className="flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-primary-yellow/20 rounded-full blur-md scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary-yellow/30">
                        <Image
                          src={solution.icon}
                          alt={`Solution ${index + 1}`}
                          width={24}
                          height={24}
                          className="w-6 h-6 text-primary-yellow filter drop-shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-dark-bg dark:text-white group-hover:text-primary-yellow dark:group-hover:text-primary-yellow transition-colors duration-300">
                        {solution.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <div className="relative group pt-8">
                <div className="absolute inset-0 bg-primary-yellow/25 rounded-2xl blur-xl group-hover:blur-lg group-hover:scale-110 transition-all duration-500"></div>
                <Link
                  href={`/${locale}/about`}
                  className="relative inline-flex items-center justify-center px-10 py-5 text-base sm:text-lg font-bold text-dark-bg bg-gradient-to-r from-primary-yellow via-primary-yellow/95 to-primary-yellow hover:from-primary-yellow/95 hover:via-primary-yellow hover:to-primary-yellow/95 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-primary-yellow/50 hover:border-primary-yellow overflow-hidden group"
                >
                  {/* Button shimmer effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ${
                      isRTL
                        ? "translate-x-full group-hover:-translate-x-full"
                        : "-translate-x-full group-hover:translate-x-full"
                    }`}
                  ></div>

                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-3">
                    {t("cta")}
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          isRTL
                            ? "M11 19l-7-7 7-7m8 14l-7-7 7-7"
                            : "M13 5l7 7-7 7M5 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
