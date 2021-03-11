import React from "react";

function TaskCard({
  task,
  setTask,
  setIsEditingTask,
  handleShowForm,
  handleDelete,
  setUserData
}) {

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/task/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ complete: !task.complete }),
    })
    .then(res => res.json())
    .then(user => {
      setUserData(user)
    })
  };

  return <div>
    {task.complete ?
     <p onClick={handleClick}><strike>{task.title}</strike></p>
     :
      <p onClick={handleClick}>{task.title}</p>
     }
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
  </div>;
}

export default TaskCard;
