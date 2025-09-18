import { useLocale, useTranslations } from "next-intl";
import { TruckIcon } from "../components/icons/TruckIcon";
import { StorageIcon } from "../components/icons/StorageIcon";
import { LocationIcon } from "../components/icons/LocationIcon";
import { ChannelsIcon } from "../components/icons/ChannelsIcon";

export default function Features() {
  const locale = useLocale();
  const t = useTranslations("Features");
  const features = [
    {
      Icon: TruckIcon,
      title: t("fastDeliveryTitle"),
      desc: t("fastDeliveryDesc"),
    },
    {
      Icon: StorageIcon,
      title: t("storageTitle"),
      desc: t("storageDesc"),
    },
    {
      Icon: LocationIcon,
      title: t("coverageTitle"),
      desc: t("coverageDesc"),
    },
    {
      Icon: ChannelsIcon,
      title: t("channelsTitle"),
      desc: t("channelsDesc"),
    },
  ];
  return (
    <section className="w-full max-w-7xl mx-auto mt-8 px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-2xl sm:text-5xl font-bold text-dark-green dark:text-primary-green leading-tight">
          {t("sectionTitle1")}
          <br />
          <span className="block text-4xl sm:text-5xl text-primary-green dark:text-primary-green mt-6">
            {(() => {
              const s = t("sectionTitle2");
              // For Arabic: highlight last 4 chars (عاتك؟)
              if (locale === "ar" && s.endsWith("عاتك؟")) {
                return (
                  <>
                    {s.slice(0, s.length - 4)}
                    <span className="bg-[#22c55e] text-white rounded px-2">
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
                    <span className="bg-[#22c55e] text-white rounded px-2">
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8">
        {features.map(({ Icon, title, desc }, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4">
            <Icon className="w-16 h-16 mb-2 text-dark-green dark:text-primary-green transition-colors" />
            <h3 className="text-[22px] font-semibold text-dark-green dark:text-primary-green mb-2 mt-2">
              {title}
            </h3>
            <p className="text-[#212529] dark:text-white text-base">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
