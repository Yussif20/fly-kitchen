"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,222,130,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(255,222,130,0.15),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,230,160,0.18),transparent_70%)] blur-2xl" />
      </div>

      {/* Hero Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-bg dark:text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl sm:text-2xl text-primary-yellow dark:text-primary-yellow font-semibold mb-8">
            {t("subtitle")}
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t("intro")}
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark-bg dark:text-white mb-12">
            {t("statsTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: t("stat1Number"), label: t("stat1Label") },
              { number: t("stat2Number"), label: t("stat2Label") },
              { number: t("stat3Number"), label: t("stat3Label") },
              { number: t("stat4Number"), label: t("stat4Label") },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center bg-white/80 dark:bg-dark-bg/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-300/50 dark:border-primary-yellow/30"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 dark:bg-dark-bg/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-yellow-300/50 dark:border-primary-yellow/30">
              <h3 className="text-2xl sm:text-3xl font-bold text-dark-bg dark:text-white mb-6">
                {t("missionTitle")}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("mission")}
              </p>
            </div>
            <div className="bg-white/80 dark:bg-dark-bg/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-yellow-300/50 dark:border-primary-yellow/30">
              <h3 className="text-2xl sm:text-3xl font-bold text-dark-bg dark:text-white mb-6">
                {t("visionTitle")}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("vision")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark-bg dark:text-white mb-12">
            {t("valuesTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t("value1Title"), desc: t("value1Desc") },
              { title: t("value2Title"), desc: t("value2Desc") },
              { title: t("value3Title"), desc: t("value3Desc") },
              { title: t("value4Title"), desc: t("value4Desc") },
            ].map((value, idx) => (
              <div
                key={idx}
                className="text-center bg-white/80 dark:bg-dark-bg/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-300/50 dark:border-primary-yellow/30 transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-yellow rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-dark-bg rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold text-dark-bg dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark-bg dark:text-white mb-12">
            {t("whyChooseTitle")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: t("reason1Title"), desc: t("reason1Desc") },
              { title: t("reason2Title"), desc: t("reason2Desc") },
              { title: t("reason3Title"), desc: t("reason3Desc") },
            ].map((reason, idx) => (
              <div
                key={idx}
                className="bg-white/80 dark:bg-dark-bg/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-yellow-300/50 dark:border-primary-yellow/30 transition-all duration-200 hover:shadow-xl"
              >
                <div className="w-12 h-12 mb-6 bg-primary-yellow rounded-lg flex items-center justify-center">
                  <span className="text-dark-bg font-bold text-xl">
                    {idx + 1}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-dark-bg dark:text-white mb-4">
                  {reason.title}
                </h4>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-bg dark:text-white mb-6">
            {t("teamTitle")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12">
            {t("teamIntro")}
          </p>
          <div className="bg-white/80 dark:bg-dark-bg/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-yellow-300/50 dark:border-primary-yellow/30">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our leadership team combines decades of experience in technology,
              food service, and logistics to deliver innovative solutions that
              drive success for our partners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
