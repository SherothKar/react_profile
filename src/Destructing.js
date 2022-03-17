import React, { Component } from 'react'
// -----------Destructing Functional Component---------------
/* One way to Destructing
const Destructing  = ({name, position})=>{
    return (
      <div>
        <h1>Destructing in parametere without using this. Name - {name}, Role - {position}</h1>
      </div>
    )
  }
*/
/* Another way
const Destructing  = props =>{
    const {name, position} = props
    return (
      <div>
        <h1>Destructing in parametere without using this. Name - {name}, Role - {position}</h1>
      </div>
    )
  }
  */
// -----------Destructing class Component---------------
 
class Destructing extends Component {

    render(){
        const {name, position} = this.props
    return (
      <div>
       
   <h1>Destructing class Component Name - {name},position - {position} </h1>
      </div>
    );
  }
}
export default Destructing
