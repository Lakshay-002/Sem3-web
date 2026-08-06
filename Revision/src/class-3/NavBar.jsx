import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="Nav">
       
        <Link to={'/'}><li>Home</li></Link>
         <Link to={'/about'}><li>About</li></Link>
         <Link to={'/contactus'}><li>ContactUs</li></Link>
        <Link to={'/list'}><li>list</li></Link>
        

    </div>
  )
}

export default NavBar
