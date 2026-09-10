import { useParams } from "react-router-dom";

import { Breadcrumbs } from "../components/academy/Breadcrumbs";
import { EmptyState } from "../components/academy/EmptyState";
import { PageIntro } from "../components/academy/PageIntro";

export default function EventDetailPage() {
  const { slug } = useParams();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: slug ?? "Event" }
        ]}
      />
      <PageIntro
        description="This route is ready for dynamic event details fetched by slug."
        eyebrow="Academy Event"
        title={slug ? `Event: ${slug}` : "Event"}
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="Event details, registration links, and related albums will render here after data wiring."
          title="Event content not loaded"
        />
      </section>
    </>
  );
}
