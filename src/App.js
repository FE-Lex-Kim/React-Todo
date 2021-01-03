import React, { useState } from 'react';
import Todoinsert from './components/Todoinsert';
import TodoList from './components/TodoList';
import TodoTemplete from './components/TodoTemplete';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보자',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: false,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  const [nextId, setNextId] = useState(4);

  const insertTodoitem = (text) => {
    setTodos([...todos, { id: nextId, text, checked: false }]);
    setNextId(nextId + 1);
  };

  const checkTheBox = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const removeItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplete>
      <Todoinsert insertTodoitem={insertTodoitem} />
      <TodoList
        removeItem={removeItem}
        checkTheBox={checkTheBox}
        todos={todos}
      />
    </TodoTemplete>
  );
};

export default App;
