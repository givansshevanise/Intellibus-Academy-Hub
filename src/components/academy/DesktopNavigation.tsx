import { NavLink, useLocation } from "react-router-dom";

import type { NavigationItem } from "../../app/navigation";
import { cn } from "../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "../ui/navigation-menu";

export interface DesktopNavigationProps {
  items: NavigationItem[];
  ariaLabel?: string;
}

function isActivePath(pathname: string, item: NavigationItem) {
  if (item.exact) {
    return pathname === item.href;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function DesktopNavigation({
  ariaLabel = "Primary navigation",
  items
}: DesktopNavigationProps) {
  const location = useLocation();

  return (
    <NavigationMenu aria-label={ariaLabel} className="hidden lg:flex">
      <NavigationMenuList>
        {items.map((item) => {
          const active = isActivePath(location.pathname, item);

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild active={active}>
                <NavLink
                  className={cn(
                    "relative flex min-h-11 items-center text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    active &&
                      "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                  )}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
