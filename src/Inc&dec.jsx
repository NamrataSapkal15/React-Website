import react, { useState } from "react";

const Incdec = ()=>{



  const [num,setNum]=useState(0)

  const incNum=()=>{

    setNum(num+1)
  }
  
  const dicNum=()=>{
if (num>0){
  setNum(num-1);

}else{
  alert("sorry you reached your limit")
  setNum(0);
}
    setNum(num-1)
  }



return(

<>
<div className="main_div"> 
<div className="center_div">
<h1>{num}</h1>

<div className="btn_div">
  <button onClick={incNum}>Increnet</button>
  <button onClick={dicNum}>Decriment</button>
</div>
</div>

</div>



</>


)


};


export default Inc&dec;