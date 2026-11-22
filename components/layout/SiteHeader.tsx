import Link from "next/link";
import type { NavItem } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

type SiteHeaderProps = {
  siteName: string;
  items: NavItem[];
};

export function SiteHeader({ siteName, items }: SiteHeaderProps) {
  return (
    <header className="relative border-b border-ink/10 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-extrabold tracking-tight text-brand-900">
            {siteName}
          </Link>
          <nav aria-label="Menu utama" className="hidden md:block">
            <ul className="flex gap-8">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-medium hover:text-brand-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <MobileNav items={items} />
        </div>
      </Container>
    </header>
  );
}
