import { cn, formatDateLabel } from "../../lib/utils";
import { MediaFrame, type MediaFrameProps } from "./MediaFrame";
import { TextLink } from "./TextLink";

export interface ArticleCardProps {
  title: string;
  excerpt: string;
  href: string;
  publishedAt: string;
  image?: MediaFrameProps;
}

export function ArticleCard({
  excerpt,
  href,
  image,
  publishedAt,
  title
}: ArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-[var(--radius-component)] border border-border bg-card">
      <MediaFrame
        alt=""
        {...image}
        className={cn("rounded-none", image?.className)}
        variant={image?.variant ?? "article"}
      />
      <div className="p-5">
        <time
          className="text-xs font-medium text-muted-foreground"
          dateTime={publishedAt}
        >
          {formatDateLabel(publishedAt)}
        </time>
        <h3 className="mt-2 text-xl font-bold leading-[var(--line-height-heading)] text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-[var(--line-height-body)] text-muted-foreground">
          {excerpt}
        </p>
        <TextLink className="mt-4" to={href}>
          Read more
        </TextLink>
      </div>
    </article>
  );
}
