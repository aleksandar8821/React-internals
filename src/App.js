import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("effect executed");

    // return function cleanup() {
    //   console.log("cleanup executed");
    // };
  }, [counter2]);

  return (
    <>
      <button
        type="button"
        onClick={() => setCounter((prevState) => prevState + 1)}
      >
        Counter
      </button>
      <br />
      <br />
      {counter}
      <br />
      <br />
      <button
        type="button"
        onClick={() => setCounter2((prevState) => prevState + 1)}
      >
        Counter2
      </button>
      <br />
      <br />
      {counter2}
    </>
  );
}

export default App;
