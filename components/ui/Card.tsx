import { Pattern } from "./Pattern";

type CardProps = {
  children: React.ReactNode;
  tone?: "white" | "cream" | "mint" | "green" | "gold";
  pattern?: "star" | "roster" | "arches";
  fade?: "none" | "bottom" | "right" | "center";
  className?: string;
};

const tones = {
  white: { bg: "bg-white ring-1 ring-ink/[0.06]", pattern: "text-brand-900/[0.05]" },
  cream: { bg: "bg-cream", pattern: "text-brand-900/[0.06]" },
  mint: { bg: "bg-brand-100", pattern: "text-brand-900/[0.07]" },
  green: { bg: "bg-brand-900 text-white", pattern: "text-white/[0.08]" },
  gold: { bg: "bg-gold-400 text-brand-950", pattern: "text-brand-950/[0.09]" },
};

export function Card({ children, tone = "white", pattern, fade = "none", className = "" }: CardProps) {
  return (
    <div data-tone={tone} className={`relative overflow-hidden rounded-card p-7 sm:p-8 ${tones[tone].bg} ${className}`}>
      {pattern && <Pattern variant={pattern} fade={fade} className={tones[tone].pattern} />}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
