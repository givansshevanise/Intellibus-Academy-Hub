import { Link } from "react-router-dom";

import { Button } from "../ui/button";

export interface ErrorStateProps {
  title: string;
  message: string;
  action?: {
    label: string;
    href: string;
  };
}

export function ErrorState({ action, message, title }: ErrorStateProps) {
  return (
    <section
      className="academy-container flex min-h-64 items-center justify-center py-16"
      role="alert"
    >
      <div className="max-w-2xl rounded-[var(--radius-component)] border border-border bg-card p-8 text-center shadow-soft">
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        <p className="mt-3 text-muted-foreground">{message}</p>
        {action ? (
          <Button asChild className="mt-6" variant="primary">
            <Link to={action.href}>{action.label}</Link>
          </Button>
        ) : null}
      </div>
    </section>
  );
}
