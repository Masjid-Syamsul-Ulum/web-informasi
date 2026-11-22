// Ilustrasi garis gedung MSU dari Figma. Warna mengikuti text-* pada className.
export function BuildingLine({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`mask-building aspect-[2632/1394] w-full bg-current ${className}`} />;
}
