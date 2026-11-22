import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Kabar",
};

export default function NewsPage() {
  return (
    <Section>
      <SectionHeading level={1} title="Kabar" description="Halaman ini sedang dibuat." />
    </Section>
  );
}
