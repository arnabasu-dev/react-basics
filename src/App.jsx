import { useState } from "react"
import Post from "./Posts"
const App = ()=> {
  let [post, setPost]= useState([])

  const addPost = ()=> {
    setPost([...post, <Post name="Mr. Brown"
    age={2}
    dp="https://shorturl.at/8zw6P"/>])
  }
  return <>
    <div>
      <button onClick={addPost}>Add</button>
    </div>
    {post}
    </>
}

export default App