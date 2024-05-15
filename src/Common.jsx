import React from "react";


import { NavLink } from "react-router-dom";

const Common = (props)=>{

    return(

        <>



<section id="header" className="d-flex align-item-center">  
<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto ">

           <div className="row ">


           <div className="col-sm-12 col-md-12 col-lg-6 col-12  mt-5">
                <h2 className="mt-5">{props.name} <br/> I-<span class="text-primary">Coader </span>Website</h2>
                <h3 classname="my-3"> We are the Team of talented devloper making Website</h3>
                <div className="mt-3">
                <NavLink to={props.visit} className="btn btn-primary mt-5">{props.btname}</NavLink>
                
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-12  mt-5 ">
                <img src= "/images/invantory.png" className="animated img"/>
            </div>

           </div>
            
            
        </div>
        
    </div>
</div>
</section>

</>


    );
}



export default Common;