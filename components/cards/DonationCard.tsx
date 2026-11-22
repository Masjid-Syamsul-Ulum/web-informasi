import { IconDonation } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Pattern } from "@/components/ui/Pattern";

type DonationCardProps = {
  title: string;
  description: string;
  collected: number;
  target: number;
  donors: number;
  href: string;
};

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

// Program infak dengan progres. Penanda progres berbentuk jendela kecil.
export function DonationCard({ title, description, collected, target, donors, href }: DonationCardProps) {
  const percent = Math.min(100, Math.round((collected / target) * 100));

  return (
    <div data-tone="cream" className="relative flex flex-col overflow-hidden rounded-card bg-cream p-7 ring-1 ring-ink/[0.06] sm:p-8">
      <Pattern variant="roster" fade="right" className="text-brand-900/[0.07]" />
      <div className="relative flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-900 text-white">
          <IconDonation className="size-6" />
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-900">{donors} donatur</span>
      </div>
      <h3 className="relative mt-6 text-2xl leading-snug font-bold tracking-tight text-brand-900">{title}</h3>
      <p className="relative mt-2 text-ink/70">{description}</p>
      <div className="relative mt-8">
        <div className="relative h-3 rounded-full bg-brand-900/10">
          <div className="h-full rounded-full bg-brand-900" style={{ width: `${percent}%` }} />
          <span
            className="shape-window absolute -top-5 h-8 w-6 -translate-x-1/2 bg-gold-400"
            style={{ left: `${percent}%` }}
          />
        </div>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-ink/60">Terkumpul</p>
            <p className="text-xl font-extrabold text-brand-900">{rupiah.format(collected)}</p>
          </div>
          <p className="text-right text-sm text-ink/60">
            {percent}% dari
            <br />
            {rupiah.format(target)}
          </p>
        </div>
      </div>
      <div className="relative mt-8">
        <Button href={href}>Ikut berinfak</Button>
      </div>
    </div>
  );
}
