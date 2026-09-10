import { cn } from "../../lib/utils";
import { MediaFrame, type MediaFrameProps } from "./MediaFrame";

export interface PersonCardProps {
  displayName: string;
  pathway: string;
  shortBio?: string;
  image?: MediaFrameProps;
}

export function PersonCard({ displayName, image, pathway, shortBio }: PersonCardProps) {
  return (
    <article>
      <MediaFrame
        alt=""
        {...image}
        className={cn(image?.className)}
        variant={image?.variant ?? "profile"}
      />
      <h3 className="mt-4 text-lg font-bold leading-[var(--line-height-heading)]">
        {displayName}
      </h3>
      <p className="mt-1 text-sm font-medium text-muted-foreground">{pathway}</p>
      {shortBio ? (
        <p className="mt-3 text-sm leading-[var(--line-height-body)] text-muted-foreground">
          {shortBio}
        </p>
      ) : null}
    </article>
  );
}
