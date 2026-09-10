import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock,
  ImageIcon,
  List,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";

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
    <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f4f9ff_54%,#eff8ff_100%)] pb-8">
      <section className="grid overflow-hidden bg-[var(--academy-deep-navy)] text-white lg:grid-cols-[minmax(27rem,41vw)_1fr]">
        <div className="flex min-h-[20rem] items-center px-[var(--space-page-x)] py-10 md:min-h-[21rem]">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[var(--academy-gold-soft)] md:text-base">
              Intellibus Academy
            </p>
            <h1 className="text-5xl font-bold leading-[var(--line-height-tight)] md:text-7xl">
              Events
            </h1>
            <p className="mt-3 text-2xl leading-[var(--line-height-heading)] text-white md:text-3xl">
              Experiences worth remembering.
            </p>
            <div className="mt-6 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 max-w-xl text-lg leading-[var(--line-height-body)] text-white/84 md:text-xl">
              Celebrations, conversations and moments that bring our community together.
            </p>
          </div>
        </div>
        <img
          alt="Academy community members gathered during an event."
          className="h-64 w-full object-cover lg:h-full lg:min-h-[20rem]"
          src={heroImage}
        />
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_100%)]">
        <div className="academy-container grid gap-8 py-5 md:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Event Recap
            </p>
            <h2 className="mt-2 text-4xl font-bold leading-[var(--line-height-heading)] text-foreground md:text-5xl">
              Recognition Event 2026
            </h2>
            <p className="mt-2 text-lg leading-[var(--line-height-body)] text-foreground md:text-xl">
              Celebrating growth, achievement and the journey ahead.
            </p>
            <p className="mt-2 max-w-xl text-base leading-[var(--line-height-body)] text-muted-foreground md:text-lg">
              An inspiring evening with our Academy community, honoring milestones,
              sharing stories and looking toward what's next.
            </p>
            <Link
              className="mt-2 inline-flex min-h-8 items-center border-b border-primary text-base font-semibold text-primary transition hover:text-[var(--academy-blue-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              to="/community/photos/intellibus-award-ceremony"
            >
              Explore the highlights
            </Link>
          </div>
          <img
            alt="Academy certificate presentation during the recognition event."
            className="h-52 w-full object-cover"
            src={recapImage}
          />
        </div>
      </section>

      <section className="academy-container space-y-5">
        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold leading-[var(--line-height-heading)] text-foreground md:text-3xl">
                Upcoming Events
              </h2>
              <div className="mt-1 h-1 w-16 bg-accent" aria-hidden="true" />
            </div>
            <div className="inline-flex w-fit rounded-[var(--radius-component)] border border-primary bg-card p-1 text-sm font-semibold text-primary">
              <Button
                className="min-h-9 px-4"
                size="sm"
                type="button"
                variant="primary"
              >
                <CalendarDays aria-hidden="true" size={18} />
                Calendar View
              </Button>
              <Button className="min-h-9 px-4" size="sm" type="button" variant="ghost">
                <List aria-hidden="true" size={18} />
                List View
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {upcomingEvents.map((event) => (
              <article
                className="flex min-h-36 items-start gap-4 rounded-[var(--radius-component)] border border-border bg-card p-4 shadow-soft"
                key={`${event.month}-${event.day}-${event.title}`}
              >
                <div
                  aria-label={`${event.month} ${event.day}, ${event.weekday}`}
                  className="flex h-28 w-20 shrink-0 flex-col items-center justify-center rounded-sm bg-[linear-gradient(180deg,#fbf8f1_0%,#f4efe5_100%)] text-center"
                >
                  <span className="text-xs font-bold uppercase text-foreground">
                    {event.month}
                  </span>
                  <span className="text-4xl font-bold leading-none text-accent">
                    {event.day}
                  </span>
                  <span className="text-xs font-bold uppercase text-foreground">
                    {event.weekday}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-[var(--line-height-heading)] text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-primary">
                    <Clock aria-hidden="true" className="shrink-0" size={16} />
                    <span>{event.time}</span>
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-primary">
                    <MapPin aria-hidden="true" className="shrink-0" size={16} />
                    <span>{event.location}</span>
                  </p>
                  <p className="mt-2 text-sm leading-[var(--line-height-body)] text-foreground/86">
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

        <section>
          <h2 className="text-2xl font-bold leading-[var(--line-height-heading)] text-foreground md:text-3xl">
            Past Events
          </h2>
          <div className="mt-1 h-1 w-16 bg-accent" aria-hidden="true" />
          <div className="mt-3 flex items-stretch gap-3 overflow-x-auto pb-2">
            <div className="flex h-24 w-60 shrink-0 items-center gap-4 rounded-[var(--radius-component)] bg-[var(--academy-deep-navy)] p-4 text-white">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-white/40 bg-white/8 text-white/80">
                <ImageIcon aria-hidden="true" size={28} />
              </span>
              <div>
                <h3 className="text-lg font-bold">Past Events</h3>
                <p className="mt-1 text-sm leading-snug text-white/84">
                  Explore highlights from our recent Academy experiences.
                </p>
              </div>
            </div>

            {pastEventImages.map((image) => (
              <img
                alt={image.alt}
                className="h-24 w-44 shrink-0 rounded-[var(--radius-component)] object-cover"
                key={image.src}
                loading="lazy"
                src={image.src}
              />
            ))}

            <Link
              className="flex h-24 w-48 shrink-0 items-center justify-center gap-3 rounded-[var(--radius-component)] border border-border bg-card px-4 text-sm font-bold text-primary shadow-soft transition hover:border-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              to="/community/photos"
            >
              View photo album
              <ArrowRight aria-hidden="true" size={22} />
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
