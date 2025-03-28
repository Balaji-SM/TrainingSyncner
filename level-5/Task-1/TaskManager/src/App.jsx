import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import "./App.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // Stores the task being edited

  // Load saved tasks when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever `tasks` change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Formik form setup
  const formik = useFormik({
    initialValues: { title: "", description: "" },
    onSubmit: (values, { resetForm }) => {
      if (editingTask) {
        // If editing, update the task
        setTasks(
          tasks.map((task) =>
            task.id === editingTask.id
              ? { ...task, title: values.title, description: values.description }
              : task
          )
        );
        setEditingTask(null); // Clear editing state
      } else {
        // Add a new task
        const newTask = {
          id: Date.now(),
          title: values.title,
          description: values.description,
          completed: false,
        };
        setTasks([...tasks, newTask]);
      }
      resetForm();
    },
  });

  // Toggle task completion status
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit a task
  const editTask = (task) => {
    setEditingTask(task); // Store task in editing state
    formik.setValues({ title: task.title, description: task.description }); // Set form values
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>
      
      {/* Task Form */}
      <form onSubmit={formik.handleSubmit} className="task-form">
        <input className="ti"
          type="text"
          name="title"
          placeholder="Task Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          required
        /><br></br>
        <textarea className="tii"
          name="description"
          placeholder="Task Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          required
        /><br></br>
        <button className="tiii" type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
      </form>


      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span>{task.title}: {task.description}</span>
            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
