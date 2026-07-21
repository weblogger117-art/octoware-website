import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-6 z-50">
    <Container>

        <div
            className="
                flex
                h-20
                items-center
                justify-between
                rounded-xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_8px_24px_rgba(15,23,42,0.08)]
                px-8
            "
        >

            Logo

            Navigation

        </div>

    </Container>
</header>
  );
}
