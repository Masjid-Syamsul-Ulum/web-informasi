import { Amiri } from "next/font/google";
import { ArchRings } from "@/components/ui/ArchRings";

const amiri = Amiri({ weight: ["400", "700"], subsets: ["arabic"] });

type QuoteCardProps = {
  arabic: string;
  translation: string;
  source: string;
};

// Hadis atau ayat pilihan. Teks Arab memakai Amiri, dengan garis jendela bertingkat di belakang.
export function QuoteCard({ arabic, translation, source }: QuoteCardProps) {
  return (
    <figure data-tone="gold" className="relative overflow-hidden rounded-card bg-gold-400 px-7 py-12 text-center text-brand-950 sm:px-14">
      <ArchRings className="absolute -bottom-6 left-1/2 h-[120%] -translate-x-1/2 text-brand-950/15" />
      <blockquote className="relative">
        <p lang="ar" dir="rtl" className={`${amiri.className} text-3xl leading-[1.9] font-bold sm:text-4xl`}>
          {arabic}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-lg">&ldquo;{translation}&rdquo;</p>
      </blockquote>
      <figcaption className="relative mt-5 text-sm font-semibold">{source}</figcaption>
    </figure>
  );
}
