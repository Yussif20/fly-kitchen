"use client";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

interface LoginState {
  email: string;
  password: string;
  remember: boolean;
}

export default function LoginPage() {
  const t = useTranslations("Login");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [form, setForm] = useState<LoginState>({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function update<K extends keyof LoginState>(key: K, value: LoginState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.email) e.email = t("required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("invalidEmail");
    if (!form.password) e.password = t("required");
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-sm px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow/70 focus-visible:border-primary-yellow transition shadow-sm placeholder-gray-400 dark:placeholder-gray-500";
  // Match join page styling
  const inputWrapper =
    "relative flex items-center gap-2 rounded-md bg-white/60 dark:bg-dark-bg/60 backdrop-blur-sm border border-gray-300 dark:border-gray-600 focus-within:border-primary-yellow focus-within:shadow-[0_0_0_2px_rgba(242,201,40,0.25)] transition";
  const iconBase =
    "pl-3 text-gray-400 dark:text-gray-500 flex items-center pointer-events-none";
  const labelBase =
    "block text-sm font-medium mb-1 text-gray-800 dark:text-gray-100";
  const wrapper =
    "relative rounded-2xl bg-white/80 dark:bg-[#1c1f29]/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-xl p-6 md:p-10";
  // iconColor no longer needed with shared pattern

  return (
    <div
      className="relative min-h-[70vh] flex items-start justify-center pt-40 pb-24 px-4 md:px-6 lg:px-8 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(242,201,40,0.15),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(242,201,40,0.12),transparent_65%)]" />
      <div className="w-full max-w-md space-y-10">
        <header className="text-center space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(90deg,#f2c928,#eab308,#f2c928)] drop-shadow-sm">
            {t("title")}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
            {t("subtitle")}
          </p>
        </header>
        <form onSubmit={onSubmit} className={wrapper} noValidate>
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className={labelBase}>
                {t("email")}
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
                    <path d="m4 4 8 8 8-8" />
                    <path d="M2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6" />
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={`${inputBase} ${
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email || undefined}
                  aria-describedby={errors.email ? "error-email" : undefined}
                />
              </div>
              {errors.email && (
                <p id="error-email" className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className={labelBase}>
                {t("password")}
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className={`${inputBase} ${
                    errors.password
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  aria-invalid={!!errors.password || undefined}
                  aria-describedby={
                    errors.password ? "error-password" : undefined
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="ml-auto mr-2 text-xs font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-dark-bg hover:bg-primary-yellow/80 dark:hover:text-dark-bg px-2 py-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow"
                  aria-label={
                    showPassword
                      ? isRTL
                        ? "اخفاء"
                        : "Hide password"
                      : isRTL
                      ? "اظهار"
                      : "Show password"
                  }
                >
                  {showPassword
                    ? isRTL
                      ? "اخفاء"
                      : "Hide"
                    : isRTL
                    ? "اظهار"
                    : "Show"}
                </button>
              </div>
              {errors.password && (
                <p id="error-password" className="mt-1 text-xs text-red-500">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap text-sm">
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-primary-yellow focus:ring-primary-yellow"
                  checked={form.remember}
                  onChange={(e) => update("remember", e.target.checked)}
                />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {t("rememberMe")}
                </span>
              </label>
              <button
                type="button"
                className="text-primary-yellow hover:underline font-medium"
              >
                {t("forgotPassword")}
              </button>
            </div>
            {success && (
              <p className="text-xs font-medium text-green-600 dark:text-green-400">
                {t("success")}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="relative inline-flex w-full items-center justify-center px-8 py-3 rounded-full font-semibold text-dark-bg dark:text-dark-bg bg-primary-yellow shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-dark-bg/30 border-t-dark-bg" />
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
  );
}
