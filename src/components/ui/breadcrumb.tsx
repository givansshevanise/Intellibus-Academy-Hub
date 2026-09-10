import { Slot } from "@radix-ui/react-slot";
import type { ComponentPropsWithoutRef, HTMLAttributes, LiHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "../../lib/utils";

export function Breadcrumb(props: HTMLAttributes<HTMLElement>) {
  return <nav aria-label="Breadcrumb" {...props} />;
}

export const BreadcrumbList = forwardRef<
  HTMLOListElement,
  HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("flex flex-wrap items-center gap-2 text-sm text-muted-foreground", className)}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = forwardRef<
  HTMLLIElement,
  LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("flex items-center gap-2", className)} {...props} />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

export interface BreadcrumbLinkProps
  extends ComponentPropsWithoutRef<typeof Slot> {
  asChild?: boolean;
}

export function BreadcrumbLink({
  asChild,
  className,
  ...props
}: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn(
        "font-semibold text-primary hover:text-[var(--academy-blue-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}

export function BreadcrumbPage({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return <span aria-current="page" className={className} {...props} />;
}

export function BreadcrumbSeparator({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span aria-hidden="true" className={cn("text-muted-foreground", className)} {...props} />
  );
}
