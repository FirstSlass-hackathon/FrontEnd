import React, { useState } from 'react';
// import s from './Checkbox.module.scss';

// Это пример, необходимо исправить под наши параметры

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
          width: '24px', // Увеличиваем размер плейсхолдера в 2 раза
          height: '24px', // Увеличиваем размер плейсхолдера в 2 раза
          borderRadius: '50%',
          border: '2px solid #ccc',
          backgroundColor: checked ? 'black' : 'transparent',
          marginRight: '16px', // Увеличиваем отступ между плейсхолдером и текстом
        }}
      />
      <span style={{ color: 'white', fontSize: '28px' }}>Я соглашаюсь на обработку информации о персональных данных</span>
    </div>
  );
};