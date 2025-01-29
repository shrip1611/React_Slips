//Q.2) Write a program for react application, create a button that toggles between ON and             
// OFF states when clicked.

// import React, { useState } from 'react'

// const Toggle = () => {

//     const [on, setOn] = useState(true);
    
//     const change= () =>{
//         setOn(on => !on);
//     }
//   return (
//     <>
//        <h1>{on? 'Button is ON' : 'Button is OFF'}</h1>
//         <button onClick={change}>{on? 'ON' : 'OFF'}</button>   
//     </>
// )
// }

// export default Toggle



import React, { useState } from 'react'

const Toggle = () => {

  const[on, setOn]=useState(true)

  const change=()=>{
    setOn(on=> !on)
  }

  return (
    <>
      <h1>{on? 'toggle is on' : 'toggle is off'}</h1>
    <button onClick={change}>{on? 'ON':'OFF'}</button>
    
    </>
  )
}

export default Toggle