import { cn } from "../../lib/utils";
import { TextLink } from "./TextLink";
import { MediaFrame, type MediaFrameProps } from "./MediaFrame";

export interface FeaturedArticleProps {
  eyebrow?: string;
  title: string;
  excerpt: string;
  href: string;
  image?: MediaFrameProps;
  actionLabel?: string;
}

export function FeaturedArticle({
  actionLabel = "Read story",
  excerpt,
  eyebrow,
  href,
  image,
  title
}: FeaturedArticleProps) {
  return (
    <article className="grid overflow-hidden rounded-[var(--radius-component)] border border-border bg-card shadow-soft md:grid-cols-[0.9fr_1fr]">
      <MediaFrame
        alt=""
        {...image}
        className={cn("h-full rounded-none", image?.className)}
        variant={image?.variant ?? "article"}
      />
      <div className="flex flex-col justify-center bg-[var(--academy-deep-navy)] p-6 text-white md:p-10">
        {eyebrow ? (
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[var(--academy-gold-soft)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-bold leading-[var(--line-height-heading)] md:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-base leading-[var(--line-height-body)] text-white/84">
          {excerpt}
        </p>
        <TextLink className="mt-6 text-white hover:text-white/82" to={href}>
          {actionLabel}
        </TextLink>
      </div>
    </article>
  );
}
