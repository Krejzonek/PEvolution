import { useState } from "react";
import "./ButtonAddStyle.css";
import { FormUspr } from "./FormUspr";

export const ButtonUsprAdd = (props) => {
    const [addButton,setAddButton] = useState(false);
    return(
        <>
        <button className="AddButton" onClick={()=>setAddButton(!addButton)}>
                {!addButton?<h2>+</h2>:<h2>-</h2>}
        </button>
        {addButton?<FormUspr onAddZwolnienie={props.onAddZwolnienie} />:""}
        </>
    )
}