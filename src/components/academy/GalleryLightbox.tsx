import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

import type { Photograph } from "../../models/content";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { MediaFrame } from "./MediaFrame";

export interface GalleryLightboxProps {
  photos: Photograph[];
  activePhotoId: string | null;
  getImageUrl: (photo: Photograph) => string;
  onClose: () => void;
  onPhotoChange: (photoId: string) => void;
}

export function GalleryLightbox({
  activePhotoId,
  getImageUrl,
  onClose,
  onPhotoChange,
  photos
}: GalleryLightboxProps) {
  const activeIndex = photos.findIndex((photo) => photo.id === activePhotoId);
  const activePhoto = activeIndex >= 0 ? photos[activeIndex] : null;
  const hasPhotos = photos.length > 0;

  const goToPrevious = () => {
    if (!hasPhotos) {
      return;
    }
    const nextIndex = activeIndex <= 0 ? photos.length - 1 : activeIndex - 1;
    onPhotoChange(photos[nextIndex].id);
  };

  const goToNext = () => {
    if (!hasPhotos) {
      return;
    }
    const nextIndex = activeIndex >= photos.length - 1 ? 0 : activeIndex + 1;
    onPhotoChange(photos[nextIndex].id);
  };

  useEffect(() => {
    if (!activePhoto) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <Dialog open={Boolean(activePhoto)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        aria-describedby="gallery-lightbox-description"
        className="w-[min(calc(100%-2rem),72rem)] bg-background p-4 md:p-6"
        closeLabel="Close photo viewer"
      >
        {activePhoto ? (
          <div className="grid gap-4">
            <div className="flex items-start justify-between gap-4 pr-12">
              <div>
                <DialogTitle className="text-lg font-bold">
                  {activePhoto.caption ?? "Academy photograph"}
                </DialogTitle>
                <DialogDescription
                  className="mt-1 text-sm text-muted-foreground"
                  id="gallery-lightbox-description"
                >
                  Photo {activeIndex + 1} of {photos.length}
                </DialogDescription>
              </div>
            </div>
            <div className="grid grid-cols-[var(--arrow-target)_1fr_var(--arrow-target)] items-center gap-3">
              <Button
                aria-label="Previous photograph"
                onClick={goToPrevious}
                size="icon"
                type="button"
                variant="secondary"
              >
                <ChevronLeft aria-hidden="true" size={24} />
              </Button>
              <MediaFrame
                alt={activePhoto.altText}
                className="max-h-[70dvh] rounded-md"
                height={activePhoto.height}
                src={getImageUrl(activePhoto)}
                variant="standard"
                width={activePhoto.width}
              />
              <Button
                aria-label="Next photograph"
                onClick={goToNext}
                size="icon"
                type="button"
                variant="secondary"
              >
                <ChevronRight aria-hidden="true" size={24} />
              </Button>
            </div>
            {activePhoto.photographerCredit ? (
              <p className="text-sm text-muted-foreground">
                Credit: {activePhoto.photographerCredit}
              </p>
            ) : null}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
