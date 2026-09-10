import type { Photograph } from "../../models/content";
import { MediaFrame } from "./MediaFrame";

export interface GalleryItemProps {
  photo: Photograph;
  imageUrl: string;
  onOpen: (photo: Photograph) => void;
}

export function GalleryItem({ imageUrl, onOpen, photo }: GalleryItemProps) {
  return (
    <button
      aria-label={`Open ${photo.caption ?? photo.altText}`}
      className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onClick={() => onOpen(photo)}
      type="button"
    >
      <MediaFrame
        alt={photo.altText}
        className="aspect-[4/3] transition-opacity group-hover:opacity-90"
        height={photo.height}
        loading="lazy"
        src={imageUrl}
        variant="gallery"
        width={photo.width}
      />
      {photo.caption ? (
        <span className="mt-2 block text-sm text-muted-foreground">
          {photo.caption}
        </span>
      ) : null}
    </button>
  );
}
