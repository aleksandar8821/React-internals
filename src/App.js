import { useState } from "react";
import { Rating } from "./Rating";

function App() {
  const [foodStores, setFoodStores] = useState(["Narandza", "Univer"]);

  return (
    <>
      {foodStores.map(store => <Rating name={store} />)}
      <button onClick={() => setFoodStores(["Jordan", ...foodStores])}>Add</button>
    </>
  );
}

export default App;
