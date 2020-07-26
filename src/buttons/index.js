import React from "react";
import "./style.css"

const Buttons = ({tasks, hideAllTasksDone}) => (
    tasks.length > 0 &&
    (<span className="section__flex--end">
        <button 
        className="buttonsShowAfterClick" 
        disabled= {tasks.every(({ done} ) => done)}
        > 
        Ukończ wszystkie </button>

        <button className="buttonsShowAfterClick">{hideAllTasksDone ? "Pokaż wszystkie" : "Ukryj ukończone"} </button>
    </span >
    )
);


export default Buttons;