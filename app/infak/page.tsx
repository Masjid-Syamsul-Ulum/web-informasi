import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Infak",
};

export default function DonationPage() {
  return (
    <Section tone="cream" pattern="star">
      <SectionHeading level={1} title="Infak" description="Halaman ini sedang dibuat." />
    </Section>
  );
}
