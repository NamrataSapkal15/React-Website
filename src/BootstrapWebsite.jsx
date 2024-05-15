import react  from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const BootstrapWebsite= ()=>{
return(
<>
<div className="container-fluid bg-warning ">
<h1 className="text=white, text-center">Welcome to my channel</h1>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4 mt-5" >
  <div class="col ">
    <div class="card">
      <img src="https://picsum.photos/200/301" class="card-img-top" alt="..."height="200px"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/302" class="card-img-top" alt="..."height="200px"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/303" class="card-img-top" alt="..."height="210px"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>

</div>

</>
);
}




export default BootstrapWebsite;