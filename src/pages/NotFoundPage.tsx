import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";

export default function NotFoundPage() {
  return (
    <section className="academy-container flex min-h-[calc(100dvh-var(--header-height)-var(--footer-height))] items-center py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-[var(--line-height-tight)] md:text-6xl">
          This Academy Hub page is not available.
        </h1>
        <p className="mt-5 text-lg leading-[var(--line-height-body)] text-muted-foreground">
          The link may be incomplete, unavailable, or waiting for approved content.
          Return home or use the main navigation to continue.
        </p>
        <Button asChild className="mt-8" variant="primary">
          <Link to="/">Return home</Link>
        </Button>
      </div>
    </section>
  );
}
