import { useState } from "react";
import "./ButtonAddStyle.css";
import { FormZwol } from "./FormZwol";

export const ButtonAdd = (props) => {
    const [addButton,setAddButton] = useState(false);
    return(
        <>
        <button className="AddButton" onClick={()=>setAddButton(!addButton)}>
                {!addButton?<h2>+</h2>:<h2>-</h2>}
        </button>
        {addButton?<FormZwol onAddZwolnienie={props.onAddZwolnienie} />:""}
        </>
    )
}