import { useState } from "react";
import "./CalendarDayStyle.css";





export const CalendarDay = (props) => {
    
    
    const [active,setActive] = useState(false);
    
    
    return(
        <>
            <div className="calendar-day">
                <button className="calendarDayButton" onClick={()=>setActive(!active)}>
                    {!active ?<H2 date = {props.date}/>: <Data date = {props.date}/> }
                </button>
                
            </div>
            
           
        </>
    )
}
const H2 = (props) => {
    let date = new Date();
    return(
        <h2 className="calendarDay" id={date.getDate()===props.date?"Now":""}>{props.date}</h2>
    )
}
const Data = (props) => {
    const Zwolnienia = [{
        id : crypto.randomUUID,
        name : "Marek Marucha",
        date : 4,
        od : "11.40",
        do : "12.25",
        color : '#4287f5'
    },{
        id : crypto.randomUUID,
        name : "Maciej Dynowiec",
        date : 12,
        od : "11.40",
        do : "12.25",
        color : '#a630c7'
    },{
        id : crypto.randomUUID,
        name : "Jakub Zych",
        date : 22,
        od : "11.40",
        do : "12.25",
        color : '#4de046'
    },{
        id : crypto.randomUUID,
        name : "Krystian Niemczyk",
        date : 1,
        od : "11.40",
        do : "12.25",
        color : '#e8e823'
    }];
    /*const [zwolnienia,setZwolniena] = useState(Zwolnienia);
    const addZwolnienie = (data) => {
        
        const newZwolnienia=[...Zwolnienia,data]
        setZwolniena(newZwolnienia);
        
    };*/
    return(
        <>
        <div >
            {Zwolnienia.map((zwolnienie) => (
                zwolnienie.date === props.date ? (
                    
                    <div key={zwolnienie.id} className="Zwolnienie" style={{backgroundColor : zwolnienie.color}}>
                        <h1>Zwolnienie</h1>
                        <h2>{zwolnienie.name}</h2>
                        <h2>Od: {zwolnienie.od} Do: {zwolnienie.do}</h2>
                    </div>
                ) : null 

               
            ))}

        </div>
        
        </>
    )
}
