type ArchFrameProps = {
  children: React.ReactNode;
  shape?: "window" | "dome";
  accent?: boolean;
  className?: string;
};

const shapes = {
  window: "shape-window",
  dome: "rounded-t-full",
};

// Bingkai gambar berbentuk jendela MSU (atap runcing) atau kubah (setengah lingkaran).
// accent menambah bayangan bentuk yang sama berwarna emas di belakangnya.
export function ArchFrame({ children, shape = "window", accent = false, className = "" }: ArchFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {accent && <div aria-hidden className={`absolute inset-0 translate-x-3 -translate-y-3 bg-gold-400 ${shapes[shape]}`} />}
      <div className={`relative h-full overflow-hidden bg-brand-100 ${shapes[shape]}`}>{children}</div>
    </div>
  );
}
