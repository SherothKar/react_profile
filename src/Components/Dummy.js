import React, { Component } from 'react'

export class Dummy extends Component {
    componentWillUnmount() {
        // alert('The component is going to be unmounted');
        console.log('good bye');
      }
     
    render() {
    return (
      <div>
        _What can do for you?...
      </div>
    )
  }
}

export default Dummy
