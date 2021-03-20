import React from "react";
import {NavLink} from "react-router-dom";
// import "./index.css";


const HomeNavbar =()=>{
   return( <>
   <div className="header">
    <NavLink to="/" className="navlink">home  </NavLink>
    <NavLink to="/About" className="navlink">About </NavLink>
    <NavLink to="/CompanyProfilePage" className="navlink">Comapny Profile </NavLink>
    
    </div>
    </>
   )
}

export default  HomeNavbar;
