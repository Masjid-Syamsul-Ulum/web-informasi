import type { LucideIcon } from "lucide-react";

type InfoRowProps = {
  icon: LucideIcon;
  children: React.ReactNode;
};

export function InfoRow({ icon: Icon, children }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-900 text-white">
        <Icon aria-hidden className="size-5" />
      </span>
      <div className="pt-2 leading-snug">{children}</div>
    </div>
  );
}
