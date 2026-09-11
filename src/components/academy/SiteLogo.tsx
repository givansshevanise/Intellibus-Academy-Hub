import { Link } from "react-router-dom";

import intellibusLogo from "../../assets/intellibus-logo.png";

export interface SiteLogoProps {
  label?: string;
}

export function SiteLogo({ label = "Intellibus" }: SiteLogoProps) {
  return (
    <Link
      aria-label="Intellibus Academy Hub home"
      className="flex min-h-10 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      to="/"
    >
      <img
        alt={label}
        className="h-12 w-48 object-cover object-center sm:w-56 md:w-64"
        src={intellibusLogo}
      />
    </Link>
  );
}
