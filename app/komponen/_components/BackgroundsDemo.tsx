import { ArchRings } from "@/components/ui/ArchRings";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Label } from "./Label";

function Caption({ title, code }: { title: string; code: string }) {
  return (
    <div className="flex h-full flex-col justify-end">
      <p className="font-bold">{title}</p>
      <p className="mt-1 font-mono text-xs opacity-70">{code}</p>
    </div>
  );
}

export function BackgroundsDemo() {
  return (
    <Section id="latar" tone="white">
      <Label>Latar</Label>
      <SectionHeading
        title="Satu halaman"
        titleLight="banyak suasana."
        description="Tiga pola, lima nada warna, dan efek memudar. Ganti kombinasinya antar section supaya halaman tidak terasa sama terus."
      />
      <div className="mt-12 grid auto-rows-[11rem] gap-4 md:grid-cols-6">
        <Card tone="green" pattern="star" className="md:col-span-3 md:row-span-2">
          <Caption title="Bintang delapan" code='pattern="star"' />
        </Card>
        <Card tone="cream" pattern="roster" className="md:col-span-3">
          <Caption title="Roster, dari dinding berlubang gedung MSU" code='pattern="roster"' />
        </Card>
        <Card tone="mint" pattern="arches" className="md:col-span-2">
          <Caption title="Deret jendela" code='pattern="arches"' />
        </Card>
        <Card tone="gold" pattern="star" fade="center" className="text-brand-950 md:col-span-1">
          <Caption title="Emas" code='fade="center"' />
        </Card>
        <Card tone="green" pattern="roster" fade="bottom" className="md:col-span-2">
          <Caption title="Pudar ke bawah" code='fade="bottom"' />
        </Card>
        <Card tone="cream" pattern="arches" fade="right" className="md:col-span-2">
          <Caption title="Pudar ke kiri" code='fade="right"' />
        </Card>
        <div className="relative overflow-hidden rounded-card bg-brand-100 p-7 md:col-span-2">
          <ArchRings className="absolute -right-6 -bottom-10 h-[130%] text-brand-900/25" />
          <div className="relative h-full text-brand-900">
            <Caption title="Garis jendela bertingkat" code="<ArchRings />" />
          </div>
        </div>
      </div>
    </Section>
  );
}
