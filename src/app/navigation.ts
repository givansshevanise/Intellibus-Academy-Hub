export interface NavigationItem {
  label: string;
  href: string;
  exact?: boolean;
  unavailable?: boolean;
}

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/", exact: true },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" }
];

export const footerNavigation: NavigationItem[] = [
  { label: "Intellibus Academy", href: "/about" },
  { label: "GQ Platform", href: "/external/gq-platform", unavailable: true },
  { label: "Instagram", href: "/external/instagram", unavailable: true },
  { label: "Contact", href: "/external/contact", unavailable: true }
];
