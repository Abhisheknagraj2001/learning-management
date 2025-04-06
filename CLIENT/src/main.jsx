import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import App from './App.jsx'
import "tailwindcss/tailwind.css";
import { Provider } from 'react-redux';
import { appStore } from './app/store';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("❌ Caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong in the app.</h2>;
    }

    return this.props.children;
  }
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
    <Provider store={appStore}>
      <App />
    </Provider>
    </ErrorBoundary>

  </StrictMode>,
)
