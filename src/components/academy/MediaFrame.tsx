import { useState } from "react";

import { cn } from "../../lib/utils";
import { AspectRatio } from "../ui/aspect-ratio";
import { Skeleton } from "../ui/skeleton";

export type MediaFrameVariant = "standard" | "hero" | "article" | "profile" | "gallery";

const mediaFrameRatios: Record<MediaFrameVariant, number> = {
  standard: 16 / 9,
  hero: 16 / 7,
  article: 16 / 9,
  profile: 1,
  gallery: 4 / 3
};

export interface MediaFrameProps {
  src?: string | null;
  alt: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
  loading?: "eager" | "lazy";
  priority?: boolean;
  variant?: MediaFrameVariant;
  caption?: string;
  className?: string;
  imageClassName?: string;
}

export function MediaFrame({
  alt,
  className,
  height,
  imageClassName,
  loading = "lazy",
  priority = false,
  variant = "standard",
  sizes,
  src,
  srcSet,
  width,
  caption
}: MediaFrameProps) {
  const [failed, setFailed] = useState(false);
  const ratio = width && height ? width / height : mediaFrameRatios[variant];
  const showImage = Boolean(src) && !failed;

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[var(--radius-component)] bg-muted",
        className
      )}
    >
      <AspectRatio ratio={ratio}>
        {showImage ? (
          <img
            alt={alt}
            className={cn("h-full w-full object-cover", imageClassName)}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            height={height}
            loading={priority ? "eager" : loading}
            onError={() => setFailed(true)}
            sizes={sizes}
            src={src ?? undefined}
            srcSet={srcSet}
            width={width}
          />
        ) : (
          <Skeleton aria-hidden="true" className="h-full w-full rounded-none" />
        )}
      </AspectRatio>
      {caption && showImage ? (
        <figcaption className="mt-2 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
