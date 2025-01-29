// Q.2 Build a multi-page React application that includes two pages “Home” and “Profile”; 
// a. Create a navigation bar with links to the “Home” and “Profile” pages. 
// b. Implement routing using a library like React Router. 
// c. Each page should have a unique URL and content (any). 
// d. “useNavigate” hook to transfer routes one page to another page. 


import React from "react";
import { Link } from "react-router-dom";


const Navigate = () => {
    return (
        <>
        <nav>
            <Link to='/Home'>Home</Link>
            <Link to='/Profile'>Profile</Link>
        </nav>
        </>
    );
}
export default Navigate



