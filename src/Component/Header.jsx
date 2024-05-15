import React  from "react";

import { NavLink } from "react-router-dom";



const Header= ()=> {

    return (

<>
<header>
<nav>
    <li>
        <NavLink  to="/">Home</NavLink>
    </li>
    <li>
    <NavLink to="/about">About </NavLink>
    </li>
    <li>
    <NavLink to="/contact">Contact</NavLink>
    </li>
</nav>
</header>
</BrowserRouter>
</>
);
}

export default Header;