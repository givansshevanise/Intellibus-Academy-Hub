import type { ReactNode } from "react";

export interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function PageIntro({ actions, description, eyebrow, title }: PageIntroProps) {
  return (
    <section className="academy-container py-12 md:py-16">
      <div className="max-w-4xl">
        {eyebrow ? (
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-4xl font-bold leading-[var(--line-height-tight)] text-foreground md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-3xl text-lg leading-[var(--line-height-body)] text-muted-foreground md:text-xl">
            {description}
          </p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
