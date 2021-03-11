import React, { useState } from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, setUserData }) {
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
      .then((user) => {
        setUserData(user)
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
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: taskTitle }),
      })
      .then(res => res.json())
      .then((user) => {
        setUserData(user)
        setDisplayTaskForm(false);
    });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3000/task/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(user => {
      setUserData(user)
    })
  };

  return (
    <div className="list-task">
      <div className="task-header header">
      <h3>TaskList</h3>
      <i 
        class="far fa-plus-square"
        onClick={
          displayTaskForm
            ? isEditingTask
              ? handleEditTask
              : handleCreateTask
            : () => handleShowForm("")
        }
      >
        {displayTaskForm ? (isEditingTask ? "Update " : "Submit ") : "Create "}
      </i>
      </div>
      <div className="task-body">
      {displayTaskForm && (
        <input
          type="text"
          name="title"
          id="task-title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      )}
      
        {tasks?.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            setTask={setTask}
            setIsEditingTask={setIsEditingTask}
            handleShowForm={handleShowForm}
            handleDelete={handleDelete}
            setUserData={setUserData}
          />
        ))}
      
      </div>
    </div>
  );
}

export default TaskList;
