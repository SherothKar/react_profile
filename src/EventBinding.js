import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message :'hellow'
      }
    }
    
  render() {
    return (
      <div>
<button>Click</button>        
      </div>
    )
  }
}

export default EventBinding
