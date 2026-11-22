import { Pattern } from "./Pattern";

type CardProps = {
  children: React.ReactNode;
  tone?: "white" | "cream" | "green" | "gold";
  pattern?: boolean;
  className?: string;
};

const tones = {
  white: "bg-white ring-1 ring-ink/[0.06]",
  cream: "bg-cream",
  green: "bg-brand-900 text-white",
  gold: "bg-gold-400 text-brand-950",
};

export function Card({ children, tone = "white", pattern = false, className = "" }: CardProps) {
  return (
    <div data-tone={tone} className={`relative overflow-hidden rounded-card p-7 sm:p-8 ${tones[tone]} ${className}`}>
      {pattern && <Pattern className={tone === "white" || tone === "cream" ? "text-brand-900/[0.06]" : "text-current opacity-[0.09]"} />}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
