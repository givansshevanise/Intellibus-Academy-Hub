import { ArrowRight, ChevronRight, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCard {
  month: string;
  day: string;
  weekday: string;
  title: string;
  time: string;
  location: string;
  summary: string;
}

interface PastEventImage {
  src: string;
  alt: string;
}

const heroImage = "/images/award-ceremony/Untitled.2-24.jpg";
const recapImage = "/images/award-ceremony/Untitled.2-5-2.jpg";

const upcomingEvents: EventCard[] = [
  {
    month: "Sep",
    day: "15",
    weekday: "Tue",
    title: "Academy Check-In",
    time: "12:00 PM - 1:00 PM (ET)",
    location: "Virtual",
    summary: "Updates, progress and what's next for the Academy."
  },
  {
    month: "Oct",
    day: "07",
    weekday: "Wed",
    title: "Community Session",
    time: "3:00 PM - 4:00 PM (ET)",
    location: "Virtual",
    summary: "Real stories, shared experiences and peer perspectives."
  },
  {
    month: "Nov",
    day: "12",
    weekday: "Thu",
    title: "Demo Day",
    time: "1:00 PM - 4:00 PM (ET)",
    location: "In Person",
    summary: "Academy teams showcase their projects and impact."
  },
  {
    month: "Nov",
    day: "26",
    weekday: "Thu",
    title: "Community Session",
    time: "12:00 PM - 1:00 PM (ET)",
    location: "Virtual",
    summary: "Continuing the conversation and community connections."
  }
];

const pastEventImages: PastEventImage[] = [
  {
    src: "/images/award-ceremony/Untitled.2-35.jpg",
    alt: "Academy participants posing together at the award ceremony."
  },
  {
    src: "/images/award-ceremony/Untitled.2-8-2.jpg",
    alt: "Award ceremony honorees smiling with their awards."
  },
  {
    src: "/images/award-ceremony/Untitled.2-26-2.jpg",
    alt: "Academy attendees gathered around a table."
  },
  {
    src: "/images/award-ceremony/Untitled.2-16-3.jpg",
    alt: "An Academy certificate recipient shaking hands."
  },
  {
    src: "/images/award-ceremony/Untitled.2-28-2.jpg",
    alt: "An Academy participant holding a completion certificate."
  }
];

export default function EventsPage() {
  return (
    <div className="overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f9ff_62%,#eff8ff_100%)]">
      <section className="grid min-w-0 overflow-hidden bg-[var(--academy-deep-navy)] text-white lg:h-[clamp(270px,27vw,280px)] lg:grid-cols-[41fr_59fr]">
        <div className="flex min-w-0 items-center px-[var(--space-page-x)] py-6 lg:h-full lg:px-20 lg:py-0 xl:px-[5.5rem]">
          <div className="min-w-0 max-w-2xl">
            <h1 className="text-5xl font-bold leading-[var(--line-height-tight)] md:text-7xl lg:text-[5.25rem]">
              Events
            </h1>
            <p className="mt-2 text-2xl leading-[var(--line-height-heading)] text-white md:text-3xl">
              Experiences worth remembering.
            </p>
            <div className="mt-5 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-4 max-w-xl break-words text-lg leading-[var(--line-height-body)] text-white/84 md:text-xl">
              Celebrations, conversations and moments that bring our community together.
            </p>
          </div>
        </div>
        <div className="min-w-0 overflow-hidden lg:h-full max-lg:h-48">
          <img
            alt="Academy community members gathered during an event."
            className="h-full w-full object-cover object-[center_45%]"
            src={heroImage}
          />
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_100%)] py-6 lg:h-[11.5rem] lg:py-4">
        <div className="grid h-full min-w-0 gap-5 md:grid-cols-[41fr_59fr] md:items-center lg:gap-0">
          <div className="flex min-w-0 items-center px-[var(--space-page-x)] lg:h-full lg:px-20 xl:px-[5.5rem]">
            <div className="min-w-0 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Event Recap
              </p>
              <h2 className="mt-1 text-3xl font-bold leading-[var(--line-height-heading)] text-foreground md:text-4xl lg:text-[2.45rem]">
                Recognition Event 2026
              </h2>
              <p className="mt-1 break-words text-base leading-snug text-foreground md:text-lg">
                Celebrating growth, achievement and the journey ahead.
              </p>
              <p className="mt-2 max-w-xl break-words text-sm leading-snug text-muted-foreground md:text-base">
                An inspiring evening with our Academy community, honoring milestones,
                sharing stories and looking toward what's next.
              </p>
              <Link
                className="mt-2 inline-flex min-h-7 items-center border-b border-primary text-base font-semibold text-primary transition hover:text-[var(--academy-blue-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                to="/community/photos/intellibus-award-ceremony"
              >
                Explore the highlights
              </Link>
            </div>
          </div>
          <div className="min-w-0 overflow-hidden px-[var(--space-page-x)] md:h-52 lg:h-full lg:px-0 lg:pr-[var(--space-page-x)]">
            <img
              alt="Academy certificate presentation during the recognition event."
              className="h-full w-full object-cover object-[center_45%]"
              src={recapImage}
            />
          </div>
        </div>
      </section>

      <section className="academy-container space-y-4 pb-1 pt-3">
        <section>
          <div className="mb-2">
            <h2 className="text-2xl font-bold leading-[var(--line-height-heading)] text-foreground md:text-3xl">
              Upcoming Events
            </h2>
            <div className="mt-1 h-1 w-16 bg-accent" aria-hidden="true" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {upcomingEvents.map((event) => (
              <article
                className="flex min-h-[7.5rem] min-w-0 items-start gap-3 rounded-[var(--radius-component)] border border-border bg-card p-3 shadow-soft"
                key={`${event.month}-${event.day}-${event.title}`}
              >
                <div
                  aria-label={`${event.month} ${event.day}, ${event.weekday}`}
                  className="flex h-[5.5rem] w-[4.65rem] shrink-0 flex-col items-center justify-center rounded-sm bg-[linear-gradient(180deg,#fbf8f1_0%,#f4efe5_100%)] text-center"
                >
                  <span className="text-xs font-bold uppercase text-foreground">
                    {event.month}
                  </span>
                  <span className="text-4xl font-bold leading-[0.88] text-accent">
                    {event.day}
                  </span>
                  <span className="text-xs font-bold uppercase text-foreground">
                    {event.weekday}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold leading-tight text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm leading-tight text-primary">
                    <Clock aria-hidden="true" className="shrink-0" size={15} />
                    <span className="min-w-0">{event.time}</span>
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm leading-tight text-primary">
                    <MapPin aria-hidden="true" className="shrink-0" size={15} />
                    <span>{event.location}</span>
                  </p>
                  <p className="mt-1 text-sm leading-snug text-foreground/86">
                    {event.summary}
                  </p>
                </div>
                <ChevronRight
                  aria-hidden="true"
                  className="mt-3 shrink-0 text-primary"
                  size={22}
                />
              </article>
            ))}
          </div>
        </section>

        <section className="pt-1">
          <h2 className="text-2xl font-bold leading-[var(--line-height-heading)] text-foreground md:text-3xl">
            Past Events
          </h2>
          <div className="mt-1 h-1 w-16 bg-accent" aria-hidden="true" />
          <div className="mt-2 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[repeat(5,minmax(0,1fr))_12rem]">
            {pastEventImages.map((image) => (
              <img
                alt={image.alt}
                className="h-20 w-full rounded-[var(--radius-component)] object-cover"
                key={image.src}
                src={image.src}
              />
            ))}

            <Link
              className="flex min-h-20 items-center justify-center gap-3 rounded-[var(--radius-component)] border border-border bg-card px-4 text-sm font-bold text-primary shadow-soft transition hover:border-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              to="/community/photos"
            >
              View Photo Album
              <ArrowRight aria-hidden="true" size={22} />
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
