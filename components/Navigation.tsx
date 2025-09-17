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
    <nav className="hidden md:flex items-center gap-0 relative bg-[#f2c928] text-[#202332] dark:bg-[#212529] dark:text-[#f2c928] h-20">
      {navigation.map((item) => (
        <div key={item.href} className="flex h-full">
          <Link
            href={item.href}
            className={`flex items-center h-full text-sm font-medium transition-colors duration-200 px-5 rounded-none
              ${
                isActive(item.href)
                  ? "bg-[#202332] text-[#f2c928] dark:bg-[#f2c928] dark:text-[#202332]"
                  : ""
              }
              hover:bg-[#202332] hover:text-[#f2c928] dark:hover:bg-[#f2c928] dark:hover:text-[#202332]`}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
