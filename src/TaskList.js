
import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleModal }) => (

  <div className="table-wrap">
    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        { tasks.map( (task, index) => (
          <tr key={ index }>
            <th scope="row">{ index + 1 }</th>
            <td> 
              <img 
                src="/assets/icons/envelope.png" 
                className="icon icon-title" 
                alt="task icon" 
              />
            </td>

            <td className="task-title text-left"
              onClick={() => {
                toggleModal("edit", index);
              }}
            >
              { task.title }
            </td>
            <td className="text-left">{ task.description }</td>
            <td>
              <img 
                src="/assets/icons/remove.png" 
                className="icon icon-delete" 
                alt="remove task" 
                title="remove task"
                onClick={() => {
                  deleteTask(index);
                }}
              />
              </td>
          </tr>
        )
        )}
      </tbody>
    </table>
    </div>

);

export default TaskList;