import { useState } from 'react';

export function ColorBox() {
  const [hue, setHue] = useState(0);
  return (
    <div
      onClick={() => setHue(h => (h + 60) % 360)}
      style={{
        margin: '2rem auto',
        width: '100px',
        height: '100px',
        backgroundColor: `hsl(${hue}, 70%, 80%)`,
        cursor: 'pointer'
      }}
    />
  );
}