"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function TechFeatures() {
  const t = useTranslations("TechFeatures");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    { key: "step1", screen: "screen-1.jpg" },
    { key: "step2", screen: "screen-2.jpg" },
    { key: "step3", screen: "screen-3.jpg" },
    { key: "step4", screen: "screen-4.jpg" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);

    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  return (
    <div className="relative w-full overflow-hidden bg-dark-bg py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary-yellow/5 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-primary-yellow/10 rounded-full blur-xl animate-pulse-slower" />
        <div className="absolute top-1/2 right-1/2 w-16 h-16 bg-primary-yellow/5 rounded-full blur-lg animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-primary-yellow to-primary-yellow/50 rounded-full mx-auto ${
              isRTL ? "animate-pulse-rtl" : "animate-pulse"
            }`}
          />
        </div>

        {/* Main Content - Split Layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-center ${
            isRTL ? "lg:grid-cols-2" : ""
          }`}
        >
          {/* Tablet with Screenshots - Left side */}
          <div
            className={`relative ${
              isRTL ? "lg:order-2" : "lg:order-1"
            } flex justify-center`}
          >
            {/* Tablet Frame */}
            <div className="relative">
              {/* Professional Tablet Shadow & Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary-yellow/15 via-gray-400/10 to-primary-yellow/5 rounded-[3rem] blur-3xl opacity-60" />
              <div className="absolute -inset-4 bg-gradient-to-br from-gray-300/20 via-transparent to-gray-300/10 rounded-[2.8rem] blur-xl" />

              {/* Tablet Body - Professional Design */}
              <div className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-[2.8rem] p-3 shadow-2xl">
                {/* Inner Frame */}
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.4rem] p-4 border border-gray-600/30">
                  {/* Bezel/Frame */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-[2rem] p-2 border border-gray-700/50">
                    {/* Screen Area - Responsive with minimum screen width for small screens only */}
                    <div className="relative bg-black rounded-[1.6rem] overflow-hidden aspect-[16/10] w-full min-w-[280px] sm:w-[500px] lg:w-[580px]">
                      {/* Screen Content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                        <Image
                          src={`/features/${steps[activeStep].screen}`}
                          alt={t(steps[activeStep].key)}
                          fill
                          className="object-cover transition-all duration-500 ease-in-out"
                          priority={activeStep === 0}
                        />

                        {/* Professional Screen Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                        {/* Screen Reflection Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Speaker Grilles */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 flex space-x-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-gray-600 rounded-full opacity-60"
                      />
                    ))}
                  </div>

                  {/* Camera */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2">
                    <div className="w-3 h-3 bg-gradient-to-br from-gray-800 to-black rounded-full border border-gray-600/50">
                      <div className="w-2 h-2 bg-gradient-to-br from-blue-900 to-black rounded-full m-0.5" />
                    </div>
                  </div>
                </div>

                {/* Volume Buttons */}
                <div
                  className={`absolute top-20 w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-r-full ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                />
                <div
                  className={`absolute top-32 w-1 h-12 bg-gradient-to-b from-gray-400 to-gray-500 rounded-r-full ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                />

                {/* Power Button */}
                <div
                  className={`absolute top-20 w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-l-full ${
                    isRTL ? "left-0" : "right-0"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Steps List - Right side */}
          <div className={`space-y-6 ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
            {steps.map((step, index) => (
              <div
                key={step.key}
                onClick={() => handleStepClick(index)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                  activeStep === index
                    ? "bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/10 border border-primary-yellow/30 shadow-lg shadow-primary-yellow/10"
                    : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-gray-600/50"
                }`}
              >
                {/* Step Number */}
                <div
                  className={`absolute top-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                    isRTL ? "right-4" : "left-4"
                  } ${
                    activeStep === index
                      ? "bg-primary-yellow text-dark-bg"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {index + 1}
                </div>

                {/* Step Content */}
                <div className={`${isRTL ? "pr-12" : "pl-12"}`}>
                  <h3
                    className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                      activeStep === index
                        ? "text-primary-yellow"
                        : "text-white"
                    }`}
                  >
                    {t(step.key)}
                  </h3>
                </div>

                {/* Active Indicator */}
                {activeStep === index && (
                  <div
                    className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary-yellow to-primary-yellow/50 rounded-full ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  />
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-slower {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-rtl {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse;
        }
      `}</style>
    </div>
  );
}
