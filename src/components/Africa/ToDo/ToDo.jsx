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
            <span className={s.highlight}>Откройте</span> <span>для себя</span>
            <br/>
            <span>свою</span> <span className={s.highlight}>Африку</span>
          </h1>
        </div>
        <div className={s.cards}>
          {cardToDos.map((card, index) => (
              <div key={index} className={s.card}>
                {card}
              </div>
            ))}
        </div>
      </div>
    </div>
    )
}