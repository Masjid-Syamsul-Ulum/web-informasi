import Image from "next/image";
import Link from "next/link";
import type { NavItem } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

type SiteHeaderProps = {
  siteName: string;
  items: NavItem[];
};

export function SiteHeader({ siteName, items }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full bg-white/90 pr-2 pl-5 shadow-lg ring-1 shadow-brand-950/5 ring-ink/[0.06] backdrop-blur-md">
        <Link href="/" className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400">
          <Image src="/images/logo-syamsul-ulum.png" alt={siteName} width={445} height={272} priority className="h-10 w-auto" />
        </Link>
        <nav aria-label="Menu utama" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                {item.highlight ? (
                  <Button href={item.href} variant="gold" className="ml-2">
                    {item.label}
                  </Button>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:bg-cream hover:text-brand-900 focus-visible:outline-2 focus-visible:outline-gold-400"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav items={items} />
      </div>
    </header>
  );
}
