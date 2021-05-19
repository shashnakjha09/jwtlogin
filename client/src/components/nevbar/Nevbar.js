import React , {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../../image/logo.jpg"
import {NavLink} from 'react-router-dom'
import {UserContext} from "../../App"

import "./Navbar.css"
function Nevbar() {
    
    const {state , dispatch} = useContext(UserContext)
    
    const Randermenu = () =>{
           if(state){
             return (
               <>
                <li className="nav-item active">
                <NavLink className="nav-link" to="/">HOME <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                </li>
               </>
             )
           }

           else{
             return(
               <>
               <li className="nav-item active">
               <NavLink className="nav-link" to="/">HOME <span className="sr-only">(current)</span></NavLink>
               </li>
               <li className="nav-item">
               <NavLink className="nav-link" to="/about">ABOUT</NavLink>
               </li>
               <li className="nav-item">
               <NavLink className="nav-link" to="/contact">Contact</NavLink>
               </li>
               <li className="nav-item">
               <NavLink className="nav-link" to="/login">Login</NavLink>
               </li>
               <li className="nav-item">
              <NavLink className="nav-link" to="/signup">SignUp</NavLink>
              </li>
               </>
             )
           }
    }

    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand vevbar-image" href="#"><img src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
       
       <Randermenu />
        
        
      </ul>
      
    </div>
  </nav>
        </>
    )
}

export default Nevbar
