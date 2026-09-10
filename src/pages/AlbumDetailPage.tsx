import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { Breadcrumbs } from "../components/academy/Breadcrumbs";
import { EmptyState } from "../components/academy/EmptyState";
import { GalleryGrid } from "../components/academy/GalleryGrid";
import { GalleryLightbox } from "../components/academy/GalleryLightbox";
import { PageIntro } from "../components/academy/PageIntro";
import { SecondaryButton } from "../components/academy/SecondaryButton";
import { getAlbumBySlug, getPhotosByAlbumId } from "../data/awardCeremonyAlbum";
import type { Photograph } from "../models/content";

const getImageUrl = (photo: Photograph) => photo.imageKey;

export default function AlbumDetailPage() {
  const { slug } = useParams();
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null);
  const album = getAlbumBySlug(slug);
  const photos = useMemo(() => {
    if (!album) {
      return [];
    }

    return getPhotosByAlbumId(album.id).sort(
      (first, second) => first.displayOrder - second.displayOrder
    );
  }, [album]);
  const title = album?.title ?? "Album not found";

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: "Photo Album", href: "/community/photos" },
          { label: title }
        ]}
      />
      <PageIntro
        actions={<SecondaryButton href="/community/photos">All albums</SecondaryButton>}
        description={
          album
            ? `${album.description} ${photos.length} approved photos are available.`
            : "The requested photo album could not be found."
        }
        eyebrow="Academy Photo Album"
        title={title}
      />
      <section className="academy-container pb-16">
        {album ? (
          <>
            <GalleryGrid
              getImageUrl={getImageUrl}
              onOpen={(photo) => setActivePhotoId(photo.id)}
              photos={photos}
            />
            <GalleryLightbox
              activePhotoId={activePhotoId}
              getImageUrl={getImageUrl}
              onClose={() => setActivePhotoId(null)}
              onPhotoChange={setActivePhotoId}
              photos={photos}
            />
          </>
        ) : (
          <EmptyState
            message="Return to the photo album page to choose an available album."
            title="No matching album"
          />
        )}
      </section>
    </>
  );
}
