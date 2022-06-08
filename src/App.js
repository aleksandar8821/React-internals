import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    setCounter((prevState) => prevState + 1);
  };

  console.log("rendered");

  return (
    <>
      <button type="button" onClick={increaseByOne}>
        Click me!
      </button>
      <br />
      <br />
      You clicked {counter} times!
    </>
  );
}

export default App;
