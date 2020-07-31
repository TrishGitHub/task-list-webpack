import { useState, useEffect } from 'react';

const defaultTasks = [
  { title: "Make it fast to add and organize tasks", description: "Ideally a task is added and categorized in a couple taps or keystrokes."},
  { title: "Offer multiple ways to organize your tasks", description: "Tags, lists, projects, and due dates are all helpful, and the best apps offer at least a few categories like this." },
  {title: "Remind you about self-imposed deadlines", description: " Notifications, widgets, emails—the best applications make it obvious when something needs to be completed."},
];

export default initialValue => {
  const [tasks, setTasks] = useState(defaultTasks);

  useEffect( () => {
  const data = localStorage.getItem('storage-list');
    if(data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect( () => {
    localStorage.setItem('storage-list', JSON.stringify(tasks)
    )
  });

  return {
    tasks,
    addTask: task => {
      setTasks([...tasks, task]);
    },
    deleteTask: taskIndex => {
      const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
      setTasks(updatedTasks);
    },

    editTask: updatedTask => {
      const editedTaskList = tasks.map( (task, index) => {
        if (updatedTask.index === index) {
          return {...task, title: updatedTask.title, description: updatedTask.description};
        }
        return task;
      });
      setTasks(editedTaskList);
    }
  };
};