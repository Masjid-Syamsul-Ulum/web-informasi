import Link from "next/link";
import { IconArrowUpRight } from "@/components/icons";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "gold" | "outline" | "light";
  href?: string;
  arrow?: boolean;
};

const variants = {
  primary: { base: "bg-brand-900 text-white hover:bg-brand-950", dot: "bg-gold-400 text-brand-950" },
  gold: { base: "bg-gold-400 text-brand-950 hover:brightness-105", dot: "bg-brand-900 text-white" },
  outline: {
    base: "ring-1 ring-inset ring-brand-900/25 text-brand-900 hover:bg-brand-900 hover:text-white",
    dot: "bg-brand-900 text-white group-hover/btn:bg-gold-400 group-hover/btn:text-brand-950",
  },
  light: { base: "bg-white text-brand-900 hover:bg-cream", dot: "bg-brand-900 text-white" },
};

export function Button({ variant = "primary", href, arrow = true, className = "", children, ...props }: ButtonProps) {
  const v = variants[variant];
  const classes = `group/btn inline-flex items-center gap-3 rounded-full py-1.5 font-semibold transition-[background-color,color,scale] duration-200 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold-400 ${arrow ? "pr-1.5 pl-6" : "px-6 py-3"} ${v.base} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          className={`relative grid size-9 place-items-center overflow-hidden rounded-full transition-[background-color,color,scale] duration-200 group-hover/btn:scale-110 ${v.dot}`}
        >
          <IconArrowUpRight className="size-4 transition-transform duration-300 ease-out motion-safe:group-hover/btn:translate-x-5 motion-safe:group-hover/btn:-translate-y-5" />
          <IconArrowUpRight className="absolute size-4 -translate-x-5 translate-y-5 transition-transform duration-300 ease-out motion-safe:group-hover/btn:translate-0 motion-reduce:hidden" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
