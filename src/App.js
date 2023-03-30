import { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 10000;

  function handleChange(e) {
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    })
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {
        list.map((item, index) => {
          return <div key={index}>{item}</div>
        })
      }
    </>
  );
}

export default App;
