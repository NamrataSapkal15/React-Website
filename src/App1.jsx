import React  from "react";

import Contact from "./Contact";
import Home from "./Home";
import Error from "./Error";

import{BrowserRouter, Route , Routes }from "react-router-dom";



const App1 =()=>{
 return(
<>


<BrowserRouter>


<Routes>
<Route path="/"  element={<Home/>}/>
    <Route path="/about/:fname/:lname"  element={<About/>}/>
    <Route path="/contact"  element={<Contact/>}/>
    <Route path="*"  element={<Error/>}/>



</Routes>

</BrowserRouter>

</>

 )

};

export default App1;