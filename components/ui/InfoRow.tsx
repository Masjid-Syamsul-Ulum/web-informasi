import type { Icon } from "@/components/icons";

type InfoRowProps = {
  icon: Icon;
  children: React.ReactNode;
};

export function InfoRow({ icon: Icon, children }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-900 text-white in-data-[tone=green]:bg-white/10 in-data-[tone=gold]:bg-brand-900">
        <Icon className="size-5" />
      </span>
      <div className="pt-2 leading-snug">{children}</div>
    </div>
  );
}
