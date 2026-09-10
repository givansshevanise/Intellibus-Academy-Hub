import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";

export interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export function SecondaryButton({
  children,
  disabled,
  href,
  isLoading,
  onClick,
  type = "button"
}: SecondaryButtonProps) {
  if (href) {
    return (
      <Button asChild aria-disabled={disabled || undefined} variant="secondary">
        <Link to={href}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button
      disabled={disabled}
      isLoading={isLoading}
      onClick={onClick}
      type={type}
      variant="secondary"
    >
      {children}
    </Button>
  );
}
