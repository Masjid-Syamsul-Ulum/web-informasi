type SectionHeadingProps = {
  title: string;
  titleLight?: string;
  description?: string;
  level?: 1 | 2;
};

export function SectionHeading({ title, titleLight, description, level = 2 }: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className="max-w-3xl">
      <Heading className="text-4xl leading-tight font-extrabold tracking-tight text-brand-900 sm:text-5xl">
        {title}
        {titleLight && <span className="block font-light">{titleLight}</span>}
      </Heading>
      {description && <p className="mt-4 text-lg text-ink/80">{description}</p>}
    </div>
  );
}
