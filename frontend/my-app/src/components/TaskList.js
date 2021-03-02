import React from "react";
import TaskCard from "./TaskCard";

function TaskList() {
    return(
        <div className="list-task">
            <h3>TaskList</h3>
            <TaskCard />
        </div>
    )
}

export default TaskList;