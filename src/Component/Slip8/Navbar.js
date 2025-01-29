// Build a multi-page React application that includes two pages: "Home" and "About."             
// a. Create a navigation bar with links to the "Product" and "Your Order" pages. 
// b. Implement routing using a library like React Router.  
// c. Each page should have a unique URL and content (any).  
// If router name is wrong then show message is “404 Error, Page Not Found”. 

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
    
          <Link to="/">Home</Link>
      
          <Link to="/about">About</Link>
       
          <Link to="/product">Product</Link>
       
          <Link to="/order">Your Order</Link>
       
        </nav>
    </>
)
}

export default Navbar