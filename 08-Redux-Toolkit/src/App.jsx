import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Logos Section */}
      <div className="flex space-x-6 p-4">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-20 h-20 transition-transform hover:scale-110" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-20 h-20 transition-transform hover:scale-110" alt="React logo" />
        </a>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold mt-6">Vite + React + Redux</h1>

      {/* Counter Section */}
      <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-3 bg-green-500 rounded-lg text-white font-semibold text-xl transition-transform hover:scale-105 hover:bg-green-600"
          >
            +
          </button>
          <span className="text-3xl font-bold">{count}</span>
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-3 bg-red-500 rounded-lg text-white font-semibold text-xl transition-transform hover:scale-105 hover:bg-red-600"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
