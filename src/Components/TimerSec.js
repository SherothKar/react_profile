import React, { useEffect,useState } from 'react'
 

 function TimerSec(props) {
    const [sec, setSec] = useState(0);
 

    const callTime = () => {
        setSec(prevsec => prevsec + 1 );
    }
  
    useEffect(() => {
       let interval = setInterval( callTime, 1000);
   
       return()=>{
           clearInterval(interval);
        //    setSec(sec);/
       }
    },[sec]);
   
    return (
        <div>
<h1> {sec}</h1>
<h3>
    Im Props form app
{props.name}
</h3>
        </div>
    )
}

export default TimerSec;
