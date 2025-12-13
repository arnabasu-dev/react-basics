import { useState } from "react"

const Post = ({ dp, name, age})=> {
  return ( <>
  <div style={{borderRadius: 10, display: "flex", margin: 20, padding: 20}}>
    <div >
      <img style={{width: 100, height: 150}} src={dp}/>
    </div>
    <div>
      <h2>{name} </h2>
    </div>
    <div>
      <h2>{age}</h2>
    </div>
  </div>
  </>)
}

export default Post