import Link from "next/link";

// Link teks dengan garis bawah yang tumbuh dari kiri saat hover.
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-semibold text-brand-900 in-data-[tone=green]:font-normal in-data-[tone=green]:text-white/85 bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 ease-out hover:bg-[length:100%_1.5px] focus-visible:bg-[length:100%_1.5px] focus-visible:outline-none"
    >
      {children}
    </Link>
  );
}
