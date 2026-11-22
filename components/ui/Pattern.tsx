// Pola bintang delapan sebagai latar. Warna dan transparansi diatur lewat className (text-*).
export function Pattern({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`mask-pattern pointer-events-none absolute inset-0 bg-current ${className}`} />;
}
