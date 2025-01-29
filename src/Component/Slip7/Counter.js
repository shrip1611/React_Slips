// Q.2 Create a simple React component called counter that displays a number and has two: 
// buttons "Increment" and "Decrement." The number should start at 0 and change when 
// the buttons are clicked. (using class component)  
// a. Use state to manage the number.  
// b. Pass the initial number as a prop to the Counter component.   

// import React, { Component } from 'react'

// export default class Counter extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           count: props.num 
//         };
//       }
    
//       Increment = () => {
//         this.setState((State) => ({
//           count: State.count + 1,
//         }));
//       };
    
//       Decrement = () => {
//         this.setState((State) => ({
//           count: State.count - 1,
//         }));
//       };

//     render() {
//         return (
//             <>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick={this.Increment}>Increment</button>
//                 <button onClick={this.Decrement}>Decrement</button>
//             </>
//         )
//     }
// }




import React, { Component } from 'react'

export default class Counter extends Component {

  constructor(props){
    super(props);
    this.state={
      count: props.num
    };
  }

  Inc=()=>{
    this.setState((State)=>({
      count:State.count + 1
    }))
  }

  Del=()=>{
    this.setState((State)=>({
      count:State.count -1
    }))
  }
  
  render() {
    return (
      <>
      <h1>Countar : {this.state.count}</h1>
      <button onClick={this.Inc}>Inc</button>
      <button onClick={this.Dec}>Dec</button>
      </>
    )
  }
}
