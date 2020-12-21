import { useRef, useCallback, useState } from 'react';
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

  // 다음 id값을 정해준다.
  const nextId = useRef(4);

  const insertTodoListItem = useCallback(
    (text) => {
      setTodos([...todos, { id: nextId.current, text, checked: false }]);
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplete>
      <Todoinsert insertTodoListItem={insertTodoListItem} />
      <TodoList onRemove={onRemove} todos={todos} />
    </TodoTemplete>
  );
}

export default App;
