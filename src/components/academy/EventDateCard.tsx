import { formatDateLabel } from "../../lib/utils";
import { TextLink } from "./TextLink";

export interface EventDateCardProps {
  title: string;
  startDate: string;
  timeDisplay: string;
  location: string;
  summary: string;
  href: string;
}

export function EventDateCard({
  href,
  location,
  startDate,
  summary,
  timeDisplay,
  title
}: EventDateCardProps) {
  const eventDate = new Date(startDate);
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(eventDate);
  const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(eventDate);
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    eventDate
  );

  return (
    <article className="grid gap-5 rounded-[var(--radius-component)] border border-border bg-card p-5 sm:grid-cols-[5rem_1fr]">
      <div
        aria-label={formatDateLabel(startDate)}
        className="flex h-24 w-24 flex-col items-center justify-center rounded-md bg-[var(--academy-neutral)] text-center sm:h-full sm:w-20"
      >
        <span className="text-xs font-bold uppercase text-foreground">{month}</span>
        <span className="text-4xl font-bold leading-none text-accent">{day}</span>
        <span className="text-xs font-bold uppercase text-foreground">{weekday}</span>
      </div>
      <div>
        <h3 className="text-lg font-bold leading-[var(--line-height-heading)]">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {timeDisplay} · {location}
        </p>
        <p className="mt-2 text-sm leading-[var(--line-height-body)] text-muted-foreground">
          {summary}
        </p>
        <TextLink className="mt-3" to={href}>
          Event details
        </TextLink>
      </div>
    </article>
  );
}
