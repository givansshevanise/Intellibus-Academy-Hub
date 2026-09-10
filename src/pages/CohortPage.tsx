import { AcademyHero } from "../components/academy/AcademyHero";
import { Breadcrumbs } from "../components/academy/Breadcrumbs";
import { EmptyState } from "../components/academy/EmptyState";

export default function CohortPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: "Meet the Cohort" }
        ]}
      />
      <AcademyHero
        description="Published participant profiles with approved consent will appear here."
        eyebrow="Intellibus Academy"
        image={{ alt: "", variant: "hero" }}
        title="Meet the Cohort"
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="Participant profiles are not hard-coded in the foundation. The API only exposes published records with approved consent."
          title="No cohort profiles loaded"
        />
      </section>
    </>
  );
}
