import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="text-6xl text-red-600">{count}</div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count+
        </button>
      </div>
    </div>
  );
}

export default App;
