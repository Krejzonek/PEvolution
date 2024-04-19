import { useState } from "react";
import "./FormStyle.css";

export const FormUspr = ({onAddZwolnienie}) =>{
    const [name,setName] = useState("");
  
    const [timeOd,setOd] = useState("");
    const [timeDo,setDo] = useState("");
    const [color,setColor] = useState("");

    
    
     return (
        <form className="FormZwol" onSubmit={(e) => {
            e.preventDefault();
            onAddZwolnienie({name,timeOd,timeDo,color});
            
        }}
        >
            <h1>Usprawiedliwienie</h1>
            <input className="input" type="text" onChange={(e)=>{setName(e.target.value)}}  placeholder="Imię i nazwisko"/>
            
            <h2>Od: <input className="input"  min="2024-04-01" max="2024-04-30" type="date" onChange={(e)=>{setOd(e.target.value)}} />  Do: <input type="date"  min="2024-04-01" max="2024-04-30" onChange={(e)=>{setDo(e.target.value)}} /></h2>
            <h2>Kolor: <input className="input" type="color" onChange={(e)=>{setColor(e.target.value)}}/></h2>
            <h2><button className="FormButton" disabled={name.length===0}>Dodaj</button></h2>
        </form>
    );
}