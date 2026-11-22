import type { Icon } from "@/components/icons";

type PillProps = {
  icon: Icon;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

const tones = {
  light: "bg-white text-ink shadow-lg shadow-brand-950/10 ring-1 ring-ink/5",
  dark: "bg-brand-950/60 text-white ring-1 ring-white/15",
};

export function Pill({ icon: Icon, children, tone = "light" }: PillProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-sm font-semibold ${tones[tone]}`}>
      <span className="grid size-8 place-items-center rounded-full bg-gold-400 text-brand-950 [--icon-accent:var(--color-white)]">
        <Icon className="size-4" />
      </span>
      {children}
    </span>
  );
}
