import Image from "next/image";

type LogoStripProps = {
  logos: { src: string; alt: string; width: number; height: number }[];
};

// Deretan logo wajihah atau mitra. Abu-abu, berwarna saat hover.
export function LogoStrip({ logos }: LogoStripProps) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      {logos.map((logo) => (
        <li key={logo.src}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-14 w-auto opacity-70 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  );
}
