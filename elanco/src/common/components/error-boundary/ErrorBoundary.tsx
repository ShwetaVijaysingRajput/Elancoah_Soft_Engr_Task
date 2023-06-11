import React, { Component } from "react";
interface StateType {
  hasError: boolean;
}
export class ErrorBoundary extends Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1 color="red">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
