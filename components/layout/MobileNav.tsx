"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowUpRight, IconClose, IconMenu } from "@/components/icons";
import type { NavItem } from "@/content/types";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        onClick={() => setOpen(!open)}
        className="grid size-12 place-items-center rounded-full bg-brand-900 text-white transition-[scale] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
      >
        {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Menu utama"
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-[1.75rem] bg-white p-2 shadow-xl ring-1 shadow-brand-950/10 ring-ink/[0.06]"
        >
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold ${
                    item.highlight ? "mt-1 bg-gold-400 text-brand-950" : "text-brand-900 hover:bg-cream"
                  }`}
                >
                  {item.label}
                  <IconArrowUpRight className="size-5 opacity-60" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
