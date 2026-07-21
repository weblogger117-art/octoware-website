import Link from "next/link";
import Image from "next/image";

import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between rounded-xl border border-white/30 bg-white/10 px-8 backdrop-blur-2xl shadow-[0_8px_30px_rgba(20,106,177,0.08)]">

        <Link
          href="/"
          className="flex items-center transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/images/branding/easy-soft-logo.png"
            alt="easy-soft GmbH"
            width={220}
            height={52}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <Navigation />

      </div>
    </header>
  );
}
