// Garis jendela bertingkat sebagai dekorasi latar. Warna mengikuti text-* pada className.
export function ArchRings({ className = "" }: { className?: string }) {
  const rings = [0, 1, 2, 3];
  return (
    <svg aria-hidden viewBox="0 0 200 260" preserveAspectRatio="none" fill="none" stroke="currentColor" className={`pointer-events-none ${className}`}>
      {rings.map((k) => (
        <path
          key={k}
          d={`M${10 + k * 18} 260V${92 + k * 12}L100 ${10 + k * 22}l${90 - k * 18} ${82 - k * 10}V260`}
          strokeWidth={1.25}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
