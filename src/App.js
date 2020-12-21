import { useState } from 'react';
import './App.css';
import Todoinsert from './components/Todoinsert';
import TodoList from './components/TodoList';
import TodoTemplete from './components/TodoTemplete';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  return (
    <TodoTemplete>
      <Todoinsert />
      <TodoList todos={todos} />
    </TodoTemplete>
  );
}

export default App;
