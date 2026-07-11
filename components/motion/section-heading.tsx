import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
