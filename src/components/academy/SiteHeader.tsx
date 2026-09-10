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
          <Button asChild className="hidden sm:inline-flex" variant="primary">
            <Link to="/community/cohort">Cohort 2026</Link>
          </Button>
          <MobileNavigation items={primaryNavigation} />
        </div>
      </div>
    </header>
  );
}
