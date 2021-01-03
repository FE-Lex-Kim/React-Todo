import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, checkTheBox, removeItem }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => checkTheBox(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => removeItem(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
