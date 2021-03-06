import React from "react";
import "./style.css"


const List = ({tasks, hideAllTasksDone}) => (
    <div>
        {tasks.map(task => (
            <div 
            className ={`list ${task.done && hideAllTasksDone ? "list--hidden" :""}`}>
               <button className="buttonDone">{task.done ? "✔" : ""} 
            </button>  
             
            <span className = {`div__item ${task.done ? "div__item--done" : ""}`}
            >
             {task.content}
            </span>
            
            <button className="buttonRemove">
            &#10006;
            </button>
            </div>
        ))}
    </div>
)

export default List;