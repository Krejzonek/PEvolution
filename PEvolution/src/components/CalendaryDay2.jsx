import "./CalendaryDay2Style.css";
import { useState } from "react";
export const CalendarDay2 = (props) => {
    
    
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
        od : 1,
        do : 4,
        color : '#4287f5'
    },{
        id : crypto.randomUUID,
        name : "Maciej Dynowiec",
        od : 5,
        do : 9,
        color : '#a630c7'
    },{
        id : crypto.randomUUID,
        name : "Jakub Zych",
        od : 10,
        do : 15,
        color : '#4de046'
    },{
        id : crypto.randomUUID,
        name : "Krystian Niemczyk",
        od : 16,
        do : 22,
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
                zwolnienie.od >= props.date && zwolnienie.do <= props.date ? (
                    
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