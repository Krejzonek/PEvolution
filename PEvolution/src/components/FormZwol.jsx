import { useState } from "react";
import "./FormStyle.css";

export const FormZwol = ({onAddZwolnienie}) =>{
    const [name,setName] = useState("");
    const [date,setDate] = useState(0);
    const [timeOd,setOd] = useState("");
    const [timeDo,setDo] = useState("");
    const [color,setColor] = useState("");

    
    
     return (
        <form className="FormZwol" onSubmit={(e) => {
            e.preventDefault();
            onAddZwolnienie({name,date,timeOd,timeDo,color});
            
        }}
        >
            <h1>Zwolnienie</h1>
            <input className="input" type="text" onChange={(e)=>{setName(e.target.value)}}  placeholder="Imię i nazwisko"/>
            <h3><input className="input" type="date" onChange={(e)=>{setDate(e.target.value)}} min="2024-04-01" max="2024-04-30"/></h3>
            <h2>Od: <input className="input" type="time" onChange={(e)=>{setOd(e.target.value)}} />Do: <input className="input" type="time" onChange={(e)=>{setDo(e.target.value)}} /></h2>
            <h2>Kolor: <input className="input" type="color" onChange={(e)=>{setColor(e.target.value)}}/></h2>
            <h2><button className="FormButton" disabled={name.length===0||date === 0 }>Dodaj</button></h2>
        </form>
    );
}