import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './Todoinsert.scss';

const TodoInsert = ({ insertTodoitem }) => {
  const [value, setValue] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    insertTodoitem(value);
    setValue('');
  };
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
