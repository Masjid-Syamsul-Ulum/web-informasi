type StepsProps = {
  steps: { title: string; description: string }[];
};

// Alur bernomor. Nomor di dalam jendela, disambung garis putus-putus di layar besar.
export function Steps({ steps }: StepsProps) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
      <span aria-hidden className="absolute top-8 right-[12%] left-[12%] hidden border-t-2 border-dashed border-brand-900/20 md:block" />
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
          <span className="shape-window grid h-16 w-14 shrink-0 place-items-end justify-center bg-brand-900 pb-2.5 text-xl font-extrabold text-gold-400 md:h-20 md:w-16">
            {i + 1}
          </span>
          <div>
            <p className="text-lg font-bold text-brand-900">{step.title}</p>
            <p className="mt-1 text-ink/70">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
