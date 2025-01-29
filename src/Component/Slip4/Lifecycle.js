// Q.2 Implement useEffect hook and print all three-lifecycle state    
// a. E.g Inside mount  
// b. E.g Inside update  
// c. E.g Inside unmounts 
// d. fetch api data using “useEffect”   


// import React, { useEffect, useState } from "react";

//  const Lifecycle = () => {
//     const [count, setCount] = useState(0)
//     const [data, setData] = useState(null)

//     useEffect(() => {
//         console.log("Inside Mount")
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then(response => response.json())
//             .then(data => setData(data))
//             .catch(error => console.log("Error to featch data", error));
//         return () => {
//             console.log("Inside Unmount")
//         }
//     },[]);
//     useEffect(() => {
//         if (count > 0) {
//             console.log("Inside Update")
//         }
//     },[count])

//     return (
//         <>
//             <h1>Lifecycle Using useEffect</h1>
//             <h4>{count}</h4>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>

//             <h2>Data Featching</h2>
//             <div>
//                 {data ? (
//                   <div>  
//                 <p>{data.title}</p>
//                 <p>{data.body}</p>
//                 </div>
//                 ) : (
//                     <p>Loading Data...</p>
//                 )}
//             </div>
//         </>
//     )
// }
// export default Lifecycle




import React, { useEffect, useState } from 'react'

const Lifecycle = () => {
    
   const[count, setCount]=useState(0)
   const[data,setData]=useState('')

   useEffect(()=>{
    console.log("Mount")
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response=> response.json())
        .then(data=> setData(data))
        .catch(error=> console.log("error to fetch data",error))
        return()=>console.log("Unmount")
   },[])

   useEffect(()=>{
    if(count>0){
        console.log("Update")
    }
   },[count])

  return (
    <>
    <h1>Counter : {count}</h1>
    <button onClick={()=>setCount(count+1)}>Inc</button>
    <button onClick={()=>setCount(count-1)}>Dec</button>
    
    <div>
        {data?(
            <h1>
            <p>data.title</p>
            <p>data.body</p>
            </h1>
        ):(
            <h1>Loading Data ...</h1>
        )}
    </div>
    </>
  )
}

export default Lifecycle