import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "skyblue" }}
            onClick={() => setColor("skyblue")}
          >
            skyblue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >
            lavender
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
