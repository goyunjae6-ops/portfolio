import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-cream px-6 text-center text-ink">
          <p className="text-xl font-semibold">문제가 발생했습니다.</p>
          <p className="text-sm text-muted">페이지를 새로고침해 주세요.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
