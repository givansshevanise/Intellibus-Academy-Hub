import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button-variants";

interface TextLinkBaseProps {
  children: ReactNode;
  className?: string;
}

interface InternalTextLinkProps extends TextLinkBaseProps {
  to: string;
  external?: false;
}

interface ExternalTextLinkProps extends TextLinkBaseProps {
  to: string;
  external: true;
  ariaLabel?: string;
}

export type TextLinkProps = InternalTextLinkProps | ExternalTextLinkProps;

export function TextLink(props: TextLinkProps) {
  if (props.external) {
    const { ariaLabel, children, to } = props;

    return (
      <a
        aria-label={ariaLabel}
        className={cn(buttonVariants({ variant: "external" }), props.className)}
        href={to}
        rel="noreferrer"
        target="_blank"
      >
        {children}
        <span className="sr-only">opens in a new tab</span>
      </a>
    );
  }

  return (
    <Link
      className={cn(buttonVariants({ variant: "text" }), props.className)}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}
