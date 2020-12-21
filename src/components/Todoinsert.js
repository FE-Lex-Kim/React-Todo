import React, { useCallback, useState } from 'react';
import { IoIosAlarm } from 'react-icons/io';
import './Todoinsert.scss';

const Todoinsert = ({ insertTodoListItem }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value === '') return;
      insertTodoListItem(value);
      setValue('');
    },
    [insertTodoListItem, value],
  );

  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">
          <IoIosAlarm />
        </button>
      </form>
    </div>
  );
};

export default Todoinsert;
