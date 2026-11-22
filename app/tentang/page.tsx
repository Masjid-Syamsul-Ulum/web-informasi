import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Tentang",
};

export default function AboutPage() {
  return (
    <Section tone="cream" pattern>
      <SectionHeading level={1} title="Tentang" description="Halaman ini sedang dibuat." />
    </Section>
  );
}
