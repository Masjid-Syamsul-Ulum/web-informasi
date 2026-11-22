import { Container } from "./Container";
import { Pattern } from "./Pattern";

type SectionProps = {
  children: React.ReactNode;
  tone?: "white" | "cream" | "mint" | "green" | "gold";
  pattern?: "star" | "roster" | "arches";
  fade?: "none" | "bottom" | "right" | "center";
  id?: string;
};

const tones = {
  white: { bg: "bg-white", pattern: "text-brand-900/[0.05]" },
  cream: { bg: "bg-cream", pattern: "text-brand-900/[0.06]" },
  mint: { bg: "bg-brand-100", pattern: "text-brand-900/[0.07]" },
  green: { bg: "bg-brand-900 text-white", pattern: "text-white/[0.07]" },
  gold: { bg: "bg-gold-400 text-brand-950", pattern: "text-brand-950/[0.08]" },
};

export function Section({ children, tone = "white", pattern, fade = "none", id }: SectionProps) {
  return (
    <section id={id} data-tone={tone} className={`relative overflow-hidden py-20 sm:py-28 ${tones[tone].bg}`}>
      {pattern && <Pattern variant={pattern} fade={fade} className={tones[tone].pattern} />}
      <div className="relative">
        <Container>{children}</Container>
      </div>
    </section>
  );
}
