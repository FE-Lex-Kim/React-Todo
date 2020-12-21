import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem onRemove={onRemove} todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
