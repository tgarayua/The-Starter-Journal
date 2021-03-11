import React from "react";

function TaskCard({
  task,
  setTask,
  setIsEditingTask,
  handleShowForm,
  handleDelete,
  setUserData,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/task/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ complete: !task.complete }),
    })
      .then((res) => res.json())
      .then((user) => {
        setUserData(user);
      });
  };

  return (
    <div className="task-card">
      {task.complete ? (
        <span className="task-title" onClick={handleClick}>
          <strike>{task.title}</strike>
        </span>
      ) : (
        <span className="task-title" onClick={handleClick}>{task.title}</span>
      )}
      <span class="edit-button">
      <i
      class="far fa-edit"
        onClick={() => {
          setTask(task);
          setIsEditingTask(true);
          handleShowForm(task.title);
        }}
      />
      </span>
      <span class="delete-button">
        <i
      class="far fa-trash-alt"
        onClick={(e) => {
          handleDelete(e, task.id);
        }}
      />
      </span>
    </div>
  );
}

export default TaskCard;
