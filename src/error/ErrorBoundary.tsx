import * as React from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
  }

  public render() {
    return this.state.hasError ? <p>Oh dear - something went terribly wrong! 🤕🚑</p> : this.props.children;
  }
}
