import { Component, type ErrorInfo, type ReactNode } from "react";

import { ErrorState } from "../components/academy/ErrorState";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Application render failure", { error, errorInfo });
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorState
          title="Something went wrong"
          message="Refresh the page or return home to keep browsing the Academy Hub."
          action={{ label: "Return home", href: "/" }}
        />
      );
    }

    return this.props.children;
  }
}
