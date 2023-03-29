import useFetch from "./useFetch";
import { useEffect } from "react";

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { makeRequest, data, loading, error } = useFetch(url);

  // useEffect(() => {
  //   makeRequest(url);
  // }, [makeRequest])

  console.log("component call");

  return (
    <>
      <h1>Posts</h1>
      <button onClick={() => makeRequest(url)}>Fetch posts</button>
      {data?.map(post => <div key={post.title}>
        <h3>{post.title}</h3>
        <div>{post.body}</div>
      </div>)}
    </>
  );
}

export default App;
