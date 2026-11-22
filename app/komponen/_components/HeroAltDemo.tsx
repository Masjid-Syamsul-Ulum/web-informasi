import Image from "next/image";
import { IconCalendar, IconLocation } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pattern } from "@/components/ui/Pattern";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WindowRow } from "@/components/ui/WindowRow";
import { Label } from "./Label";

// Hero alternatif: foto penuh dengan gradasi hijau, ditutup deret jendela ke section berikutnya.
export function HeroAltDemo() {
  return (
    <section data-tone="green" className="relative isolate overflow-hidden bg-brand-950 pt-24 pb-36 text-white sm:pt-32">
      <Image src="/images/msu-building.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover object-[70%_50%]" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-950 via-brand-950/85 to-brand-950/20" />
      <Pattern variant="arches" fade="right" className="-z-10 text-white/[0.06]" />
      <Container>
        <Label>Hero alternatif · foto penuh</Label>
        <SectionHeading
          title="Hidupkan masjid"
          titleLight="dari kampus."
          description="Foto penuh dengan gradasi hijau dari kiri. Cocok untuk halaman Tentang atau kampanye Ramadan."
        />
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="/tentang" variant="gold">
            Kenali MSU
          </Button>
          <Pill icon={IconLocation} tone="dark">
            Gate 4 Telkom University
          </Pill>
          <Pill icon={IconCalendar} tone="dark">
            Kabupaten Bandung
          </Pill>
        </div>
      </Container>
      <WindowRow className="absolute inset-x-0 bottom-0 text-white" />
    </section>
  );
}
