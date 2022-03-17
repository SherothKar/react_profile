import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import UseEffect2 from './UseEffect2';
function UseEffect2Toggle() {
    const [check, setCheck] = useState(true);
  return (
    <div>
      <button onClick={() => setCheck(!check)}>Toggle</button>
      {check && <UseEffect2 />}
    </div>
  )
}
export default  UseEffect2Toggle;