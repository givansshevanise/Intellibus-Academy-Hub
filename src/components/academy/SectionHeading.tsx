import type { ReactNode } from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function SectionHeading({
  action,
  description,
  eyebrow,
  title
}: SectionHeadingProps) {
  return (
    <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-bold leading-[var(--line-height-heading)] text-foreground md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-[var(--line-height-body)] text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
