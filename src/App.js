import "./App.css";
import { Toturial } from "./Toturial";
//import Job from "./components/Job";
//import { Toturial } from "./Toturial"; 
function App(){

  const toturiles = [
   { name : "html" , finished : true },
   { name : "css" , finished : true },
   { name : "bootstrap" , finished : false},
   { name : "javascript" , finished : false},
   { name : "react" , finished : true},
   { name : "pyton" , finished : false},
   ] ;

 return(
  <div className="App">
       {toturiles.map((toturial,index)=>{
        return toturial.finished && <h2>{toturial.name} </h2>
       } ) }
       <Toturial/>
  </div>
 )

};
export default App;