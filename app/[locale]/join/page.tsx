"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

interface FormState {
  name: string;
  phone: string;
  storeName: string;
  ordersRange: string;
  isSaudiBrand: boolean;
  discountCode: string;
  additionalInfo: string;
  file?: File | null;
}

export default function JoinPage() {
  const t = useTranslations("Join");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    storeName: "",
    ordersRange: "",
    isSaudiBrand: false,
    discountCode: "",
    additionalInfo: "",
    file: undefined,
  });

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name) e.name = t("required");
    if (!form.phone) e.phone = t("required");
    if (!form.storeName) e.storeName = t("required");
    if (!form.ordersRange) e.ordersRange = t("required");
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      // Simulate network request
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "peer w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-sm px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow/70 focus-visible:border-primary-yellow transition shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:shadow-[0_0_0_3px_rgba(242,201,40,0.25)]";
  const inputWrapper =
    "relative flex items-center gap-2 rounded-md bg-white/60 dark:bg-dark-bg/60 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus-within:border-primary-yellow focus-within:shadow-[0_0_0_2px_rgba(242,201,40,0.25)] transition";
  const iconBase =
    "pl-3 text-gray-400 dark:text-gray-500 flex items-center pointer-events-none";
  const labelBase =
    "block text-sm font-medium mb-1 text-gray-800 dark:text-gray-100";
  const sectionCard =
    "relative overflow-hidden rounded-2xl bg-white/80 dark:bg-[#1c1f29]/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-xl p-6 md:p-10";

  return (
    <div className="relative min-h-[70vh] flex items-start justify-center pt-40 pb-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(242,201,40,0.18),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(242,201,40,0.15),transparent_65%)] dark:opacity-70" />
        {/* angled light sheet */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-[500px] rotate-[8deg] bg-[linear-gradient(100deg,rgba(242,201,40,0.15),rgba(255,255,255,0)_60%)] dark:bg-[linear-gradient(100deg,rgba(242,201,40,0.08),rgba(255,255,255,0)_60%)]" />
        {/* floating orb */}
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(242,201,40,0.35),rgba(242,201,40,0)_70%)] blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-10 -right-32 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(255,224,102,0.3),rgba(242,201,40,0)_70%)] blur-2xl animate-pulse-slower" />
      </div>
      <div className="w-full max-w-4xl space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(90deg,#f2c928,#eab308,#f2c928)] drop-shadow-sm leading-tight">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-semibold max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </header>

        <div className="relative group rounded-3xl p-[1px] bg-[linear-gradient(110deg,#f2c92833,#f2c92888,#f2c92833)] dark:bg-[linear-gradient(110deg,#f2c92844,#f2c928aa,#f2c92833)] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
          <form
            onSubmit={onSubmit}
            className={`${sectionCard} ${
              isRTL ? "rtl" : ""
            } transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-2px]`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_70%_20%,rgba(242,201,40,0.15),transparent_60%)]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className={labelBase}>
                  {t("name") + " *"}
                </label>
                <div className={inputWrapper}>
                  <span className={iconBase}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z" />
                      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
                    </svg>
                  </span>
                  <input
                    id="name"
                    type="text"
                    className={`${inputBase} ${
                      errors.name
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name || undefined}
                    aria-describedby={errors.name ? "error-name" : undefined}
                  />
                </div>
                {errors.name && (
                  <p id="error-name" className="text-xs text-red-500 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              {/* Phone */}
              <div>
                <label htmlFor="phone" className={labelBase}>
                  {t("phone") + " *"}
                </label>
                <div className={inputWrapper}>
                  <span className={iconBase}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l2.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    className={`${inputBase} ${
                      errors.phone
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    autoComplete="tel"
                    aria-required="true"
                    aria-invalid={!!errors.phone || undefined}
                    aria-describedby={errors.phone ? "error-phone" : undefined}
                  />
                </div>
                {errors.phone && (
                  <p id="error-phone" className="text-xs text-red-500 mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
              {/* Store Name */}
              <div>
                <label htmlFor="storeName" className={labelBase}>
                  {t("storeName") + " *"}
                </label>
                <div className={inputWrapper}>
                  <span className={iconBase}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 21V7a2 2 0 0 1 2-2h3l2-3h4l2 3h3a2 2 0 0 1 2 2v14" />
                      <path d="M16 11a4 4 0 0 1-8 0" />
                    </svg>
                  </span>
                  <input
                    id="storeName"
                    type="text"
                    className={`${inputBase} ${
                      errors.storeName
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                    value={form.storeName}
                    onChange={(e) => update("storeName", e.target.value)}
                    aria-required="true"
                    aria-invalid={!!errors.storeName || undefined}
                    aria-describedby={
                      errors.storeName ? "error-storeName" : undefined
                    }
                  />
                </div>
                {errors.storeName && (
                  <p id="error-storeName" className="text-xs text-red-500 mt-1">
                    {errors.storeName}
                  </p>
                )}
              </div>
              {/* Orders Range */}
              <div>
                <label htmlFor="ordersRange" className={labelBase}>
                  {t("ordersMonthly") + " *"}
                </label>
                <div className={inputWrapper}>
                  <span className={iconBase}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                  </span>
                  <select
                    id="ordersRange"
                    className={`${inputBase} appearance-none bg-[length:16px_16px] ${
                      errors.ordersRange
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                    value={form.ordersRange}
                    onChange={(e) => update("ordersRange", e.target.value)}
                    aria-required="true"
                    aria-invalid={!!errors.ordersRange || undefined}
                    aria-describedby={
                      errors.ordersRange ? "error-ordersRange" : undefined
                    }
                  >
                    <option value="" disabled>
                      --
                    </option>
                    <option value="lt100">{t("ordersOptionLt100")}</option>
                    <option value="100_300">{t("ordersOption100_300")}</option>
                    <option value="300_500">{t("ordersOption300_500")}</option>
                    <option value="gt500">{t("ordersOptionGt500")}</option>
                  </select>
                </div>
                {errors.ordersRange && (
                  <p
                    id="error-ordersRange"
                    className="text-xs text-red-500 mt-1"
                  >
                    {errors.ordersRange}
                  </p>
                )}
              </div>
              {/* Saudi Brand */}
              <div className="sm:col-span-2 flex items-center gap-3 mt-2">
                <input
                  id="isSaudiBrand"
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 dark:border-gray-700 text-primary-yellow focus:ring-primary-yellow cursor-pointer"
                  checked={form.isSaudiBrand}
                  onChange={(e) => update("isSaudiBrand", e.target.checked)}
                  aria-checked={form.isSaudiBrand}
                />
                <label
                  htmlFor="isSaudiBrand"
                  className="text-sm font-medium text-gray-800 dark:text-gray-100 select-none"
                >
                  {t("isSaudiBrand")}
                </label>
              </div>
              {/* File Upload */}
              <div className="sm:col-span-2">
                <label htmlFor="fileUpload" className={labelBase}>
                  {t("uploadReport")}
                </label>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    const f = e.dataTransfer.files?.[0];
                    if (f) update("file", f);
                  }}
                  className="group relative flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-6 transition bg-white/60 dark:bg-dark-bg/40 border-gray-300 dark:border-gray-600 hover:border-primary-yellow focus-within:border-primary-yellow cursor-pointer"
                >
                  <input
                    id="fileUpload"
                    type="file"
                    onChange={(e) =>
                      update("file", e.target.files?.[0] || null)
                    }
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    aria-label={t("uploadReport")}
                  />
                  <div className="flex flex-col items-center text-center pointer-events-none">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-yellow mb-1"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {form.file ? form.file.name : t("uploadReport")}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Drag & drop or click to select
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_30%,rgba(242,201,40,0.15),transparent_70%)]" />
                </div>
              </div>
              {/* Discount Code */}
              <div>
                <label htmlFor="discountCode" className={labelBase}>
                  {t("discountCode")}
                </label>
                <input
                  id="discountCode"
                  type="text"
                  placeholder={t("placeholderDiscount")}
                  className={inputBase}
                  value={form.discountCode}
                  onChange={(e) => update("discountCode", e.target.value)}
                />
              </div>
              {/* Additional Info */}
              <div className="sm:col-span-2">
                <label htmlFor="additionalInfo" className={labelBase}>
                  {t("additionalInfo")}
                </label>
                <textarea
                  id="additionalInfo"
                  rows={4}
                  placeholder={t("placeholderAdditionalInfo")}
                  className={inputBase}
                  value={form.additionalInfo}
                  onChange={(e) => update("additionalInfo", e.target.value)}
                />
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
              {submitted && (
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  {t("success")}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="relative inline-flex items-center justify-center px-10 py-3 rounded-full font-semibold text-dark-bg dark:text-dark-bg bg-primary-yellow dark:bg-primary-yellow shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow overflow-hidden"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_60%)] opacity-30 pointer-events-none" />
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    <span className="tracking-wide">...</span>
                  </span>
                ) : (
                  t("submit")
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
