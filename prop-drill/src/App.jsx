import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Count />
        <Button />
      </div>
    </>
  );
}

function Count({ count }) {
  return (
    <>
      <div>{count}</div>
    </>
  );
}

function Button() {
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount;
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount;
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
