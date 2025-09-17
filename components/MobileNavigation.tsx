"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-expanded="false"
      >
        <span className="sr-only">فتح القائمة الرئيسية</span>
        {/* Hamburger Icon */}
        <svg
          className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {/* Close Icon */}
        <svg
          className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-20 left-0 right-0 w-screen bg-[#22c55e] text-[#202332] dark:bg-[#212529] dark:text-[#22c55e] shadow-lg z-[100]`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium text-center transition-colors duration-200 hover:text-[#202332] dark:hover:text-[#22c55e] ${
                isActive(item.href)
                  ? "border-b-2 border-[#202332] dark:border-[#22c55e] pb-1"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={`/${locale}/join`}
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full max-w-xs mx-auto block text-center bg-[#202332] text-white dark:bg-[#22c55e] dark:text-[#202332] font-bold px-6 py-2 rounded-lg text-base shadow hover:bg-[#11131a] dark:hover:bg-[#16a34a] transition-colors duration-200"
            style={{ whiteSpace: "nowrap" }}
          >
            {t("joinNow")}
          </Link>
        </div>
      </div>
    </div>
  );
}
