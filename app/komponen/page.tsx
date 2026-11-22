import type { Metadata } from "next";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { InfoRow } from "@/components/ui/InfoRow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Katalog komponen dasar untuk review tampilan. Contoh isi di sini hanya peraga.
export const metadata: Metadata = {
  title: "Komponen",
  robots: { index: false, follow: false },
};

function Example({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink/10 py-10">
      <p className="mb-6 text-sm font-semibold tracking-wide text-ink/60 uppercase">{name}</p>
      {children}
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <Section>
      <SectionHeading level={1} title="Komponen" description="Katalog komponen dasar web MSU." />

      <div className="mt-12">
        <Example name="SectionHeading">
          <div className="flex flex-col gap-10">
            <SectionHeading title="Kajian Rutin" />
            <SectionHeading
              title="Kenali Bacaan"
              titleLight="Al-Qur'an"
              description="Mulai dari mengenali kemampuan, sampai menemukan kesempatan untuk memperbaiki bacaan."
            />
          </div>
        </Example>

        <Example name="Button">
          <div className="flex flex-wrap gap-4">
            <Button href="/infak">Primary</Button>
            <Button href="/infak" variant="secondary">
              Secondary
            </Button>
          </div>
        </Example>

        <Example name="InfoRow">
          <div className="flex flex-col gap-4">
            <InfoRow icon={Calendar}>20 Nov – 3 Des 2026</InfoRow>
            <InfoRow icon={Clock}>18.15 – 21.00 WIB</InfoRow>
            <InfoRow icon={MapPin}>Dorm Hall</InfoRow>
          </div>
        </Example>

        <Example name="Card">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <p className="text-xl font-bold text-brand-900">Kenali Bacaan Al-Qur&apos;an</p>
              <div className="mt-4 flex flex-col gap-3">
                <InfoRow icon={Calendar}>20 Nov – 3 Des 2026</InfoRow>
                <InfoRow icon={MapPin}>Dorm Hall</InfoRow>
              </div>
              <div className="mt-6">
                <Button href="/kabar">Lihat detail</Button>
              </div>
            </Card>
            <Card>
              <p className="text-xl font-bold text-brand-900">Card sederhana</p>
              <p className="mt-2 text-ink/80">Card hanya mengatur latar, sudut, dan jarak. Isinya bebas.</p>
            </Card>
          </div>
        </Example>
      </div>
    </Section>
  );
}
