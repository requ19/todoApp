import React, { useState } from 'react';
import Button from '../Button';
import './Todo.css';

const Todo = ({ todoObj, setTodos, status }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoObj.todoText);

  const doneHandler = () => {
    setTodos(prev => prev.map(el => (el.id === todoObj.id ? { ...el, isActive: !el.isActive } : el)));
  };

  const deleteOrRestoreHandler = () => {
    setTodos(prev => prev.map(el => (el.id === todoObj.id ? { ...el, isDeleted: !el.isDeleted } : el)));
  };

  const deleteHandler = () => {
    setTodos(prev => prev.filter(el => el.id !== todoObj.id));
  };

  const restoreHandler = () => {
    setTodos(prev => prev.map(el => (el.id === todoObj.id ? { ...el, isDeleted: !el.isDeleted } : el)));
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const saveEditHandler = () => {
    setTodos(prev => prev.map(el => (el.id === todoObj.id ? { ...el, todoText: editedText } : el)));
    setIsEditing(false);
  };

  const cancelEditHandler = () => {
    setIsEditing(false);
    setEditedText(todoObj.todoText);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <Button onClick={saveEditHandler}>Save</Button>
          <Button onClick={cancelEditHandler}>Cancel</Button>
        </div>
      ) : (
        <div>
          <span className={`todo-text ${todoObj.isActive ? '' : 'done'}`}>{todoObj.todoText}</span>
          {status !== 'trash' ? (
            <div>
              <Button onClick={doneHandler}>done</Button>
              <Button onClick={editHandler}>edit</Button>
              <Button onClick={deleteOrRestoreHandler}>delete</Button>  
            </div>
          ) : (
            <div>
              <Button onClick={ restoreHandler} >restore</Button>
              <Button onClick={deleteHandler}>delete</Button>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default Todo;
