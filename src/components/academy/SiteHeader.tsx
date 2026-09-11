import { Link } from "react-router-dom";

import { primaryNavigation } from "../../app/navigation";
import { Button } from "../ui/button";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { SiteLogo } from "./SiteLogo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/88">
      <div className="academy-container flex min-h-[var(--header-height)] items-center justify-between gap-5">
        <SiteLogo />
        <DesktopNavigation items={primaryNavigation} />
        <div className="flex items-center gap-3">
          <button
            className="hidden min-h-10 items-center px-3 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:inline-flex"
            type="button"
          >
            Search
          </button>
          <Button asChild className="hidden sm:inline-flex" variant="primary">
            <Link to="/community/cohort">Cohort 2026</Link>
          </Button>
          <MobileNavigation items={primaryNavigation} />
        </div>
      </div>
    </header>
  );
}
