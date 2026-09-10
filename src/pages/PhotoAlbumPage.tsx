import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { AcademyHero } from "../components/academy/AcademyHero";
import { Breadcrumbs } from "../components/academy/Breadcrumbs";
import { MediaFrame } from "../components/academy/MediaFrame";
import { SectionHeading } from "../components/academy/SectionHeading";
import { awardCeremonyPhotos, photoAlbums } from "../data/awardCeremonyAlbum";

const photoCountByAlbumId = new Map([
  ["intellibus-award-ceremony", awardCeremonyPhotos.length]
]);

export default function PhotoAlbumPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: "Photo Album" }
        ]}
      />
      <AcademyHero
        description="Approved photos from Academy celebrations, milestones, and community moments."
        eyebrow="Intellibus Academy"
        image={{
          alt: photoAlbums[0].coverImageAlt ?? "",
          src: photoAlbums[0].coverImageKey,
          variant: "hero"
        }}
        title="Academy Photo Album"
      />
      <section className="academy-container py-14 md:py-16">
        <SectionHeading
          eyebrow="Albums"
          title="Ceremony Highlights"
          description="Browse the latest Intellibus Academy award ceremony photos."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {photoAlbums.map((album) => {
            const photoCount = photoCountByAlbumId.get(album.id) ?? 0;

            return (
              <Link
                className="group rounded-[var(--radius-component)] border border-border bg-card p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                key={album.id}
                to={`/community/photos/${album.slug}`}
              >
                <MediaFrame
                  alt={album.coverImageAlt ?? ""}
                  className="border border-border"
                  imageClassName="transition-transform duration-300 group-hover:scale-[1.03]"
                  src={album.coverImageKey}
                  variant="article"
                />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                      {album.cohort ? `Cohort ${album.cohort}` : "Academy"}
                    </p>
                    <h2 className="mt-2 text-xl font-bold leading-[var(--line-height-heading)] text-foreground">
                      {album.title}
                    </h2>
                    <p className="mt-2 text-sm leading-[var(--line-height-body)] text-muted-foreground">
                      {album.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-primary">
                      {photoCount} photos
                    </p>
                  </div>
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-component)] bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight aria-hidden="true" size={20} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
