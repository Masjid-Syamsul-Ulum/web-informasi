// Deretan atap jendela MSU sebagai tepi atas section. Warna mengikuti text-* pada className.
export function WindowRow({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`mask-window-row h-6 w-full bg-current ${className}`} />;
}
