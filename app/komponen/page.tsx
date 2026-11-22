import type { Metadata } from "next";
import Image from "next/image";
import * as icons from "@/components/icons";
import {
  IconCalendar,
  IconClock,
  IconCommunity,
  IconKey,
  IconLocation,
  IconMosque,
  IconQuran,
  IconStar,
} from "@/components/icons";
import { ArchCard } from "@/components/ui/ArchCard";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { BuildingLine } from "@/components/ui/BuildingLine";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { InfoRow } from "@/components/ui/InfoRow";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { TextLink } from "@/components/ui/TextLink";
import { WindowRow } from "@/components/ui/WindowRow";

// Katalog DNA desain untuk review tampilan. Semua teks dan angka di halaman ini hanya peraga.
export const metadata: Metadata = {
  title: "Komponen",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "brand-900", hex: "#005124", use: "Identitas, teks judul, latar section gelap", className: "bg-brand-900 text-white sm:col-span-2 sm:row-span-2" },
  { name: "gold-400", hex: "#F2B441", use: "Sorotan, tombol utama di latar gelap", className: "bg-gold-400 text-brand-950 sm:col-span-2" },
  { name: "brand-700", hex: "#0F7C3F", use: "Aksen hijau, bagian judul tipis", className: "bg-brand-700 text-white" },
  { name: "brand-950", hex: "#00381A", use: "Hover dan kedalaman", className: "bg-brand-950 text-white" },
  { name: "cream", hex: "#F8F4EC", use: "Latar halaman", className: "bg-cream text-ink ring-1 ring-ink/10" },
  { name: "brand-100", hex: "#E4F1E8", use: "Latar lembut", className: "bg-brand-100 text-brand-900" },
  { name: "surface", hex: "#F4F4F4", use: "Latar netral", className: "bg-surface text-ink" },
  { name: "ink", hex: "#202020", use: "Teks isi", className: "bg-ink text-white" },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-8 flex items-center gap-2 text-sm font-semibold text-brand-700 in-data-[tone=green]:text-gold-400">
      <IconStar className="size-4" />
      {children}
    </p>
  );
}

export default function ComponentsPage() {
  return (
    <>
      <Section tone="green" pattern>
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
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
              <Button href="#komponen" variant="gold">
                Lihat komponen
              </Button>
              <Button href="#komposisi" variant="light">
                Contoh komposisi
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <ArchFrame accent className="aspect-[4/5]">
              <Image src="/images/msu-windows.jpg" alt="Jendela runcing gedung Masjid Syamsul Ulum" fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            </ArchFrame>
            <div className="absolute top-[38%] left-0 sm:-left-8">
              <Pill icon={IconCalendar}>Kajian rutin</Pill>
            </div>
            <div className="absolute right-0 bottom-14 sm:-right-6">
              <Pill icon={IconCommunity}>Kader &amp; mentoring</Pill>
            </div>
          </div>
        </div>
      </Section>

      <Section id="komponen" tone="white">
        <Label>Warna</Label>
        <SectionHeading title="Hijau identitas" titleLight="emas sebagai sorotan." description="Hijau berasal dari poster DKMSU. Emas dipakai seperlunya untuk hal yang ingin ditonjolkan. Jangan memakai emas untuk teks di atas putih." />
        <div className="mt-12 grid auto-rows-[9rem] gap-4 sm:grid-cols-4">
          {colors.map((color) => (
            <div key={color.name} className={`flex flex-col justify-between rounded-3xl p-5 ${color.className}`}>
              <p className="font-bold">{color.name}</p>
              <div className="text-sm">
                <p className="font-mono opacity-80">{color.hex}</p>
                <p className="opacity-80">{color.use}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <Label>Tipografi</Label>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <SectionHeading title="Plus Jakarta Sans" titleLight="tebal bertemu tipis." />
          <div className="flex flex-col gap-6 border-l border-ink/10 pl-8">
            <p className="text-6xl font-extrabold tracking-[-0.03em] text-brand-900">Aa 800</p>
            <p className="text-3xl font-light text-brand-700">Judul tipis 300 sebagai pasangan</p>
            <p className="text-xl font-bold text-brand-900">Subjudul 700 untuk judul card</p>
            <p className="max-w-md text-lg leading-relaxed text-ink/75">
              Teks isi 400 berukuran 18 px dengan jarak baris lega. Tulis pendek; biarkan gambar dan bentuk yang bercerita.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <Label>Bentuk</Label>
        <SectionHeading title="Diambil dari" titleLight="gedung MSU sendiri." description="Atap runcing jendela gedung, kubah, pola bintang delapan, dan garis fasad menjadi bahasa visual yang tidak dimiliki masjid lain." />
        <div className="mt-14 grid gap-6 md:grid-cols-6">
          <div className="md:col-span-2">
            <ArchFrame className="aspect-[3/4]">
              <Image src="/images/msu-facade.jpg" alt="Fasad gedung Syamsul Ulum" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </ArchFrame>
            <p className="mt-4 font-semibold text-brand-900">Jendela <span className="font-normal text-ink/60">shape-window</span></p>
          </div>
          <div className="md:col-span-2 md:mt-16">
            <ArchFrame shape="dome" accent className="aspect-[3/4]">
              <Image src="/images/msu-building.jpg" alt="Gedung Masjid Syamsul Ulum di antara pepohonan" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-[62%_50%]" />
            </ArchFrame>
            <p className="mt-4 font-semibold text-brand-900">Kubah + aksen <span className="font-normal text-ink/60">ArchFrame accent</span></p>
          </div>
          <div className="flex flex-col gap-6 md:col-span-2">
            <Card tone="green" pattern className="min-h-56 flex-1">
              <p className="font-semibold">Pola bintang delapan</p>
              <p className="mt-1 text-sm text-white/70">Pattern, untuk latar section dan card</p>
            </Card>
            <div className="rounded-card bg-cream p-6">
              <p className="font-semibold text-brand-900">Deret jendela</p>
              <p className="mt-1 text-sm text-ink/60">WindowRow, tepi atas section</p>
              <WindowRow className="mt-6 text-brand-700" />
            </div>
          </div>
          <div className="rounded-card bg-cream px-6 pt-8 md:col-span-6">
            <p className="font-semibold text-brand-900">Garis gedung <span className="font-normal text-ink/60">BuildingLine</span></p>
            <BuildingLine className="mx-auto mt-6 max-w-3xl text-brand-900/70" />
          </div>
        </div>
      </Section>

      <Section tone="green" pattern>
        <Label>Ikon</Label>
        <SectionHeading title="Ikon sendiri" titleLight="dengan aksen emas." description="Garis 1,75 dengan bagian aksen. Beberapa ikon memuat bentuk jendela MSU. Aksen bisa diganti lewat variabel --icon-accent." />
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {Object.entries(icons).map(([name, Icon]) => (
            <div key={name} className="flex flex-col items-center gap-3 rounded-3xl bg-white/[0.06] px-3 py-6 ring-1 ring-white/10">
              <Icon className="size-8" />
              <p className="text-center text-xs text-white/70">{name.replace("Icon", "")}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <Label>Tombol dan link</Label>
        <SectionHeading title="Arahkan kursor" titleLight="rasakan responnya." description="Panah berganti saat hover, tombol mengecil sedikit saat ditekan, dan cincin emas muncul saat fokus keyboard." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card tone="white">
            <div className="flex flex-wrap gap-3">
              <Button href="/infak">Primary</Button>
              <Button href="/infak" variant="outline">
                Outline
              </Button>
              <Button href="/infak" variant="gold">
                Gold
              </Button>
              <Button arrow={false} variant="outline">
                Tanpa panah
              </Button>
            </div>
            <p className="mt-8 text-ink/70">
              Link teks: <TextLink href="/tentang">Lihat sejarah masjid</TextLink>
            </p>
          </Card>
          <Card tone="green" pattern>
            <div className="flex flex-wrap gap-3">
              <Button href="/infak" variant="gold">
                Gold di latar gelap
              </Button>
              <Button href="/infak" variant="light">
                Light
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill icon={IconClock} tone="dark">
                Pill gelap
              </Pill>
              <Pill icon={IconLocation}>Pill terang</Pill>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="komposisi" tone="white">
        <Label>Komposisi</Label>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading title="Deretan card" titleLight="yang tidak kaku." description="StaggerGrid menurunkan item genap. Campur card bergambar dengan card warna supaya ritmenya hidup." />
          <Button href="/program" variant="outline" className="self-start lg:self-auto">
            Semua program
          </Button>
        </div>
        <div className="mt-16">
          <StaggerGrid>
            <ArchCard href="/program" image={{ src: "/images/msu-windows.jpg", alt: "Jendela gedung MSU" }} title="Kajian rutin" description="Senin dan Kamis ba'da Maghrib." badge={{ icon: IconCalendar, label: "Mingguan" }} />
            <ArchCard href="/program" shape="dome" image={{ src: "/images/msu-facade.jpg", alt: "Fasad gedung Syamsul Ulum" }} title="Tahsin Al-Qur'an" description="Perbaiki bacaan bersama pengajar." badge={{ icon: IconQuran, label: "Terbuka" }} />
            <Card tone="green" pattern className="aspect-[3/4]">
              <div className="flex h-full flex-col justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-gold-400 text-brand-950 [--icon-accent:var(--color-white)]">
                  <IconCommunity className="size-7" />
                </span>
                <div>
                  <p className="text-2xl font-bold">Kader &amp; mentoring</p>
                  <p className="mt-2 text-white/70">Tumbuh bersama keluarga besar Syamsul &apos;Ulum.</p>
                </div>
              </div>
            </Card>
            <ArchCard href="/layanan" image={{ src: "/images/msu-building.jpg", alt: "Gedung Masjid Syamsul Ulum" }} title="Peminjaman fasilitas" description="Ajukan lewat aplikasi peminjaman." badge={{ icon: IconKey, label: "Online" }} />
          </StaggerGrid>
        </div>
      </Section>

      <Section tone="cream" pattern>
        <SectionHeading title="Bento untuk" titleLight="cerita singkat." description="Satu foto besar, satu angka, dan satu card warna sudah cukup. Hindari empat card berukuran sama." />
        <div className="mt-14 grid gap-4 md:grid-cols-6 md:grid-rows-2">
          <div className="relative min-h-80 overflow-hidden rounded-card md:col-span-3 md:row-span-2">
            <Image src="/images/msu-building.jpg" alt="Gedung Masjid Syamsul Ulum" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-brand-950/85 via-brand-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <Pill icon={IconMosque} tone="dark">
                Gate 4 Telkom University
              </Pill>
              <p className="mt-4 max-w-sm text-3xl leading-tight font-extrabold tracking-tight">Ruang ibadah dan tumbuh bersama.</p>
            </div>
          </div>
          <Card tone="gold" className="md:col-span-2">
            <p className="text-6xl font-extrabold tracking-[-0.04em]">2026–29</p>
            <p className="mt-3 font-semibold">Masa khidmat DKM</p>
          </Card>
          <Card tone="white" className="md:col-span-1">
            <IconQuran className="size-9 text-brand-900" />
            <p className="mt-6 font-bold text-brand-900">Tahsin</p>
          </Card>
          <Card tone="green" pattern className="md:col-span-3">
            <div className="flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div className="flex flex-col gap-3">
                <InfoRow icon={IconCalendar}>Senin dan Kamis</InfoRow>
                <InfoRow icon={IconClock}>Ba&apos;da Maghrib</InfoRow>
              </div>
              <Button href="/kabar" variant="gold">
                Jadwal
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
