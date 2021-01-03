import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, checkTheBox, removeItem }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          removeItem={removeItem}
          checkTheBox={checkTheBox}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
