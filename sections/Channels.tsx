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

export default function Channels() {
  const t = useTranslations("Channels");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Channel items (images expected to be placed under /public/channels/* by the user later)
  const channels = [
    { key: "hungerStation", img: "/channels/hungerstation-logo.svg" },
    { key: "zid", img: "/channels/zid-logo.webp" },
    { key: "shopify", img: "/channels/shopify-logo.svg" },
    { key: "salla", img: "/channels/salla-logo.svg" },
    { key: "noonFood", img: "/channels/noon-food.png" },
    { key: "mrsool", img: "/channels/mrsool.png" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-bg dark:via-dark-bg/95 dark:to-dark-bg/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/5 via-transparent to-primary-yellow/5" />
        {/* Floating accents */}
        <div className="absolute top-1/4 left-1/5 w-28 h-28 bg-primary-yellow/10 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-primary-yellow/15 rounded-full blur-lg animate-pulse-slower" />
        <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-primary-yellow/10 rounded-full blur-md animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title at the top */}
          <div className="text-center mb-12 space-y-6 relative">
            <div
              className={`absolute -top-4 w-20 h-20 bg-primary-yellow/10 rounded-full blur-xl animate-pulse-slow ${
                isRTL ? "-right-4" : "-left-4"
              }`}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-dark-bg dark:text-white relative mx-auto max-w-3xl">
              <span className="bg-gradient-to-r from-dark-bg via-dark-bg/95 to-dark-bg/90 dark:from-white dark:via-white/95 dark:to-white/90 bg-clip-text text-transparent leading-tight">
                {t("title")}
              </span>
              <div
                className={`absolute -bottom-2 w-24 h-1 bg-gradient-to-r from-primary-yellow to-primary-yellow/50 rounded-full ${
                  isRTL
                    ? "right-1/2 translate-x-1/2"
                    : "left-1/2 -translate-x-1/2"
                }`}
              ></div>
            </h1>
          </div>

          {/* Swiper Slider below the title */}
          <div className="relative w-full max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
              dir={isRTL ? "rtl" : "ltr"}
              className="px-8"
            >
              {channels.map((c) => (
                <SwiperSlide key={c.key}>
                  <div className="relative h-36 w-full flex flex-col items-center py-16 my-16 justify-center rounded-2xl bg-white border border-primary-yellow/30 hover:border-primary-yellow/60 transition-all duration-300 group/inner shadow hover:shadow-lg overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute flex flex-col justify-between items-center inset-0 opacity-0 group-hover/inner:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-yellow/20 via-transparent to-primary-yellow/20" />
                    <Image
                      src={c.img}
                      alt={c.key}
                      width={140}
                      height={80}
                      className="object-contain drop-shadow-sm group-hover/inner:scale-105 transition-transform duration-300 w-auto max-h-20"
                    />
                    <span className="mt-4 text-sm font-medium text-dark-bg text-center">
                      {t(`${c.key}Title`)}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
