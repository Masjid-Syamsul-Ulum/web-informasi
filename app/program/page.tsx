import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Program",
};

export default function ProgramPage() {
  return (
    <Section tone="cream" pattern="star">
      <SectionHeading level={1} title="Program" description="Halaman ini sedang dibuat." />
    </Section>
  );
}
