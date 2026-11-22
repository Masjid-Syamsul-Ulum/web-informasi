import { EventCard } from "@/components/cards/EventCard";
import { DonationCard } from "@/components/cards/DonationCard";
import { NewsCard } from "@/components/cards/NewsCard";
import { PrayerTimesCard } from "@/components/cards/PrayerTimesCard";
import { QuoteCard } from "@/components/cards/QuoteCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Steps } from "@/components/cards/Steps";
import { IconCommunity, IconKey, IconStar } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Label } from "./Label";

export function ContentCardsDemo() {
  return (
    <>
      <Section id="card" tone="cream" pattern="roster" fade="right">
        <Label>Card konten · Agenda dan jadwal sholat</Label>
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:items-end">
          <div>
            <SectionHeading title="Agenda" titleLight="pekan ini." description="EventCard menaruh tanggal di dalam jendela. Saat hover card terangkat dan jendela berubah emas." />
            <div className="mt-10 flex flex-col gap-4">
              <EventCard
                category="Tahsin"
                title="Kenali Bacaan Al-Qur'an"
                date="2026-11-20"
                time="18.15 – 21.00 WIB"
                location="Dorm Hall"
                href="/kabar"
              />
              <EventCard
                category="Subuh berjamaah"
                title="Gerakan Subuh Berjamaah"
                speaker="Dr. Eng. Muhammad Almaududi Pulungan"
                date="2026-10-25"
                time="03.40 – 06.00 WIB"
                location="Masjid TULT lt. 2"
                href="/kabar"
              />
            </div>
          </div>
          <PrayerTimesCard
            dateLabel="Ahad, 22 November 2026 · peraga"
            location="Bandung"
            next="Maghrib"
            times={[
              { name: "Subuh", time: "04.02" },
              { name: "Dzuhur", time: "11.39" },
              { name: "Ashar", time: "15.01" },
              { name: "Maghrib", time: "17.53" },
              { name: "Isya", time: "19.05" },
            ]}
          />
        </div>
      </Section>

      <Section tone="white">
        <Label>Card konten · Kabar</Label>
        <NewsCard
          featured
          category="Pengumuman"
          title="Ketua DKM Syamsul 'Ulum Telkom University masa khidmat 2026–2029"
          excerpt="Selamat menjalankan amanah kepengurusan. Contoh kabar utama dengan gambar lebar dan ringkasan."
          date="2026-09-03"
          image={{ src: "/images/msu-building.jpg", alt: "Gedung Masjid Syamsul Ulum" }}
          href="/kabar"
        />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <NewsCard category="Fasilitas" title="Kini tersedia dispenser air minum di Masjid Syamsul 'Ulum TULT" date="2026-09-04" image={{ src: "/images/msu-facade.jpg", alt: "Fasad gedung Syamsul Ulum" }} href="/kabar" />
          <NewsCard category="Rekrutmen" title="Open recruitment Badan Mentoring generasi 15" date="2026-09-09" image={{ src: "/images/msu-windows.jpg", alt: "Jendela gedung MSU" }} href="/kabar" />
          <NewsCard category="Kegiatan" title="Islamic Festival 2026: Beyond the Classroom" date="2026-09-18" image={{ src: "/images/msu-night.jpg", alt: "Masjid Syamsul Ulum di malam hari" }} href="/kabar" />
        </div>
      </Section>

      <Section tone="mint" pattern="arches" fade="bottom">
        <Label>Card konten · Layanan dan alur</Label>
        <SectionHeading title="Satu pintu" titleLight="ke semua layanan MSU." description="ServiceCard menautkan app di subdomain lain. App yang belum siap tampil sebagai Segera hadir." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <ServiceCard icon={IconKey} name="Peminjaman fasilitas" description="Ajukan peminjaman ruang dan perlengkapan masjid." url="https://syamsululum.site" />
          <ServiceCard icon={IconStar} name="PRADA" description="Pejuang Ramadan dan Idul Adha." />
          <ServiceCard icon={IconCommunity} name="Manajemen kader" description="Data dan perjalanan kader MSU." />
        </div>
        <div className="mt-20">
          <p className="mb-10 text-xl font-bold text-brand-900">Alur peminjaman fasilitas</p>
          <Steps
            steps={[
              { title: "Isi formulir", description: "Ajukan lewat website peminjaman." },
              { title: "Disetujui pengelola", description: "Pengelola mengecek ketersediaan." },
              { title: "Serah terima", description: "Pengurus menyerahkan fasilitas." },
              { title: "Pengembalian", description: "Fasilitas dikembalikan, selesai." },
            ]}
          />
        </div>
      </Section>

      <Section tone="white">
        <Label>Card konten · Infak dan kutipan</Label>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <DonationCard
            title="Infak operasional masjid"
            description="Contoh program infak dengan progres. Semua angka hanya peraga."
            collected={32450000}
            target={50000000}
            donors={128}
            href="/infak"
          />
          <QuoteCard
            arabic="صَلاَةُ الْجَمَاعَةِ أَفْضَلُ مِنْ صَلاَةِ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً"
            translation="Shalat berjamaah itu lebih utama daripada shalat sendirian dengan 27 derajat."
            source="HR. Bukhari dan Muslim"
          />
        </div>
      </Section>

      <Section tone="cream">
        <div className="flex flex-col items-center gap-10 text-center">
          <p className="text-sm font-semibold text-brand-700">Bersama wajihah dan mitra</p>
          <LogoStrip
            logos={[
              { src: "/images/logos/telkom-university.png", alt: "Telkom University", width: 512, height: 227 },
              { src: "/images/logos/lazissu.png", alt: "LAZISSU", width: 404, height: 379 },
              { src: "/images/logos/al-fath.png", alt: "LDK Al-Fath Telkom University", width: 290, height: 409 },
            ]}
          />
          <Button href="/tentang" variant="outline">
            Kenali wajihah MSU
          </Button>
        </div>
      </Section>
    </>
  );
}
