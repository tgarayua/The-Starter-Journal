import React, { useState } from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [task, setTask] = useState({});
  const [displayTaskForm, setDisplayTaskForm] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);

  const handleCreateTask = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/task/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: taskTitle }),
    })
      .then((r) => r.json())
      .then(() => {
        setTaskTitle(taskTitle);
        setDisplayTaskForm(false);
      });
  };

  const handleShowForm = value => {
    setTaskTitle(value);
    setDisplayTaskForm(true);
  };

  const handleEditTask = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/task/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: taskTitle }),
    }).then(() => {
      setDisplayTaskForm(false);
    });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3000/task/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="list-task">
      <h3>TaskList</h3>
      <button
        onClick={
          displayTaskForm
            ? isEditingTask
              ? handleEditTask
              : handleCreateTask
            : () => handleShowForm("")
        }
      >
        {displayTaskForm ? (isEditingTask ? "Update " : "Submit ") : "Create "}
        Task
      </button>
      {displayTaskForm && (
        <input
          type="text"
          name="title"
          id="task-title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      )}
      <ol>
        {tasks?.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            setTask={setTask}
            setIsEditingTask={setIsEditingTask}
            handleShowForm={handleShowForm}
            handleDelete={handleDelete}
          />
        ))}
      </ol>
    </div>
  );
}

export default TaskList;
