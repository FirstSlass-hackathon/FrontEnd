import React, { useState } from 'react';
// import s from './Checkbox.module.scss';

//это пример, необходимо исправить под наши параметры

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onClick={toggleCheckbox}
    >
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          border: '2px solid #ccc',
          backgroundColor: checked ? 'black' : 'transparent',
          marginRight: '8px',
        }}
      />
      <span>Я соглашаюсь на обработку информации о персональных данных</span>
    </div>
  );
};