import { Link } from "react-router-dom";

import { footerNavigation } from "../../app/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--academy-deep-navy)] text-white">
      <div className="academy-container flex min-h-[var(--footer-height)] flex-col justify-center gap-3 py-3 md:flex-row md:items-center md:justify-between md:py-0">
        <p className="text-sm text-white/86">&copy; 2026 Intellibus</p>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-8 gap-y-2"
        >
          <span className="text-base font-bold">More Links</span>
          {footerNavigation.map((item) =>
            item.unavailable ? (
              <span
                aria-disabled="true"
                className="text-sm text-white/55"
                key={item.href}
                title="Destination not available yet"
              >
                {item.label}
              </span>
            ) : (
              <Link
                className="text-sm text-white/88 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--academy-deep-navy)]"
                key={item.href}
                to={item.href}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
