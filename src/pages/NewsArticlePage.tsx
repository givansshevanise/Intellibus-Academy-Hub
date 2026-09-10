import { useParams } from "react-router-dom";

import { Breadcrumbs } from "../components/academy/Breadcrumbs";
import { EmptyState } from "../components/academy/EmptyState";
import { PageIntro } from "../components/academy/PageIntro";

export default function NewsArticlePage() {
  const { slug } = useParams();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: slug ?? "Article" }
        ]}
      />
      <PageIntro
        description="This route is ready for a dynamic article fetched by slug."
        eyebrow="Academy News"
        title={slug ? `Article: ${slug}` : "Article"}
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="Article content is intentionally not hard-coded in the foundation."
          title="Article content not loaded"
        />
      </section>
    </>
  );
}
