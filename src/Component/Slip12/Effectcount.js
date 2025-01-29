// Q.2 Create react application for counter button when component was rendering first 
// time then automatically counting should be start. (Using “useEffect” hook)

// import React, { useState, useEffect } from 'react';

// const Effectcount = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let count = setInterval(() => {
//       setCount(count = count + 1);
//     }, 1000);
//     return () => clearInterval(count);
//   }, []); 

//   return (
//     <div>
//       <h1>Automatic Counter</h1>
//       <h2>{count}</h2>
//     </div>
//   );
// };

// export default Effectcount;


import React, { useEffect, useState } from 'react'

const Effectcount = () => {

  const[count, setCount]=useState(0)

  useEffect(()=>{
    const count=setInterval(()=>{
      setCount(count= count + 1)
    },1000)
    return()=>clearInterval(count)
  },[])

  return (
    <>
      <h1>Auto Counter</h1>
      <h1>Counter : {count}</h1>       
    </>
  )
}

export default Effectcount