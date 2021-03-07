import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <div className="list-task">
      <h3>TaskList</h3>
      <ol>
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ol>
    </div>
  );
}

export default TaskList;
