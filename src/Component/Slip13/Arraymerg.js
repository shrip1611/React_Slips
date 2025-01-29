// Q.2 Print below array elements using map into the screen     
// Let fruits1 = ["apple", "banana”,” guava”, “Almond”];  
// Let fruits2 = ["cherry", "orange",” banana”, “Mango”, “Avocado”]; 
// a. Merge both fruits array using spread operator  
// b. print last two elements in array  

// import React from 'react';

// const Arraymerg = () => {
//   const fruits1 = ["apple", "banana", "guava", "Almond"];
//   const fruits2 = ["cherry", "orange", "banana", "Mango", "Avocado"];

//   const mergedFruits = [...fruits1, ...fruits2];

//   const twoFruits = mergedFruits.slice(-2);

//   return (
//     <>
//       <h1>Merged Fruits List</h1>
     
//         {mergedFruits.map((fruit) => (
//           <p>{fruit}</p>
//         ))}
     

//       <h2>Last Two Fruits</h2>
      
//         {twoFruits.map((fruit) => (
//           <p>{fruit}</p>
//         ))}
     
//     </>
//   );
// };

// export default Arraymerg;


import React from 'react'

const Arraymerg = () => {

  const fruits1 = ["apple", "banana", "guava", "Almond"];  
  const fruits2 = ["cherry", "orange"," banana", "Mango", "Avocado"]; 

  const Merged=([...fruits1, ...fruits2])

  const Last2=Merged.slice(-2)

  return (
    <>
    <h1>Merged fruits</h1>
        {Merged.map((fruit)=>(
          <p>{fruit}</p>
        ))}
    <h1>Last two</h1>
        {Last2.map((fruit)=>(
          <p>{fruit}</p>
        ))}
    </>
  )
}

export default Arraymerg