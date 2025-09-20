"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Branches() {
  const t = useTranslations("Branches");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Branch data with Google Maps links
  const branches = [
    {
      region: t("riyadh"),
      districts: [
        {
          name: t("rawdah"),
          url: "https://maps.google.com/search/الروضة+الرياض",
        },
        {
          name: t("suwaidi"),
          url: "https://maps.google.com/search/السويدي+الرياض",
        },
        {
          name: t("qairawan"),
          url: "https://maps.google.com/search/القيروان+الرياض",
        },
        {
          name: t("masif"),
          url: "https://maps.google.com/search/المصيف+الرياض",
        },
        { name: t("laban"), url: "https://maps.google.com/search/لبن+الرياض" },
        {
          name: t("olaya"),
          url: "https://maps.google.com/search/العليا+الرياض",
        },
        {
          name: t("narjis"),
          url: "https://maps.google.com/search/النرجس+الرياض",
        },
        {
          name: t("yarmouk"),
          url: "https://maps.google.com/search/اليرموك+الرياض",
        },
        {
          name: t("badeea"),
          url: "https://maps.google.com/search/البديعة+الرياض",
        },
        {
          name: t("naseem"),
          url: "https://maps.google.com/search/النسيم+الرياض",
        },
        {
          name: t("aziziyah"),
          url: "https://maps.google.com/search/العزيزية+الرياض",
        },
        { name: t("kharj"), url: "https://maps.google.com/search/الخرج" },
      ],
    },
    {
      region: t("qassim"),
      districts: [
        {
          name: t("buraidah"),
          url: "https://maps.google.com/search/بريدة+القصيم",
        },
      ],
    },
    {
      region: t("eastern"),
      districts: [
        { name: t("dammam"), url: "https://maps.google.com/search/الدمام" },
        { name: t("hofuf"), url: "https://maps.google.com/search/الهفوف" },
      ],
    },
    {
      region: t("western"),
      districts: [
        { name: t("jeddah"), url: "https://maps.google.com/search/جدة" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/branches.webp"
          alt="Branches"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced overlay with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/85 via-dark-bg/75 to-dark-bg/65 dark:from-dark-bg/95 dark:via-dark-bg/85 dark:to-dark-bg/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-yellow/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-yellow/10 to-transparent" />

        {/* Animated floating elements */}
        <div
          className={`absolute top-1/4 w-32 h-32 bg-primary-yellow/10 rounded-full blur-xl animate-pulse-slow ${
            isRTL ? "right-1/4" : "left-1/4"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/3 w-24 h-24 bg-primary-yellow/15 rounded-full blur-lg animate-pulse-slower ${
            isRTL ? "left-1/4" : "right-1/4"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 w-16 h-16 bg-white/10 rounded-full blur-md animate-pulse ${
            isRTL ? "left-1/3" : "right-1/3"
          }`}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              isRTL ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Map Section - Left side for LTR, Right side for RTL */}
            <div
              className={`${
                isRTL ? "lg:col-start-2" : "lg:col-start-1"
              } flex items-center justify-center`}
            >
              <div className="relative group">
                {/* Multiple glow layers for depth */}
                <div className="absolute inset-0 bg-primary-yellow/20 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-primary-yellow/10 rounded-full blur-2xl scale-90 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl scale-75 group-hover:scale-95 transition-transform duration-300"></div>

                {/* Enhanced map container */}
                <div className="relative dark:from-dark-bg/95 dark:via-dark-bg/90 dark:to-dark-bg/85 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-yellow-300/60 dark:border-primary-yellow/40 group-hover:border-yellow-400/80 dark:group-hover:border-primary-yellow/60 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105">
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary-yellow rounded-tl-lg opacity-60"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary-yellow rounded-tr-lg opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary-yellow rounded-bl-lg opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary-yellow rounded-br-lg opacity-60"></div>

                  <div className="w-80 h-80 sm:w-96 sm:h-96 text-primary-yellow dark:text-primary-yellow group-hover:text-primary-yellow/90 transition-colors duration-300">
                    <Image
                      src="/map.svg"
                      alt="Map"
                      width={384}
                      height={384}
                      className="w-full h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                      priority
                    />
                  </div>

                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 via-transparent to-primary-yellow/5 rounded-3xl pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Content Section - Right side for LTR, Left side for RTL */}
            <div
              className={`${
                isRTL ? "lg:col-start-1" : "lg:col-start-2"
              } space-y-10`}
            >
              {/* Enhanced Title with decorative elements */}
              <div className="space-y-6 relative">
                <div
                  className={`absolute -top-4 w-20 h-20 bg-primary-yellow/10 rounded-full blur-xl animate-pulse-slow ${
                    isRTL ? "-right-4" : "-left-4"
                  }`}
                ></div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl relative">
                  <span className="bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
                    {t("title")}
                  </span>
                  <div
                    className={`absolute -bottom-2 w-24 h-1 bg-gradient-to-r from-primary-yellow to-primary-yellow/50 rounded-full ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  ></div>
                </h1>
              </div>

              {/* Enhanced Branches List */}
              <div className="space-y-8">
                {branches.map((region, regionIdx) => (
                  <div key={regionIdx} className="space-y-4 group">
                    <div className="relative">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-yellow relative inline-block">
                        <span className="relative z-10">{region.region}</span>
                        <div className="absolute inset-0 bg-primary-yellow/20 blur-sm rounded-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {region.districts.map((district, districtIdx) => (
                        <a
                          key={districtIdx}
                          href={district.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item relative block px-4 py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-br from-white/25 via-white/20 to-white/15 hover:from-white/35 hover:via-white/30 hover:to-white/25 dark:from-dark-bg/50 dark:via-dark-bg/40 dark:to-dark-bg/30 dark:hover:from-dark-bg/70 dark:hover:via-dark-bg/60 dark:hover:to-dark-bg/50 backdrop-blur-md rounded-xl border border-white/40 dark:border-primary-yellow/40 hover:border-white/60 dark:hover:border-primary-yellow/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                        >
                          {/* Shimmer effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700"></div>

                          {/* Content */}
                          <span className="relative z-10 flex items-center justify-center h-full">
                            {district.name}
                          </span>

                          {/* Bottom accent line */}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover/item:w-full transition-all duration-300"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Description and CTA */}
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/10 via-transparent to-primary-yellow/10 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-500"></div>
                  <div className="relative text-base sm:text-lg leading-relaxed text-white/95 bg-gradient-to-br from-white/15 via-white/10 to-white/5 dark:from-dark-bg/40 dark:via-dark-bg/30 dark:to-dark-bg/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 dark:border-primary-yellow/30 shadow-xl">
                    <span className="relative z-10">{t("description")}</span>
                    {/* Decorative quote marks */}
                    <div
                      className={`absolute top-4 text-primary-yellow/30 text-4xl font-serif ${
                        isRTL ? "right-4" : "left-4"
                      }`}
                    >
                      &ldquo;
                    </div>
                    <div
                      className={`absolute bottom-4 text-primary-yellow/30 text-4xl font-serif rotate-180 ${
                        isRTL ? "left-4" : "right-4"
                      }`}
                    >
                      &rdquo;
                    </div>
                  </div>
                </div>

                {/* Enhanced CTA Button */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-yellow/30 rounded-2xl blur-xl group-hover:blur-lg group-hover:scale-110 transition-all duration-500"></div>
                  <Link
                    href={`/${locale}/join`}
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
                    <span className="relative z-10 flex items-center gap-2">
                      {t("cta")}
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          isRTL
                            ? "group-hover:-translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}
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
    </div>
  );
}
