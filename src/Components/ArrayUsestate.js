import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function ArrayUsestate() {
const [arry,setArry] = useState([]);
const addArray = () =>{
    setArry([...arry,{id:arry.length,number:Math.floor(Math.random()*10)+1}]);
}
    return (
        <div>
            <button onClick={addArray}>Add</button>
            <ul>
                {
                    arry.map(item =>
                        <li key={item.id}>{item.number}</li>
                    )
                    }
            </ul>
        </div>
    )
}
