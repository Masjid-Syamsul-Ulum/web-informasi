import { IconArrowUpRight, type Icon } from "@/components/icons";

type ServiceCardProps = {
  icon: Icon;
  name: string;
  description: string;
  url?: string;
};

// Card layanan untuk app MSU di subdomain lain. Latar hijau naik dari bawah saat hover.
// Tanpa url, card tampil sebagai "Segera hadir" dan tidak bisa diklik.
export function ServiceCard({ icon: Icon, name, description, url }: ServiceCardProps) {
  const body = (
    <>
      {url && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-brand-900 transition-transform duration-500 ease-out group-hover/service:scale-y-100"
        />
      )}
      <div className="flex items-start justify-between">
        <span className="shape-window grid h-16 w-14 place-items-end justify-center bg-brand-100 pb-3 text-brand-900 transition-colors duration-500 group-hover/service:bg-gold-400 group-hover/service:text-brand-950 [--icon-accent:var(--color-brand-700)]">
          <Icon className="size-6" />
        </span>
        {url && (
          <IconArrowUpRight className="size-6 text-brand-900 transition-[color,translate] duration-300 group-hover/service:text-gold-400 motion-safe:group-hover/service:translate-x-0.5 motion-safe:group-hover/service:-translate-y-0.5" />
        )}
      </div>
      <div>
        <p className="text-2xl font-bold tracking-tight text-brand-900 transition-colors duration-500 group-hover/service:text-white">{name}</p>
        <p className="mt-2 text-ink/70 transition-colors duration-500 group-hover/service:text-white/75">{description}</p>
        <p className="mt-5 inline-flex rounded-full bg-cream px-3 py-1 font-mono text-xs text-brand-900 transition-colors duration-500 group-hover/service:bg-white/10 group-hover/service:text-gold-400">
          {url ? new URL(url).host : "Segera hadir"}
        </p>
      </div>
    </>
  );

  const classes = "relative isolate flex min-h-64 flex-col justify-between overflow-hidden rounded-card bg-white p-7 ring-1 ring-ink/[0.06]";

  if (!url) return <div className={`${classes} opacity-80`}>{body}</div>;

  return (
    <a href={url} className={`group/service ${classes} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400`}>
      {body}
    </a>
  );
}
