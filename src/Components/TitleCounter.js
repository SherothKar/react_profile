import React, { Component } from 'react'
import Dummy from './Dummy';


export class TitleCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            display: true,
        }
    }
    componentDidMount(){
        document.title =`hi im ${this.state.count}`
        console.log('mouting..');
    }
    componentDidUpdate(){
        document.title =`hi im ${this.state.count}`
        console.log('update');
        
    }
    componentWillUpdate(){
         console.log('removing..wait');
    }

    delete = () => {
      this.setState({ display: false });
    };
    render() {
        let comp;
        if (this.state.display) {
          comp = <Dummy />;
        }
        return (
            <div>
                {comp}
                counts - {this.state.count}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <button onClick={this.delete}>Delete what can i do for comp</button>
            </div>
        )
    }
}

export default TitleCounter;


// import React from 'react'
// import { useEffect, useState } from 'react/cjs/react.development';

// function TitleCounter() {
//  const [count, setCount] = useState(0);
//  useEffect(()=>{
// document.title =`"You are clicks" ${count}`;
//  },[count])
//   return (
//     <div>
//        <p>Count - {count}</p>
//       <button onClick={()=> setCount(count+1)}>count+</button>
//     </div>
//   )
// }
// export default  TitleCounter;

