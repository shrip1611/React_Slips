//Q.2) Write a program for react application, Create Counter button, when click on 
// button then keep track of how many times the button was clicked using “useRef” 
// hook. 

// import React,{useRef} from 'react'

// const Ref = () => {
//     const countRef = useRef(0);

//     const Click = () => {
//         countRef.current += 1;
//         console.log(`Button clicked ${countRef.current} times`);
//     };

//     return (
//         <>
//             <h2>Counter using useRef</h2>
//             <button onClick={Click}>
//                 Click me
//             </button>
//         </>
//     )
// }

// export default Ref



import React, { useRef } from 'react'

const Ref = () => {

  const store=useRef(0)

  const click=()=>{
    store.current += 1
    console.log(`Button is clicked ${store.current} times`)
  }

  return (
    <>
    <h1>Output on console</h1>
    <button onClick={click}>Click Me</button>
    </>
  )
}

export default Ref