import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";

type NewsCardProps = {
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  image: { src: string; alt: string };
  href: string;
  featured?: boolean;
};

const dateFormat = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

// Card kabar: gambar dengan tab kategori berbentuk jendela. featured membuatnya melebar.
export function NewsCard({ title, excerpt, category, date, image, href, featured = false }: NewsCardProps) {
  return (
    <Link
      href={href}
      className={`group/news grid gap-5 rounded-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 ${featured ? "md:grid-cols-[1.2fr_1fr] md:items-center md:gap-10" : ""}`}
    >
      <div className={`relative overflow-hidden rounded-card ${featured ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={featured ? "(min-width: 768px) 55vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover/news:scale-105"
        />
        <span className="shape-window absolute bottom-0 left-6 bg-cream px-5 pt-5 pb-2 text-sm font-semibold text-brand-900 in-data-[tone=mint]:bg-brand-100 in-data-[tone=white]:bg-white">
          {category}
        </span>
      </div>
      <div>
        <p className="text-sm text-ink/60">{dateFormat.format(new Date(date))}</p>
        <h3
          className={`mt-2 font-bold tracking-tight text-balance text-brand-900 transition-colors group-hover/news:text-brand-700 ${featured ? "text-3xl leading-tight sm:text-4xl" : "line-clamp-2 text-xl leading-snug"}`}
        >
          {title}
        </h3>
        {excerpt && <p className={`mt-3 text-ink/70 ${featured ? "text-lg" : "line-clamp-2"}`}>{excerpt}</p>}
        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-900">
          Baca kabar
          <IconArrowRight className="size-4 transition-transform duration-300 motion-safe:group-hover/news:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
