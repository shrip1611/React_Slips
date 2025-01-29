// Q.2 Create a basic to do list application: (use useState() )  
// a. Build a component for adding, displaying, and deleting tasks. 
// b. Use state to manage the list of tasks. 
// c. Add a form for users to input new tasks. 
// d. Display the list of tasks and provide a button to remove them. 
// e. Add a counter for the total number of tasks. 

// import React,{useState} from 'react'

// const Todo = () => {

//     const [tasks, setTasks] = useState([]);
//     const [newtask, setNewtask] = useState('');

//     const AddTask = () => {
//         if (newtask.trim() !== '') {
//           setTasks([...tasks, newtask]);
//           setNewtask('');
//         }
//       };

//       const DeleteTask = (index) => {
//         const newTasks = tasks.filter((_,i) => i !== index);
//         setTasks(newTasks);
//       };

//     return (
//         <>
//             <h1>Todo List</h1>
//             <input
//                 type="text"
//                 value={newtask}
//                 onChange={(e) => setNewtask(e.target.value)}
//                 placeholder="Enter a new task"
//             />
//             <button onClick={AddTask}>Add Task</button>
//             <h2>Total Tasks: {tasks.length}</h2>
//             <ul>
//                 {tasks.map((task, index) => (
//                     <li key={index}>
//                         {task}
//                         <button onClick={() => DeleteTask(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }

// export default Todo


import React, { useState } from 'react'

const Todo = () => {
   const[newt, setNewt]=useState('')
   const[tasks,setTasks]=useState([])

   const Add=()=>{
    if(tasks.trim() !== ' '){
        setTasks([...tasks, newt])
        setNewt(' ')
    }
   }

   const Delete=(index)=>{
       const newt=tasks.filter((_,i)=>i !== index)
       setTasks(newt)
   }

  return (
    <>
    <h1>Todo List : </h1>
    <input type='text' value={newt} onChange={(e)=>setNewt(e.target.value)}/>
    <button onCanPlay={Add}>Add</button>
    <h1>Total Tasks : {tasks.length}</h1>

    <ul>
        {tasks.map((task,index)=>(
            <li>{task}
            <button onClick={()=>Delete(index)}>Delete</button>
            </li>
        ))}
    </ul>
    
    </>
  )
}

export default Todo