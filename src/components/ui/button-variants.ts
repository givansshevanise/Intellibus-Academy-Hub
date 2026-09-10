import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex min-h-[var(--control-height)] items-center justify-center gap-2 rounded-[var(--radius-component)] px-5 text-sm font-semibold leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-55",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-[var(--academy-blue-hover)] active:bg-[var(--academy-blue-active)]",
        secondary:
          "border border-border bg-card text-primary hover:border-primary hover:bg-secondary active:bg-[var(--academy-soft-blue)]",
        ghost:
          "bg-transparent text-primary hover:bg-secondary active:bg-[var(--academy-soft-blue)]",
        text: "min-h-0 rounded-none px-0 text-primary underline underline-offset-4 hover:text-[var(--academy-blue-hover)] active:text-[var(--academy-blue-active)]",
        external:
          "min-h-0 rounded-none px-0 text-primary underline underline-offset-4 hover:text-[var(--academy-blue-hover)] active:text-[var(--academy-blue-active)]"
      },
      size: {
        default: "min-h-[var(--control-height)] px-5",
        sm: "min-h-10 px-4",
        icon: "h-[var(--arrow-target)] min-h-[var(--arrow-target)] w-[var(--arrow-target)] p-0"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);
