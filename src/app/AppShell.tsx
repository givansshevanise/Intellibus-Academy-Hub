import { Outlet } from "react-router-dom";

import { SiteFooter } from "../components/academy/SiteFooter";
import { SiteHeader } from "../components/academy/SiteHeader";

export function AppShell() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
