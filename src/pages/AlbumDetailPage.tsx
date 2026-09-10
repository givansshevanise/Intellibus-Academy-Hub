import { useParams } from "react-router-dom";

import { Breadcrumbs } from "../components/academy/Breadcrumbs";
import { EmptyState } from "../components/academy/EmptyState";
import { PageIntro } from "../components/academy/PageIntro";

export default function AlbumDetailPage() {
  const { slug } = useParams();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: "Photo Album", href: "/community/photos" },
          { label: slug ?? "Album" }
        ]}
      />
      <PageIntro
        description="This route is ready for album details and approved photographs fetched by slug."
        eyebrow="Academy Photo Album"
        title={slug ? `Album: ${slug}` : "Album"}
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="Photographs will be loaded from R2 image keys stored in D1 metadata."
          title="Album photographs not loaded"
        />
      </section>
    </>
  );
}
