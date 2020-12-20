import React from 'react';
import { IoIosAlarm } from 'react-icons/io';
import './Todoinsert.scss';

const Todoinsert = () => {
  return (
    <div>
      <form className="TodoInsert">
        <input placeholder="할 일을 입력하세요" />
        <button type="submit">
          <IoIosAlarm />
        </button>
      </form>
    </div>
  );
};

export default Todoinsert;
