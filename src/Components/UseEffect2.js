import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

export default function UseEffect2() {
const [x,setX] = useState(0);
const [y,setY] = useState(0);
const logMousePos = e => {
    setX(e.clientX);
    setY(e.clientY);
    console.log("Event Listening");
}
useEffect(()=>{
    console.log('useEffect call.')
    window.addEventListener('mousemove',logMousePos);

    return () =>{
        console.log('willUnmount');
        window.removeEventListener('mousemove',logMousePos); 
    }

},[]);//if u use empty array call only once on first time that event happen


    return (
    <div>

x:{x}
y:{y}
    </div>
  )
}
