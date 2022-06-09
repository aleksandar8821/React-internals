import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("count value inside interval callback", count);
      setCount(count + 1);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

export default App;
