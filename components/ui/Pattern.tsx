type PatternProps = {
  variant?: "star" | "roster" | "arches";
  fade?: "none" | "bottom" | "right" | "center";
  className?: string;
};

const patterns = {
  star: { image: "url(/shapes/pattern-star.svg)", size: "72px" },
  roster: { image: "url(/shapes/pattern-roster.svg)", size: "40px" },
  arches: { image: "url(/shapes/pattern-arches.svg)", size: "34px 48px" },
};

const fades = {
  none: undefined,
  bottom: "linear-gradient(#000 0%, transparent 85%)",
  right: "linear-gradient(to left, #000 0%, transparent 70%)",
  center: "radial-gradient(circle at 50% 40%, #000 0%, transparent 70%)",
};

// Latar berpola. Warna dan transparansi diatur lewat className (text-*).
export function Pattern({ variant = "star", fade = "none", className = "" }: PatternProps) {
  const style = {
    "--pattern": patterns[variant].image,
    "--pattern-size": patterns[variant].size,
    "--pattern-fade": fades[fade],
  } as React.CSSProperties;

  return <div aria-hidden style={style} className={`mask-pattern pointer-events-none absolute inset-0 bg-current ${className}`} />;
}
