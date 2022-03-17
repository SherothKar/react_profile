import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DataFetching() {
const [post,setPost] = useState([]); 
const [id,setId] = useState(1); 
const [errcode,setError] = useState(''); 
useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
        setError(error);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        setError(error);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        setError(error);
      }

})
},[id,errcode])
  return (
    <div>
        <input  type='text' value={id} onChange={e=> setId(e.target.value)}/>
        {post.title}
        {errcode}
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
