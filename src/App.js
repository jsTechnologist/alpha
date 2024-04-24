import { Class } from "./Class";
import "./App.css";
import { useState } from "react";
function App(){
   
  const [count , setCount]= useState(0);
  
 return(
  <div className="App">
    <button  onClick={()=> setCount(count+1) }  > increase  </button> 
    <button   onClick={()=> setCount(count-1) }> decrease  </button>
    <button  onClick={()=> setCount( 0)}  > reset  </button>
   <h1 > {count} </h1>
  </div>
 )

};
export default App;