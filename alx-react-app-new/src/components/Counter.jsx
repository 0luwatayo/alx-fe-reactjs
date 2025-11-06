import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '40px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      width: '250px',
      margin: '40px auto'
    }}>
      <h2>React Counter</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: '5px', padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ margin: '5px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ margin: '5px', padding: '10px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
