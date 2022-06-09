import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("effect executed with counter value: ", counter);

    return function cleanup() {
      // Intro to stale closures
      console.log("cleanup executed with counter value: ", counter);
    };
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(Math.floor(Math.random() * 10));
  //   }, 1000);

  //   return function cleanup() {
  //     clearInterval(interval);
  //   };
  // });

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
