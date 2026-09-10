import type { ReactNode } from "react";

import { cn } from "../../lib/utils";
import { MediaFrame, type MediaFrameProps } from "./MediaFrame";

export interface AcademyHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: MediaFrameProps;
  actions?: ReactNode;
}

export function AcademyHero({
  actions,
  description,
  eyebrow,
  image,
  subtitle,
  title
}: AcademyHeroProps) {
  return (
    <section className="bg-[var(--academy-deep-navy)] text-white">
      <div className="academy-container grid min-h-[22rem] gap-8 py-12 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.26em] text-[var(--academy-gold-soft)]">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-[var(--line-height-tight)] md:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-xl leading-[var(--line-height-body)] text-white/90 md:text-2xl">
              {subtitle}
            </p>
          ) : null}
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-[var(--line-height-body)] text-white/78 md:text-lg">
              {description}
            </p>
          ) : null}
          <div className="mt-7 h-1 w-20 bg-accent" aria-hidden="true" />
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        <MediaFrame
          alt=""
          {...image}
          className={cn("rounded-none", image?.className)}
          priority={image?.priority ?? true}
          variant={image?.variant ?? "hero"}
        />
      </div>
    </section>
  );
}
