import React from "react";
import { Component } from "react/cjs/react.production.min";

class StateExample extends Component{
    constructor(){
        super()
        this.state = { 
message : 'Welcome I am a value from Constructor' 
        }
    }
    changeMessage(){
        this.setState({
            message : 'Hareram'
        })
    }
    render()
    {
        return(
            <div>
<h1>Welcome to state static, Dynamic {this.state.message}</h1>
<button onClick={() => this.changeMessage()}>change dynamic text to Hareram</button>
            </div>

        )
    }
}

export default StateExample