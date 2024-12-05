import { useEffect,useState } from "react";

export function DatabindingState(){
const [userName,setUserName]=useState();
useEffect( ()=>{
    setUserName('Sam');
},[])
return (
    <div className="container-fluid">
        <h2> Hello! {userName}</h2>
    </div>
)
}