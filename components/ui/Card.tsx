export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-card bg-white p-6 shadow-sm ring-1 ring-ink/5">{children}</div>;
}
