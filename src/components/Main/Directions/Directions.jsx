import React from 'react';
import s from './style.module.scss';
import cardDirections from '../../ui/Cards/CardDirection';

export const Directions = () => {

  return (
    <div className={s.directions}>
      <div className={s.text}>
        <div className={s.title}>направления</div>
        <div className={s.name}>
          <span>ЛОВИТЕ</span>
          <br/>
          <span className={s.highlight}>ВПЕЧАТЛЕНИЯ</span>
        </div>
        <p className={s.description}>
        Ваши желания ничем не&nbsp;ограничены. Вы&nbsp;ограничены только собственной фантазией.
          <br/>
          <br/>
          Наша компания имеет безграничные возможности!
        </p>
      </div>
      <div className={s.cards}>
        {cardDirections.map((card, index) => (
            <div key={index} className={s.card}>
              {card}
            </div>
          ))}
      </div>
    </div>
  );
}
