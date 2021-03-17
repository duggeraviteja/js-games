import React from "react";
import {NavLink } from "react-router-dom";


const Navbar =()=>{
    return(
        <>
 <div className="main">

 <div className="col-11 mx-auto">
   <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
 <div className="logo">    <NavLink exact activeClassName="nav-active" className="nav-link" to="/"> <p className="logo-p">PlayGames</p> </NavLink></div> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink exact activeClassName="nav-active" className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink exact activeClassName="nav-active" className="nav-link" to="/dice">Games</NavLink>
        </li>
        <li className="nav-item">
        <NavLink exact activeClassName="nav-active" className="nav-link" to="/contact"> Contact </NavLink>        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
   </div>
 </div>

      </>
    );
}
export default Navbar;
