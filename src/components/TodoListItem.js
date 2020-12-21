import React from 'react';
import './TodoListItem.scss';
import {
  IoIosCheckboxOutline,
  IoIosSquareOutline,
  IoIosRemoveCircle,
} from 'react-icons/io';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <IoIosCheckboxOutline /> : <IoIosSquareOutline />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <IoIosRemoveCircle />
      </div>
    </div>
  );
};

export default TodoListItem;
