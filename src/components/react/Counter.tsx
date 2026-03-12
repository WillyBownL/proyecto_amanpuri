import { useState } from 'react';

/**
 * Componente React de ejemplo - puedes usar client:load, client:idle o client:visible
 * para hidratar componentes React en Astro
 */
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      padding: '1rem', 
      background: '#f0f0f0', 
      borderRadius: '8px', 
      textAlign: 'center',
      margin: '1rem 0'
    }}>
      <p style={{ margin: '0 0 0.5rem 0' }}>Contador (React): {count}</p>
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{ 
          padding: '0.5rem 1rem', 
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid #667eea',
          background: '#667eea',
          color: 'white'
        }}
      >
        +1
      </button>
    </div>
  );
}
