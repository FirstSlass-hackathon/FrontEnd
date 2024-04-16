import React from 'react';
import s from './style.module.scss';
import cardToDos from '../../ui/Cards/CardToDo';

export const ToDo = () => {
  return (
    <div className={s.container}>
      <div className={s.travels}>
        <div className={s.text}>
          <h2 className={s.title}>чем заняться</h2>
          <h1 className={s.name}>
            <span>НАЙДИТЕ СЕБЕ</span>
            <br/>
            <span>РАЗВЛЕЧЕНИЕ</span> <span className={s.highlight}>ПО ВКУСУ</span>
          </h1>
        </div>
        <div className={s.cards}>
          {cardToDos}
        </div>
      </div>
    </div>
    )
}