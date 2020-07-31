import React from "react";
import useInputState from './useInputState';

const TaskForm = ({ saveTask, modalVisible, toggleModal, newValues, editTask, updateTaskHandler }) => {

  const { form, reset, updateField } = useInputState();

  const renderModal = (newValues) => {

    if(Object.keys(newValues).length !== 0) { return (
      <div
      className="modal fade show"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-modal="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Update task
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            
              onClick={() => toggleModal("false")}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
          <form
            onSubmit={event => {
              event.preventDefault();
              editTask(newValues);
              reset();
              toggleModal("false")
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add task title"
                id="title"
                name="title"
                aria-describedby="name Help"
                value={ newValues.title }
                onChange={ updateTaskHandler }
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                placeholder="Add task decription"
                id="description"
                name="description"
                rows={3}
                value={ newValues.description }
                onChange={ updateTaskHandler }
              />
            </div>
            <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => { reset(); toggleModal("false")}} 
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
          </form>
          </div>
        </div>
      </div>
      <div 
        className="modal-overlay"
        onClick={() => { reset(); toggleModal("false")}}
      ></div>
    </div>
  )} else { return (
      <div
      className="modal fade show"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-modal="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              New task
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            
              onClick={() => { reset(); toggleModal("false")}}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
          <form
            onSubmit={event => {
              event.preventDefault();
              saveTask(form);
              reset();
              toggleModal("false")
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add task title"
                id="title"
                name="title"
                aria-describedby="name Help"
                value={ form.title }
                onChange={ updateField }
              />
              <small id="name" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                placeholder="Add task decription"
                id="description"
                name="description"
                rows={3}
                value={ form.description }
                onChange={ updateField }
              />
            </div>
            <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => { reset(); toggleModal("false")}} 
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={ form.title.length < 1 || form.description.length < 1 }
            >
              Save
            </button>
          </div>
          </form>
          </div>
        </div>
      </div>
      <div 
        className="modal-overlay"
        onClick={() => { reset(); toggleModal("false")}}
      ></div>
    </div>
  )}
}

  return (
    <>
    <div className="btn-wrap">
      <button 
        type="button" 
        className="btn btn-info btn-lg btn-add"
        onClick={() => toggleModal("true")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="#ffffff" className="icon-plus">
        <g fill="#ffffff" stroke="white">
          <path d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z" strokeWidth="20" />
          <path d="M355.148 234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83 8.884-19.83 19.83v79.318h-79.318c-10.966 0-19.83 8.884-19.83 19.83s8.864 19.83 19.83 19.83h79.318v79.318c0 10.946 8.864 19.83 19.83 19.83s19.83-8.884 19.83-19.83v-79.318h79.318c10.966 0 19.83-8.884 19.83-19.83s-8.864-19.83-19.83-19.83z" strokeWidth="20" />
        </g>
        </svg>
        Create new task
      </button>
    </div>
    { modalVisible && (renderModal(newValues) ) }
    </>
  );
};

export default TaskForm;