import react, {useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList =()=>{



//     const[line,setLine]=useState();
// const cutIt =()=>{
//     setLine(true);
// }
// }
    const [item,setItem]=useState("");

    const[newitem,setNewItem]=useState([]);
    
const  itemEvent= (event) =>{

    setItem(event.target.value);
}



const listofItems =()=>{

    setNewItem ((preValue)=>{
return[...preValue, item]

    })


}


// const  [line, setLine] = useState(false);
// const cutIt =()=>{
//     setLine(true);
// }
// }
return(
<>
<div className="main_div">
    <div className="center_div">
        <h1>To Do List</h1>
        <br/>
        <input  type="text" value={item} placeholder="Add an item" onChange={itemEvent} />
        
<Button onClick={listofItems}>  <AddIcon />
</Button>
<br/>
<ol>
   {
    newitem.map((val,index) =>{ 
    return(
        <>
        
       
        <span >  <DeleteIcon className="delteicon"/> </span>
        <li >{val}</li>
        

        </>
    )
    
    })}
</ol>
<br/>

    </div>
</div>


</>


);

};

export default ToDoList;