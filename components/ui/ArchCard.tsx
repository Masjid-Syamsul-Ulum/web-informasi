import Image from "next/image";
import Link from "next/link";
import type { Icon } from "@/components/icons";
import { ArchFrame } from "./ArchFrame";
import { Pill } from "./Pill";

type ArchCardProps = {
  image: { src: string; alt: string };
  title: string;
  description?: string;
  href: string;
  badge?: { icon: Icon; label: string };
  shape?: "window" | "dome";
};

export function ArchCard({ image, title, description, href, badge, shape = "window" }: ArchCardProps) {
  return (
    <Link href={href} className="group/card block rounded-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400">
      <div className="relative">
        <ArchFrame shape={shape} className="aspect-[4/5] sm:aspect-[3/4]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover/card:scale-105"
          />
        </ArchFrame>
        {badge && (
          <div className="absolute -bottom-4 left-4">
            <Pill icon={badge.icon}>{badge.label}</Pill>
          </div>
        )}
      </div>
      <div className="mt-8 px-1">
        <h3 className="text-xl font-bold tracking-tight text-brand-900 transition-colors group-hover/card:text-brand-700">
          {title}
        </h3>
        {description && <p className="mt-2 text-ink/70">{description}</p>}
      </div>
    </Link>
  );
}
