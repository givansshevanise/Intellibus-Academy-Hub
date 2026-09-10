import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import type { NavigationItem } from "../../app/navigation";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet";

export interface MobileNavigationProps {
  items: NavigationItem[];
}

export function MobileNavigation({ items }: MobileNavigationProps) {
  const location = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open navigation menu"
          className="lg:hidden"
          size="icon"
          type="button"
          variant="ghost"
        >
          <Menu aria-hidden="true" size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent
        aria-describedby="mobile-navigation-description"
        className="p-0"
        closeLabel="Close navigation menu"
        side="right"
      >
        <div className="border-b border-border px-5 py-5">
          <SheetTitle className="text-lg font-bold">Navigation</SheetTitle>
          <SheetDescription
            className="mt-1 text-sm text-muted-foreground"
            id="mobile-navigation-description"
          >
            Browse Academy Hub sections.
          </SheetDescription>
        </div>
        <nav aria-label="Mobile navigation" className="grid gap-1 p-4">
          {items.map((item) => {
            const active =
              item.exact === true
                ? location.pathname === item.href
                : location.pathname === item.href ||
                  location.pathname.startsWith(`${item.href}/`);

            return (
              <SheetClose asChild key={item.href}>
                <Link
                  className={cn(
                    "flex min-h-12 items-center rounded-md px-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active && "bg-secondary text-primary"
                  )}
                  to={item.href}
                >
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
