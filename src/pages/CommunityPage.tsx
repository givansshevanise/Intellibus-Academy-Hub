import { AcademyHero } from "../components/academy/AcademyHero";
import { EmptyState } from "../components/academy/EmptyState";
import { PrimaryButton } from "../components/academy/PrimaryButton";
import { SecondaryButton } from "../components/academy/SecondaryButton";

export default function CommunityPage() {
  return (
    <>
      <AcademyHero
        actions={
          <>
            <PrimaryButton href="/community/cohort">Meet the cohort</PrimaryButton>
            <SecondaryButton href="/community/photos">View photo album</SecondaryButton>
          </>
        }
        description="Where ambition meets belonging."
        eyebrow="Intellibus Academy"
        image={{ alt: "", variant: "hero" }}
        title="Community"
      />
      <section className="academy-container pb-16">
        <EmptyState
          message="Community features and album highlights will be assembled from reusable components in the design pass."
          title="Community content not populated"
        />
      </section>
    </>
  );
}
