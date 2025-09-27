import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Clock, ArrowLeft, Home } from "lucide-react";

interface ComingSoonProps {
  pageKey:
    | "services"
    | "clients"
    | "trackOrder"
    | "contact"
    | "privacy"
    | "terms";
}

export default function ComingSoon({ pageKey }: ComingSoonProps) {
  const t = useTranslations("ComingSoon");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-bg dark:via-dark-bg/95 dark:to-dark-bg/90 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-yellow/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary-yellow/15 rounded-full blur-lg animate-pulse-slower"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary-yellow/10 rounded-full blur-md animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Clock Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary-yellow/20 rounded-full blur-xl scale-110 animate-pulse-slow"></div>
            <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/10 rounded-full flex items-center justify-center border border-primary-yellow/30">
              <Clock className="w-12 h-12 text-primary-yellow" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-bg dark:text-white">
              <span className="bg-gradient-to-r from-dark-bg via-dark-bg/95 to-dark-bg/90 dark:from-white dark:via-white/95 dark:to-white/90 bg-clip-text text-transparent">
                {t(`${pageKey}.title`)}
              </span>
            </h1>
            <div
              className={`w-24 h-1 bg-gradient-to-r from-primary-yellow to-primary-yellow/50 rounded-full mx-auto`}
            ></div>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-yellow/20 to-primary-yellow/10 border border-primary-yellow/30 rounded-full backdrop-blur-md">
            <span className="text-lg font-semibold text-primary-yellow mr-2">
              {t("title")}
            </span>
            <div className="w-2 h-2 bg-primary-yellow rounded-full animate-pulse"></div>
          </div>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            {t("subtitle")}
          </h2>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              {t(`${pageKey}.description`)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {t("description")}
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="pt-8">
            <Link
              href={`/${locale}`}
              className="group inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-dark-bg bg-gradient-to-r from-primary-yellow via-primary-yellow/95 to-primary-yellow hover:from-primary-yellow/95 hover:via-primary-yellow hover:to-primary-yellow/95 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-primary-yellow/50 hover:border-primary-yellow overflow-hidden"
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
                {isRTL ? (
                  <>
                    {t("backToHome")}
                    <ArrowLeft
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        isRTL
                          ? "group-hover:translate-x-1"
                          : "group-hover:-translate-x-1"
                      }`}
                    />
                  </>
                ) : (
                  <>
                    <Home className="w-5 h-5" />
                    {t("backToHome")}
                  </>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
