type SectionHeadingProps = {
  title: string;
  titleLight?: string;
  description?: string;
  level?: 1 | 2;
  align?: "left" | "center";
};

export function SectionHeading({ title, titleLight, description, level = 2, align = "left" }: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Heading className="text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] text-balance text-brand-900 in-data-[tone=green]:text-white sm:text-6xl">
        {title}
        {titleLight && (
          <span className="block font-light text-brand-700 in-data-[tone=green]:text-gold-400">{titleLight}</span>
        )}
      </Heading>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-pretty text-ink/75 in-data-[tone=green]:text-white/75">
          {description}
        </p>
      )}
    </div>
  );
}
