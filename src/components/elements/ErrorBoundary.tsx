// ErrorBoundary.tsx
import React from "react";

interface ErrorBoundaryProps {
  fallback: (props: {
    error: Error | null;
    reset: () => void;
  }) => React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback({
        error: this.state.error,
        reset: () => this.setState({ hasError: false }),
      });
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
