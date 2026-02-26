import { Component } from 'react';
import type { ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { error: Error | null; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: '#020408', color: '#00e5ff', fontFamily: 'monospace',
          padding: '2rem', textAlign: 'center', gap: '1rem'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>⚠ render crash</div>
          <div style={{ color: '#ff6b6b', fontSize: '0.9rem', maxWidth: '600px', wordBreak: 'break-all' }}>
            {this.state.error.message}
          </div>
          <pre style={{ color: '#4a7a9b', fontSize: '0.75rem', maxWidth: '700px', overflow: 'auto', textAlign: 'left' }}>
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
