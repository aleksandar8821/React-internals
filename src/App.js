import useFetch from "./useFetch";

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data, loading, error } = useFetch(url);

  console.log("component call");

  return (
    <>
      <h1>Posts</h1>
      {data?.map(post => <>
        <h3>{post.title}</h3>
        <div>{post.body}</div>
      </>)}
    </>
  );
}

export default App;
