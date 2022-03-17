 
import React from "react";

// using arrow functional component  calling props syntax
const hello = (props) => {
    return(
<div>
<h1>Hello Im Props {props.name} next age {props.age}</h1>
</div>
    )
}
    // return React.createElement(
    //     'div',
    //     { id: 'hi', className: 'dummyClasscss' },
    //     React.createElement('h2', null, 'Our text here')
    // )
    // here jsx 
    //1. div is element 
    // 2. object type data
    // 3.text or string


export default hello;