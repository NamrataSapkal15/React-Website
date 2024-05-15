import React, { useEffect, useState } from "react";


const New =()=>{
  const [num,setNum]=useState(0);



  useEffect(()=>{

document.title='you clicked me ${num} times';

  });
//   const [nums,setNums]=useState(0);

//   useEffect(()=>{
// // alert("i am Clicked");
    
// //   },[num]);
  return(
<>
<button onClick={()=>{setNum(num+1)}}>click me {num}</button>


</>
 
  )
};

export default New;