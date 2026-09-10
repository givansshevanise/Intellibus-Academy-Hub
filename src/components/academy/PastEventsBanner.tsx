import type { ReactNode } from "react";

import { SecondaryButton } from "./SecondaryButton";

export interface PastEventsBannerProps {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  media?: ReactNode;
}

export function PastEventsBanner({
  actionLabel,
  description,
  href,
  media,
  title
}: PastEventsBannerProps) {
  return (
    <section className="rounded-[var(--radius-component)] border border-border bg-card p-6">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">{description}</p>
        </div>
        <SecondaryButton href={href}>{actionLabel}</SecondaryButton>
      </div>
      {media ? <div className="mt-6">{media}</div> : null}
    </section>
  );
}
