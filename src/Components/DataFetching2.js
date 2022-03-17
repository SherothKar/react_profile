import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DataFetching2(props) {
const [post,setPost] = useState([]); 
const [id,setId] = useState(1); 
const [btnid,setBtnId] = useState(1);
useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/posts/${btnid}`)
.then((res) =>{ 
    setPost(res.data);
     console.log(res);
 })
.catch((error) =>{
    if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        
      }

})
},[btnid])
function bindBtnClick(){
    setBtnId(id);
}
  return (
    <div>
      Search using btn  <input  type='text' placeholder='Search this using button' value={id} onChange={e => setId(e.target.value)}/>
        
<button onClick={bindBtnClick}>Search</button>

{post.title}
<h3>
    Im Props form app
{props.name}
</h3>
        <ul>

      {/* {
          post.map((data) =>(
<li key={data.id}>{data.title}</li>
          )
          )
      } */}
      </ul>
    </div>
  )
}
