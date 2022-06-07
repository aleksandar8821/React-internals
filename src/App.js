function App() {
  const markup = <div>
    <h1 id="title">
      Hello World!
    </h1>
  </div>

  console.log(markup)

  return markup;
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