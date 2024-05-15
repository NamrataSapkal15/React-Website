import React  from "react";



const Contact = ()=>{

    return(

        <>

<div className="container mt-5 ">
        <h2 className="text-center  top">Contact Us</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Modi dicta minima dolores
            fuga, voluptatibus qui?</p>

            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label"></label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name"/>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label"></label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label" ></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary  mt-3" type="button"><strong>Send Now</strong></button>
               
              </div>

    </div>
</>



    );
}



export default Contact;