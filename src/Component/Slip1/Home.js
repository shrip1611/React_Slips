// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = ()=>{
//     const profile = useNavigate();

//     const Goto= ()=>{
//         profile('/Profile');
//     }
//     return(
//         <>
//         <h1>Wel-Come to home page</h1>
//         <button onClick={Goto}>Go To Profile</button>
//         </>
//     )
// }
// export default Home


import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const profile = useNavigate();

  const goto=()=>{
    profile('/Profile')
  }

  return (
    <>
     <h1>Wel-come to home page</h1>
     <button onClick={goto}>profile</button>
    </>
  )
}

export default Home