import { AcademyHero } from "../components/academy/AcademyHero";
import { Breadcrumbs } from "../components/academy/Breadcrumbs";
import { EmptyState } from "../components/academy/EmptyState";

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
        description="Moments from the journey."
        eyebrow="Intellibus Academy"
        image={{ alt: "", variant: "hero" }}
        title="Academy Photo Album"
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="Album filters, gallery grids, and the lightbox component are available; album data will be connected next."
          title="No albums loaded"
        />
      </section>
    </>
  );
}
