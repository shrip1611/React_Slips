// Q.2 Create React application for Sign-In and Sign-Out functionality using “useState” 
// hook. When sign in Button clicked then display message is Hello, Welcome in 
// Home Page and sign out button is clicked then display message is “Please sign in 
// first”.
// import React, { useState } from 'react';

// const Inout = () => {
//   const [signIn, setSignIn] = useState(true);

//   const change= ()=>{
//     setSignIn(signIn =>! signIn)
//   }


//   return (
//     < >
//       <h1>{signIn ? "Hello, Welcome to the Home Page" : "Please sign in first"}</h1>
      
//       <button onClick={change}>{signIn? 'Signout' : 'SignIn'}</button> 
//     </>
//   );
// };

// export default Inout;


import React, { useState } from 'react'

const Inout = () => {

  const[sign, setSign]=useState(true)

  const change=()=>{
    setSign(sign=> !sign)
  }

  return (
    <>
      <h1>{sign? 'welcome to home':'please signin'}</h1>
      <button onClick={change}>{sign? 'SignOut':'SignIn'}</button>
    </>
  )
}

export default Inout