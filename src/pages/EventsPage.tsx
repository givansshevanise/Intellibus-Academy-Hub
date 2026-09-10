import { AcademyHero } from "../components/academy/AcademyHero";
import { EmptyState } from "../components/academy/EmptyState";
import { SecondaryButton } from "../components/academy/SecondaryButton";

export default function EventsPage() {
  return (
    <>
      <AcademyHero
        actions={
          <SecondaryButton href="/community/photos">View photo album</SecondaryButton>
        }
        description="Celebrations, conversations, and moments that bring the Academy community together."
        eyebrow="Intellibus Academy"
        image={{ alt: "", variant: "hero" }}
        title="Events"
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="Upcoming and past event lists will be populated from D1 through the Worker API."
          title="No events loaded"
        />
      </section>
    </>
  );
}
