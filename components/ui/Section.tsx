import { Container } from "./Container";
import { Pattern } from "./Pattern";

type SectionProps = {
  children: React.ReactNode;
  tone?: "white" | "cream" | "green";
  pattern?: boolean;
  id?: string;
};

const tones = {
  white: "bg-white",
  cream: "bg-cream",
  green: "bg-brand-900 text-white",
};

export function Section({ children, tone = "white", pattern = false, id }: SectionProps) {
  return (
    <section id={id} data-tone={tone} className={`relative overflow-hidden py-20 sm:py-28 ${tones[tone]}`}>
      {pattern && <Pattern className={tone === "green" ? "text-white/[0.07]" : "text-brand-900/[0.06]"} />}
      <div className="relative">
        <Container>{children}</Container>
      </div>
    </section>
  );
}
