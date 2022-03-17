import React from 'react'
import { useState } from 'react/cjs/react.development';

const CounterOnFcomp = () => {
  const intial = 0;
    let [count,setCount] = useState(intial);
    const incrementFive =() =>{
        for (let i = 0; i < 5; i++) {
            setCount(prevcount => prevcount + 1); 
        }
    }
  return (
    <div>
      <h1>Count using usestate</h1>
count : {count}
<div>
<button onClick={()=> setCount(prevcount => prevcount + 1) }>increment</button>
<button onClick={()=> setCount(prevcount => prevcount - 1) }>decrement</button>
<button onClick={()=> setCount(intial) }>Reset</button>
<button onClick={incrementFive}>+5</button>
</div>
    </div>
  )
}

export default CounterOnFcomp;
