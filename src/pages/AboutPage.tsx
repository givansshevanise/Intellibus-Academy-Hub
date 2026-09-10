import { AcademyHero } from "../components/academy/AcademyHero";
import { EmptyState } from "../components/academy/EmptyState";

export default function AboutPage() {
  return (
    <>
      <AcademyHero
        description="Built for potential. Shaped by experience."
        eyebrow="Intellibus Academy"
        image={{ alt: "", variant: "hero" }}
        title="About the Academy"
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="FAQ and Academy definition sections will be wired to reusable components after approved content is loaded."
          title="About content not populated"
        />
      </section>
    </>
  );
}
