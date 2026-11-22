import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <Section tone="cream" pattern="star">
      <SectionHeading level={1} title={site.name} description="Halaman ini sedang dibuat." />
    </Section>
  );
}
