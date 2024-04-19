import { useState } from 'react'
import { DaysOfWeek } from './components/DaysOfWeek';
import { CalendarDay } from './components/CalendarDay';
import { CalendarDay2 } from './components/CalendaryDay2';
import { ButtonAdd } from './components/ButtonAdd';
import { ButtonUsprAdd } from './components/ButtonUsprAdd';
import './App.css'
ButtonUsprAdd

function App() {
  
  const [zwol,uspr] = useState(true);
  

  const daysOfWeek = ["Pon","Wt","Śr","Czw","Pt","Sob","Ndz"];

  
  const dayInApril = [];
  for(let i = 1;i<=30;i++){
    const date = new Date(2024,3,i);
    const dayOfWeek = date.toLocaleDateString('pl-PL',{weekday:"long"})
    dayInApril.push({day:i,dayOfWeek})
  }
  



  return (
    <>
      <div className="select-wrapper">
        <select className="tittle" onChange={()=>uspr(!zwol)}>
          <option>Zwolnienia</option>
          <option>Usprawiedliwienia</option>
        </select>
      </div>
      <div className='dayOfWeek'>
        {daysOfWeek.map((date)=>(
          <DaysOfWeek key={date} date = {date}/>
        ))

        }

        
      </div>
      <div className="calendar">
        {
          dayInApril.map((day,index)=>(
            <div key={index} style={{clear : day.dayOfWeek==="poniedziałek" ? 'both':'none'}}>
              {zwol?<CalendarDay date = {day.day} />:<CalendarDay2 date={day.day}/>}
            </div>
          ))
        }
      </div>
      {zwol?<ButtonAdd/>:<ButtonUsprAdd/>}
    </>
  )
}

export default App
