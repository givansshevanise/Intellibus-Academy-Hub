import { cn } from "../../lib/utils";
import { PrimaryButton } from "./PrimaryButton";
import { MediaFrame, type MediaFrameProps } from "./MediaFrame";

export interface CohortFeatureProps {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  image?: MediaFrameProps;
}

export function CohortFeature({
  actionLabel,
  description,
  eyebrow,
  href,
  image,
  title
}: CohortFeatureProps) {
  return (
    <section className="grid gap-8 md:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] md:items-center">
      <MediaFrame
        alt=""
        {...image}
        className={cn(image?.className)}
        variant={image?.variant ?? "article"}
      />
      <div>
        {eyebrow ? (
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-bold leading-[var(--line-height-heading)] md:text-4xl">
          {title}
        </h2>
        <div className="mt-5 h-1 w-20 bg-accent" aria-hidden="true" />
        <p className="mt-5 text-lg leading-[var(--line-height-body)] text-muted-foreground">
          {description}
        </p>
        <div className="mt-7">
          <PrimaryButton href={href}>{actionLabel}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
