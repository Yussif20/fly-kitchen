import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Features() {
  const locale = useLocale();
  const t = useTranslations("Features");
  const features = [
    {
      icon: "/icons/truck.svg",
      title: t("fastDeliveryTitle"),
      desc: t("fastDeliveryDesc"),
      alt: t("fastDeliveryTitle"),
    },
    {
      icon: "/icons/storage.svg",
      title: t("storageTitle"),
      desc: t("storageDesc"),
      alt: t("storageTitle"),
    },
    {
      icon: "/icons/location.svg",
      title: t("coverageTitle"),
      desc: t("coverageDesc"),
      alt: t("coverageTitle"),
    },
    {
      icon: "/icons/channels.svg",
      title: t("channelsTitle"),
      desc: t("channelsDesc"),
      alt: t("channelsTitle"),
    },
  ];
  return (
    <section className="w-full max-w-7xl mx-auto mt-8 px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-2xl sm:text-5xl font-bold text-[#202332] dark:text-[#f2c928] leading-tight">
          {t("sectionTitle1")}
          <br />
          <span className="block text-4xl sm:text-5xl text-[#f2c928] dark:text-[#202332] mt-6">
            {(() => {
              const s = t("sectionTitle2");
              // For Arabic: highlight last 4 chars (عاتك؟)
              if (locale === "ar" && s.endsWith("عاتك؟")) {
                return (
                  <>
                    {s.slice(0, s.length - 4)}
                    <span className="bg-[#f2c928] text-white rounded px-2">
                      {s.slice(-4)}
                    </span>
                  </>
                );
              }
              // For English: highlight 'les?' in 'sales?' if present
              if (locale === "en" && s.toLowerCase().includes("sales")) {
                const idx = s.toLowerCase().indexOf("sales");
                return (
                  <>
                    {s.slice(0, idx + 2)}
                    <span className="bg-[#f2c928] text-white rounded px-2">
                      {s.slice(idx + 2)}
                    </span>
                  </>
                );
              }
              return s;
            })()}
          </span>
        </h2>
      </div>
      {/* Responsive: stack icon, title, desc per feature on mobile; grid on md+ */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4">
            <Image
              src={feature.icon}
              alt={feature.alt}
              width={64}
              height={64}
              className="mb-2 max-w-[64px] max-h-[64px]"
            />
            <h3 className="text-[22px] font-semibold text-[#212529] mb-2 mt-2">
              {feature.title}
            </h3>
            <p className="text-[#8492a6] dark:text-[#f2c928] text-base">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
