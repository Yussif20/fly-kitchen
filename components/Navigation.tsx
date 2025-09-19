"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("services"), href: `/${locale}/services` },
    { name: t("branches"), href: `/${locale}/branches` },
    { name: t("clients"), href: `/${locale}/clients` },
    { name: t("faq"), href: `/${locale}/faq` },
    { name: t("trackOrder"), href: `/${locale}/track-order` },
    { name: t("login"), href: `/${locale}/login` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname === href;
  };

  return (
    <nav className="hidden md:flex items-center gap-0 relative bg-primary-yellow text-dark-bg dark:bg-dark-bg dark:text-primary-yellow h-20">
      {navigation.map((item) => (
        <div key={item.href} className="flex h-full">
          <Link
            href={item.href}
            className={`flex items-center h-full text-sm font-medium transition-colors duration-200 px-5 rounded-none
              ${
                isActive(item.href)
                  ? "bg-dark-bg text-primary-yellow dark:bg-primary-yellow dark:text-dark-bg"
                  : ""
              }
              hover:bg-dark-bg hover:text-primary-yellow dark:hover:bg-primary-yellow dark:hover:text-dark-bg`}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
