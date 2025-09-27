"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function CustomerJourney() {
  const t = useTranslations("CustomerJourney");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Journey steps with step numbers and content
  const journeySteps = [
    { step: 1, key: "step1" },
    { step: 2, key: "step2" },
    { step: 3, key: "step3" },
    { step: 4, key: "step4" },
    { step: 5, key: "step5" },
    { step: 6, key: "step6" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-bg dark:via-dark-bg/95 dark:to-dark-bg/90">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/5 via-transparent to-primary-yellow/5" />
        {/* Floating accents */}
        <div className="absolute top-1/4 left-1/5 w-28 h-28 bg-primary-yellow/10 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-primary-yellow/15 rounded-full blur-lg animate-pulse-slower" />
        <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-primary-yellow/10 rounded-full blur-md animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-16 space-y-6 relative">
            <div
              className={`absolute -top-4 w-20 h-20 bg-primary-yellow/10 rounded-full blur-xl animate-pulse-slow ${
                isRTL ? "-right-4" : "-left-4"
              }`}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-dark-bg dark:text-white relative mx-auto max-w-4xl">
              <span className="bg-gradient-to-r from-dark-bg via-dark-bg/95 to-dark-bg/90 dark:from-white dark:via-white/95 dark:to-white/90 bg-clip-text text-transparent leading-tight">
                {t("title")}
              </span>
              <div
                className={`absolute -bottom-2 w-24 h-1 bg-gradient-to-r from-primary-yellow to-primary-yellow/50 rounded-full ${
                  isRTL
                    ? "right-1/2 translate-x-1/2"
                    : "left-1/2 -translate-x-1/2"
                }`}
              />
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Journey Steps Slider */}
          <div className="relative w-full max-w-7xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              dir={isRTL ? "rtl" : "ltr"}
              className="px-4"
            >
              {journeySteps.map((item) => (
                <SwiperSlide key={item.key}>
                  <div className="relative py-4 my-16 h-[500px] w-full rounded-3xl overflow-hidden group shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={`/steps/step${item.step
                          .toString()
                          .padStart(2, "0")}.png`}
                        alt={t(`${item.key}.title`)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/50 to-dark-bg/20" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                      {/* Content */}
                      <div className="text-center space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary-yellow transition-colors duration-300 leading-tight">
                          {t(`${item.key}.title`)}
                        </h3>
                        <div className="w-12 h-0.5 bg-primary-yellow mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                          {t(`${item.key}.description`)}
                        </p>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-6 right-6 w-6 h-6 border-2 border-primary-yellow/40 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-6 left-6 w-4 h-4 bg-primary-yellow/40 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>

                    {/* Border Glow Effect */}
                    <div className="absolute inset-0 border border-primary-yellow/30 group-hover:border-primary-yellow/60 rounded-3xl transition-colors duration-500 pointer-events-none" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
}
