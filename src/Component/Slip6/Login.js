// Q.2 Design login form which accepts username and password (Two text box)     
// and submit button 
// a. On submit button click it should validate username and password and 
// console log if its valid 
// b. Validity check should be simple like username: Admin &amp; password: Pass123 
// c. If any other credentials it should say unauthorized 
// d. If router name is wrong then show message is “404 Error, Page Not Found”.   

// import React,{useState} from 'react'

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');


//     const Submit = (e) => {
//         e.preventDefault();
//         if ((username === "Admin"|| username === "amp") && password === 'Pass123') {
//             console.log('Login successful');
//             setMessage('Login successful');
//         } else {
//             console.log('Unauthorized');
//             setMessage('Unauthorized');
//         }
//     };

//     return (
//         <>
//             <h1>Login</h1>
//             <form onSubmit={Submit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//             {message}
//         </>
//     )
// }

// export default Login


import React, { useState } from 'react'

const Login = () => {

  const[username, setUsername]=useState('')
  const[password, setPassword]=useState('')
  const[message, setMessage]=useState('')

  const submit=(e)=>{
    e.preventDefault();
    if(username==='Admin'||'amp' && password ==='Pass123'){
      console.log("Login Authorised")
      setMessage("Login Authorised")
    }
    else{
      console.log("Login Unauthorised")
      setMessage("Login Unauthorised")
    }
  }

  return (
    <>
      <label>Username : </label>
      <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br/><br/>
      <label>Password : </label>
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/><br/>
      <button onClick={submit}>Submit</button>
      {message}   
    </>
  )
}

export default Login