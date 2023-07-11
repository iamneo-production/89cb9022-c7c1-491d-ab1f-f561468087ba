import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon.gif";
function Navbar() {
    // const navigate = useNavigate();
    return ( 
        <>
        <div className="navbar">
            <div className="heading">
                <Link to = "/landing"><h1>Fitness Tracker</h1></Link>
            </div>
                
            <div className="link">
                <Link to = "/login" ><h3>Login</h3></Link>
                
                                      
            </div>
            
        </div>
        </>
     );
}

export default Navbar;