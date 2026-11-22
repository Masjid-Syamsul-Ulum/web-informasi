import { IconStar } from "@/components/icons";

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-8 flex items-center gap-2 text-sm font-semibold text-brand-700 in-data-[tone=green]:text-gold-400 in-data-[tone=gold]:text-brand-950">
      <IconStar className="size-4" />
      {children}
    </p>
  );
}
