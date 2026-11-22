import Image from "next/image";
import { IconCalendar, IconMosque, IconStar } from "@/components/icons";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { ArchRings } from "@/components/ui/ArchRings";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HeroDemo() {
  return (
    <Section tone="green" pattern="star" fade="center">
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Pill icon={IconStar} tone="dark">
            DNA desain web MSU
          </Pill>
          <div className="mt-8">
            <SectionHeading
              level={1}
              title="Rumah bersama"
              titleLight="sivitas Telkom University."
              description="Warna, bentuk, ikon, dan komponen yang dipakai semua halaman. Teks dan angka di halaman ini hanya peraga."
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#latar" variant="gold">
              Lihat komponen
            </Button>
            <Button href="#card" variant="light">
              Card konten
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <ArchRings className="absolute -top-16 -left-24 h-[calc(100%+6rem)] w-[calc(100%+12rem)] text-gold-400/40" />
          <ArchFrame shape="dome" accent className="aspect-[4/5]">
            <Image
              src="/images/msu-night.jpg"
              alt="Masjid Syamsul Ulum di malam hari dengan pantulan di genangan air"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </ArchFrame>
          <div className="absolute top-[30%] -right-2 sm:-right-10">
            <Pill icon={IconCalendar}>Kajian rutin</Pill>
          </div>
          <div className="absolute -bottom-6 left-0 flex items-center gap-4 rounded-3xl bg-white py-3 pr-6 pl-3 text-ink shadow-xl shadow-brand-950/20 sm:-left-10">
            <span className="shape-window grid h-14 w-12 place-items-end justify-center bg-brand-900 pb-2.5 text-white">
              <IconMosque className="size-5" />
            </span>
            <div>
              <p className="text-xs text-ink/60">Sholat berikutnya (peraga)</p>
              <p className="text-lg font-extrabold text-brand-900">
                Maghrib <span className="font-light text-brand-700">17.53</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
