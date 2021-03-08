import React from "react";

function TaskCard({
  task,
  setTask,
  setIsEditingTask,
  handleShowForm,
  handleDelete,
}) {

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/task/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ complete: !task.complete }),
    });
  };

  return <li onClick={handleClick}>
    {task.complete && "(DONE) "}
    {task.title}
    <button
        onClick={() => {
          setTask(task);
          setIsEditingTask(true);
          handleShowForm(task.title);
        }}
      >
        Edit
      </button>
      <button onClick={e => {
        handleDelete(e, task.id);
      }}>Delete</button>  
  </li>;
}

export default TaskCard;
