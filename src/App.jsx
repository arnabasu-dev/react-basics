import { useState } from "react"
import Post from "./Posts"
const App = ()=> {
  let [post, setPost]= useState([{   //post is an array of objects which has the properties of a Component
    name: "Mr Brown",
    age: 2,
    dp: "https://shorturl.at/8zw6P"
  }]) 

  //whats missing here is that the post array is not dynamic and needs to be updated in real time by adding more objects in the array.
  // mapping postComponent to render <Post> Component in real time using the {post} state variable
  let postComponent = post.map(p => <Post name={p.name}   //postComponent is created in real time as post changes which adds another component in the postComponent array.
  age={p.age}
  dp={p.dp}/>)

  const addPost = ()=> {
    setPost([...post, {          // adding new objects to the post array will render the app and add another component into postComponent 
      name: "Mr Tuffy",
      age: 3,
      dp: "https://shorturl.at/8zw6P"
    }])
  }
  return <>
    <div>
      <button onClick={addPost}>Add</button>
    </div>
    {postComponent}
    </>
}

export default App