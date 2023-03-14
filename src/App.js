import { useState } from "react";

function App() {
  const [foodStores, setFoodStores] = useState(["Narandza", "Univer"]);

  return (
    <>
      {foodStores.map(store => <div>{store}</div>)}
      <button onClick={() => setFoodStores([...foodStores, "Jordan"])}>Add</button>
      <br />
      <br />
      <div id="imgContainer">
        <img src={require("./img/list3.png")} />
        <img src={require("./img/list1.png")} />
      </div>
      <div id="imgContainer">
        <img src={require("./img/list2.png")} />
        <img src={require("./img/list1.png")} />
      </div>
    </>
  );
}

export default App;
