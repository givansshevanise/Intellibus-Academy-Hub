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
        className="h-12 w-40 object-cover object-center md:w-48"
        src={intellibusLogo}
      />
    </Link>
  );
}
