import React from 'react'
import { useState } from 'react/cjs/react.development'
import TimerSec from './TimerSec'

export default function StopTime() {
    const [check,setCheck] = useState(true);
  return (
    <div>
      <button onClick={() => setCheck(!check)}>Stop</button>
      {check && <TimerSec />}
    </div>
  )
}
