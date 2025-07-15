import { useState } from 'react';
import { ColorBox } from './components/ColorBox';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1>👋 Welcome to My React + TS Site</h1>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
      >
        Count: {count}
      </button>
      <ColorBox />
    </div>
    
    
  );
}
