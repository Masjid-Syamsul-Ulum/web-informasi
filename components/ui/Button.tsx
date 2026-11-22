import Link from "next/link";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  href?: string;
};

const variants = {
  primary: "bg-brand-900 text-white hover:bg-brand-700",
  secondary: "border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white",
};

export function Button({ variant = "primary", href, className = "", ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button type="button" className={classes} {...props} />;
}
