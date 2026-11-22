// Grid dengan item genap turun sedikit di layar besar, supaya deretan card tidak kaku.
export function StaggerGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:pb-16 lg:[&>*:nth-child(even)]:translate-y-16">
      {children}
    </div>
  );
}
