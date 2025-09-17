import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations("Footer");
  const tHero = useTranslations("Hero");
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Social icons and contact button overlay */}
      <div className="absolute top-2 w-full flex items-center px-6 z-30 justify-end">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#202332]/10 dark:hover:bg-[#f2c928]/10 transition-colors"
          aria-label="Twitter"
        >
          <Twitter color="#1DA1F2" size={18} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#202332]/10 dark:hover:bg-[#f2c928]/10 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin color="#0077B5" size={18} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-[#202332]/10 dark:hover:bg-[#f2c928]/10 transition-colors"
          aria-label="Instagram"
        >
          <Instagram color="#C13584" size={18} />
        </a>
        <Link
          href="/contact"
          className="ml-2 bg-[#202332] text-white dark:bg-[#f2c928] dark:text-[#202332] font-bold px-4 py-2 rounded-lg text-sm shadow hover:bg-[#11131a] dark:hover:bg-[#ffe082] transition-colors duration-200"
          style={{ whiteSpace: "nowrap" }}
        >
          {t("contact")}
        </Link>
      </div>
      {/* Background Image */}
      <Image
        src="/hero.webp"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[rgba(60,50,10,0.85)] mix-blend-multiply" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#f2c928] mb-4 drop-shadow-lg">
          {tHero("title")}
        </h1>
        <p className="text-lg sm:text-2xl text-white mb-8 max-w-2xl drop-shadow">
          {tHero("subtitle")}
        </p>
        <button
          className="bg-[#f2c928] text-[#202332] font-bold px-8 py-3 rounded-lg text-lg shadow-lg transition-colors duration-200
            hover:bg-[#ddb300] hover:ring-2 hover:ring-[#f2c928] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#f2c928]"
        >
          {tHero("cta")}
        </button>
      </div>
    </section>
  );
}
