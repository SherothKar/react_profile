// import React, { useReducer } from 'react'
// // Couter Program Uncomment to see
// export default function UseReducerCounter() {
//     const initialState = 0;
//     const reducer = (state, action) => {
//         console.log("State" + state+'Action'+action);
//         switch (action) {
//             case 'increment':
//                 return state + 1;
//                 break;
//             case 'decrement':
//                 return state - 1;
//                 break;
//             case 'reset':
//                 return initialState;
//                 break;
//             default:
//                 return state
//                 break;
//         }
//     }
//   const [count,dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             Usereducer Count : {count}
//             <button onClick={() => dispatch('increment')}>+</button>
//             <button onClick={() => dispatch('decrement')}>-</button>
//             <button onClick={() => dispatch('reset')}>0</button>

//         </div>
//     )
// } counter level1


import React, { useReducer } from 'react'
// Couter Program using object   Uncomment to see
export default function UseReducerCounter() {
    const initialState = {
firstCounter : 0,
    };
    const reducer = (state, action) => {
        // console.log("State" + state+'Action'+action);
        switch (action.type) {
            case 'increment':
                return {firstCounter : state.firstCounter + action.value};
           
            case 'decrement':
                return {firstCounter : state.firstCounter - action.value};
                case 'increment5':
                    return {firstCounter : state.firstCounter + action.value};
               
                case 'decrement5':
                    return {firstCounter : state.firstCounter - action.value};
               
            case 'reset':
                return initialState;
           
            default:
                return state
                break;
        }
    }
  const [count,dispatch] = useReducer(reducer, initialState)
    return ( 
        <div>
            Usereducer Count : {count.firstCounter}
            <button onClick={() => dispatch({type:'increment',value:1})}>+1</button>
            <button onClick={() => dispatch({type:'decrement', value:1})}>-1</button>
            <button onClick={() => dispatch({type:'increment5', value:5})}>+5</button>
            <button onClick={() => dispatch({type:'decrement5', value:5})}>-5</button>
            <button onClick={() => dispatch({type:'reset'})}>0</button>

        </div>
    )
}
