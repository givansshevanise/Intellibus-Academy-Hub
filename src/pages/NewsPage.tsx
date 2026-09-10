import { AcademyHero } from "../components/academy/AcademyHero";
import { EmptyState } from "../components/academy/EmptyState";

export default function NewsPage() {
  return (
    <>
      <AcademyHero
        description="Updates, stories, and opportunities from across the Academy."
        eyebrow="Intellibus Academy"
        image={{ alt: "", variant: "hero" }}
        title="Academy News"
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="News cards and category filters will render here once the frontend data layer is connected to the Worker API."
          title="No news loaded"
        />
      </section>
    </>
  );
}
