function App() {
  const markup = <div>
    <h1 id="title">
      Hello World!
    </h1>
  </div>

  console.log(markup)

  return (
    <>
      {markup}
      <br />
      <br />
      <div id="container">
        <img src={require("./img/initial-render.png")} />
        <br />
        <br />
        <hr />
        <img src={require("./img/re-render.png")} />
        <br />
        <br />
        <hr />
        <img src={require("./img/re-render-discarded.png")} />
        <h3>Re-render &#x2260; Updating the DOM</h3>
      </div>
    </>
  );
}

export default App;

// const output = {
//   $$typeof: Symbol(react.element),
//   key: null,
//   props: {
//     children: {
//       $$typeof: Symbol(react.element),
//       key: null,
//       props: {
//         children: "Hello World!",
//         id: "title",
//       },
//       ref: null,
//       type: "h1"
//     },
//   },
//   ref: null,
//   type: "div"
// }