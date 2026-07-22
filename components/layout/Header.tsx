import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

import { Navigation } from "@/components/layout/Navigation";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <Container>
        <div
          className="
            flex
            h-[72px]
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200/80
            bg-white/75
            backdrop-blur-md
            shadow-[0_12px_40px_rgba(15,23,42,0.08)]
            px-10
          "
        >
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
              className="h-12 w-auto"
            />
          </Link>

          <Navigation />
        </div>
      </Container>
    </header>
  );
}
