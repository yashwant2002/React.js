import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center  inset-x-0 px-2">
          <div className="bg-white rounded-3xl flex flex-wrap justify-center gap-3 py-2 px-3">
            <button
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("black")}
              style={{ backgroundColor: "black" }}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            >
              Black
            </button>
            <button
              onClick={() => setColor("purple")}
              style={{ backgroundColor: "purple" }}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            >
              Purple
            </button>
            <button
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            >
              Green
            </button>
            <button
              onClick={() => setColor("grey")}
              style={{ backgroundColor: "grey" }}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            >
              Grey
            </button>
            <button
              onClick={() => setColor("olive")}
              style={{ backgroundColor: "olive" }}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            >
              Olive
            </button>
            <button
              onClick={() => setColor("magenta")}
              style={{ backgroundColor: "magenta" }}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            >
              Magenta
            </button>
            <button
              onClick={() => setColor("navy")}
              style={{ backgroundColor: "navy" }}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            >
              Navy
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
