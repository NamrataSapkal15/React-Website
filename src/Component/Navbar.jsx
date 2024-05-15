import REact from "react";
import { NavLink } from "react-router-dom";




const Navbar =()=>{

    return(

        <>

<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top bar">
        <div className="container">
            <h1 class=" navbar-brand"> I-<span class="text-primary">Coader </span>Website</h1>
            <ul class="navbar-nav ">
                <li className="nav-items "><NavLink  to="/" className="link , mx-2" >Home</NavLink></li>
                <li className="nav-items"> <NavLink to="/about" className="link mx-2">About</NavLink></li>
                <li className="nav-items"> <NavLink to="/service" className="link mx-2">Service</NavLink></li>
            
                <li className="nav-items"> <NavLink to="/contact" className="link mx-2">Contact</NavLink></li>
            </ul>
        </div>
    </nav>


        
        </>

        


    );
    
}

export default Navbar;
