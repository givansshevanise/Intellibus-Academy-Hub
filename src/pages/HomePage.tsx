import { AcademyHero } from "../components/academy/AcademyHero";
import { EmptyState } from "../components/academy/EmptyState";
import { PrimaryButton } from "../components/academy/PrimaryButton";
import { SecondaryButton } from "../components/academy/SecondaryButton";

export default function HomePage() {
  return (
    <>
      <AcademyHero
        actions={
          <>
            <PrimaryButton href="/news">View news</PrimaryButton>
            <SecondaryButton href="/events">Explore events</SecondaryButton>
          </>
        }
        description="A shared place for Academy news, events, community updates, cohort information, photo albums, and approved external links."
        eyebrow="Intellibus Academy"
        image={{ alt: "", variant: "hero" }}
        title="Learn. Build. Belong."
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="The technical foundation is ready. Dynamic homepage sections will be connected to approved content in the next implementation phase."
          title="Homepage content is not populated yet"
        />
      </section>
    </>
  );
}
