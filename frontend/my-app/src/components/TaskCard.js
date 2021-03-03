import React from "react";

function TaskCard({ task }) {

    return(
        <li>{task.task_item}</li>
    )
}

export default TaskCard;