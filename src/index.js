import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import useTaskState from './useTaskState';
import './styles.css';

const App = () => {
  const { tasks, addTask, deleteTask, editTask } = useTaskState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [newValues, setNewValues] = useState({
    index: null,
    title: "",
    description: ""
  });

  const toggleModal = (action, id) => {

    if(action === "edit") {
      const taskToUpdate = tasks.map( (task, index) => {
        if (id === index) {
          setNewValues({
              index: index,   
              title: task.title,
              description: task.description
          })
        }
        return taskToUpdate;
      });
    }
    else {
      setNewValues({});
    }
    action !== "false" ? setModalVisible(true) : setModalVisible(false);
  };

  const updateTaskHandler = (event) => {
    setNewValues({
      ...newValues,
      [event.target.name]: event.target.value.trim()
    });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            {
              tasks.length === 1 ? (
                <h1 className="card-title">Task list: { tasks.length } item</h1>
              ) : ( <h1 className="card-title"> Task list:  { tasks.length } items</h1> )
            }

          <TaskForm
            saveTask={ taskText => {
              addTask(taskText);
            }}

            editTask={ (taskText, index) => {
              editTask(taskText, index);
            }}
            modalVisible={modalVisible}
            toggleModal={toggleModal}
            newValues={newValues}
            updateTaskHandler={updateTaskHandler}
          />

          <TaskList 
            tasks={tasks} 
            deleteTask={deleteTask} 
            editTask={editTask} 
            toggleModal={toggleModal}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);