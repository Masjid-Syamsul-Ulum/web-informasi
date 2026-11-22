import { IconLocation, IconMosque } from "@/components/icons";
import { Pattern } from "@/components/ui/Pattern";

type PrayerTimesCardProps = {
  dateLabel: string;
  location: string;
  times: { name: string; time: string }[];
  next: string;
};

// Jadwal sholat dalam card beratap kubah. Waktu berikutnya disorot emas.
export function PrayerTimesCard({ dateLabel, location, times, next }: PrayerTimesCardProps) {
  const upcoming = times.find((t) => t.name === next);

  return (
    <div data-tone="green" className="relative overflow-hidden rounded-t-full rounded-b-card bg-brand-900 px-6 pt-20 pb-6 text-white sm:px-8">
      <Pattern variant="arches" fade="bottom" className="text-white/[0.08]" />
      <div className="relative text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-gold-400 text-brand-950 [--icon-accent:var(--color-white)]">
          <IconMosque className="size-6" />
        </span>
        <p className="mt-4 text-sm text-white/70">{dateLabel}</p>
        {upcoming && (
          <p className="mt-1 text-4xl font-extrabold tracking-tight">
            {upcoming.name} <span className="font-light text-gold-400">{upcoming.time}</span>
          </p>
        )}
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/70">
          <IconLocation className="size-4" />
          {location}
        </p>
      </div>
      <ul className="relative mt-8 flex flex-col gap-1.5">
        {times.map((t) => (
          <li
            key={t.name}
            className={`flex items-center justify-between rounded-2xl px-4 py-3 ${
              t.name === next ? "bg-gold-400 font-bold text-brand-950" : "bg-white/[0.06]"
            }`}
          >
            <span>{t.name}</span>
            <span className="font-mono tabular-nums">{t.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
