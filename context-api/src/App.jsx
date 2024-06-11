import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CountContext } from "./components/context";

function App() {
  const [count, setCount] = useState(0);

  //wrap anyone that wants to use the teleported value inside the provider

  return (
    <>
      <div>
        <CountContext.Provider value={{ count, setCount }}>
          <Count />
        </CountContext.Provider>
      </div>
    </>
  );
}

function Count() {
  const { count } = useContext(CountContext);
  return (
    <>
      <div>{count}</div>
      <Button />
    </>
  );
}

function Button() {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

function Countrenderer() {
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
