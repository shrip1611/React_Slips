//Q.2 Print below array elements using map into the screen.     
// a. const weekdays = [“Monday”, “Tuesday”, “Wednesday”, “Thursday”, “Friday”, 
// “Saturday”, “Sunday”]  
// b. Create drop down list using above array. 

// import React from 'react'

// const Dropdown = () => {
//     const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];  

//   return (
//     <>
//     <form className='text-center fw-bold '>
//        <label className='text-light bg-dark'>Weekdays Dropdown :   </label>
//        <select className='bg-secondary text-warning'>
//             {weekdays.map((day)=>(
//                 <option className='text-danger bg-info' value={day}>
//                     {day}
//                 </option>
//             ))}
//        </select>
//     </form>
//     </>
        
// )
// }

// export default Dropdown


import React from 'react'

const Dropdown = () => {

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]  

  return (
    <>
    <label className='bg-warning text-info'>Weekdays : </label>
    <select className='bg-secondary, text-light'>
      {weekdays.map((day)=>(
        <option className='text-danger, bg-dark'>{day}</option>
      ))}
    </select>
    
    </>
  )
}

export default Dropdown