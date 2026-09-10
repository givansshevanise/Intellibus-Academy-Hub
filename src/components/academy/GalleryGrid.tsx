import type { Photograph } from "../../models/content";
import { EmptyState } from "./EmptyState";
import { GalleryItem } from "./GalleryItem";

export interface GalleryGridProps {
  photos: Photograph[];
  getImageUrl: (photo: Photograph) => string;
  onOpen: (photo: Photograph) => void;
  emptyTitle?: string;
  emptyMessage?: string;
}

export function GalleryGrid({
  emptyMessage = "No photographs match the selected filter.",
  emptyTitle = "No photos found",
  getImageUrl,
  onOpen,
  photos
}: GalleryGridProps) {
  if (photos.length === 0) {
    return <EmptyState message={emptyMessage} title={emptyTitle} />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo) => (
        <GalleryItem
          imageUrl={getImageUrl(photo)}
          key={photo.id}
          onOpen={onOpen}
          photo={photo}
        />
      ))}
    </div>
  );
}
