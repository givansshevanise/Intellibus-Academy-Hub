export interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = "Loading" }: LoadingStateProps) {
  return (
    <div
      aria-live="polite"
      className="academy-container flex min-h-64 items-center justify-center py-16"
      role="status"
    >
      <div className="flex items-center gap-3 text-muted-foreground">
        <span
          aria-hidden="true"
          className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent"
        />
        <span className="font-medium">{label}</span>
      </div>
    </div>
  );
}
