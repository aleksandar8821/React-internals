import { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    setCounter((prevState) => prevState + 1);
  };

  console.log("rendered");

  return (
    <div>
      <button onClick={increaseByOne}>Count - {counter}</button>
      <button onClick={() => setCounter(0)}>Count to 0</button>
      <button onClick={() => setCounter(5)}>Count to 5</button>
      <br />
      <br />
      <img src={require("./img/safety-net-re-render.png")} />
    </div>
  );
}

export default UseState;
