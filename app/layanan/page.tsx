import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Layanan",
};

export default function ServicesPage() {
  return (
    <Section>
      <SectionHeading level={1} title="Layanan" description="Halaman ini sedang dibuat." />
    </Section>
  );
}
