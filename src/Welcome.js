import React from "react";
import { Component } from "react/cjs/react.production.min";
// using class function calling props syntax
class Welcome extends Component{
    render(){
        return(
<div>
    <h1>Welcome Props in class component {this.props.name}</h1>
</div>

        )
    }
}
export default Welcome;