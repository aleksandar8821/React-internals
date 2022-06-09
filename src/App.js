import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((previousCount) => previousCount + 1);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

export default App;
