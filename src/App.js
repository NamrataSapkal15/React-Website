import react  from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Component/Navbar";
import{Routes, Route ,} from "react-router-dom";

import Contact from "./Contact";
import Home from "./Home";
import Error from "./Error";
import Service from "./Service";
import Footer from "./Footer"
import About from "./About";


const App= ()=>{
    
return(
<>
<Navbar/>

<Routes>
<Route path="/"  element={<Home/>}/>
    
    <Route path="/contact"  element={<Contact/>}/>
    <Route path="*"  element={<Error/>}/>
    <Route path="/service"  element={<Service/>}/>
    <Route path="/about"  element={<About/>}/>
   



</Routes>


<Footer/>
</>
);
}




export default App;