import Link from "next/link";
import { IconArrowUpRight, IconClock, IconLocation } from "@/components/icons";

type EventCardProps = {
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  speaker?: string;
  href: string;
};

const day = new Intl.DateTimeFormat("id-ID", { day: "numeric", timeZone: "Asia/Jakarta" });
const month = new Intl.DateTimeFormat("id-ID", { month: "short", timeZone: "Asia/Jakarta" });
const weekday = new Intl.DateTimeFormat("id-ID", { weekday: "long", timeZone: "Asia/Jakarta" });

// Card agenda: tanggal di dalam bingkai jendela, detail di kanan.
export function EventCard({ title, category, date, time, location, speaker, href }: EventCardProps) {
  const d = new Date(date);

  return (
    <Link
      href={href}
      className="group/event relative flex gap-5 rounded-card bg-white p-4 pr-6 ring-1 ring-ink/[0.06] transition-[translate,box-shadow] duration-300 ease-out hover:shadow-xl hover:shadow-brand-950/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 motion-safe:hover:-translate-y-1 sm:p-5 sm:pr-8"
    >
      <div className="shape-window flex h-28 w-20 shrink-0 flex-col items-center justify-end self-center bg-brand-900 pb-4 text-white transition-colors duration-300 group-hover/event:bg-gold-400 group-hover/event:text-brand-950 sm:h-32 sm:w-24">
        <span className="text-4xl leading-none font-extrabold tracking-tight">{day.format(d)}</span>
        <span className="mt-1 text-sm font-semibold uppercase">{month.format(d)}</span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
        <p className="text-sm font-semibold text-brand-700">
          {category} · <span className="font-normal text-ink/60 capitalize">{weekday.format(d)}</span>
        </p>
        <h3 className="mt-1.5 text-xl leading-snug font-bold tracking-tight text-brand-900">{title}</h3>
        {speaker && <p className="mt-1 text-ink/70">{speaker}</p>}
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/70">
          <span className="flex items-center gap-1.5">
            <IconClock className="size-4 text-brand-900" />
            {time}
          </span>
          <span className="flex items-center gap-1.5">
            <IconLocation className="size-4 text-brand-900" />
            {location}
          </span>
        </div>
      </div>
      <span className="absolute top-5 right-5 hidden size-9 place-items-center rounded-full bg-cream text-brand-900 transition-[rotate,background-color] duration-300 group-hover/event:rotate-45 group-hover/event:bg-gold-400 sm:grid">
        <IconArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}
