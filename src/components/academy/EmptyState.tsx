import type { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  message: string;
  action?: ReactNode;
}

export function EmptyState({ action, message, title }: EmptyStateProps) {
  return (
    <section className="rounded-[var(--radius-component)] border border-dashed border-border bg-card p-8 text-center">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-muted-foreground">{message}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </section>
  );
}
