import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incerement() {
        this.setState({
            count: this.state.count + 1

        }, () => console.log('Call back value', this.state.count))
        console.log(this.state.count);
    }
    render() {
        return (
            <div>
                <div className='my-5'></div>
                <h3>Couter  = {this.state.count}</h3>
                <button className='btn btn-primary' onClick={() => this.incerement()}>incerement</button>
            </div>
        )
    }
}

export default Counter
