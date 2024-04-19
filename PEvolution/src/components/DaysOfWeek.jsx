import "./DaysOfWeekStyle.css";

export const DaysOfWeek = (props)=>{
    return(
        <div className="DaysOfWeek">
            <h2>{props.date}</h2>
        </div>
    )
}