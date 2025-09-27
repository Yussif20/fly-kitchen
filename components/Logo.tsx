"use client";

import Image from "next/image";

export default function Logo({
  className = "h-20 w-auto max-w-[220px] flex items-center justify-center",
}: {
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Light mode logo */}
      <Image
        src="/logo-light.png"
        alt="Fly Kitchen Logo"
        width={140}
        height={80}
        className="block dark:hidden select-none h-20 w-auto"
        priority
        suppressHydrationWarning
        draggable={false}
      />
      {/* Dark mode logo */}
      <Image
        src="/logo-dark.png"
        alt="Fly Kitchen Logo"
        width={140}
        height={80}
        className="hidden dark:block select-none h-20 w-auto"
        priority
        suppressHydrationWarning
        draggable={false}
      />
    </div>
  );
}
