import React from 'react';
import s from './style.module.scss';

export const Directions = () => {
  return (
    <div className={s.Directions}>
      <div className={s.text}>
        <h1 className={s.title}>направления</h1>
        <h2 className={s.name}>
          <span>ЛОВИТЕ</span>
          <br/>
          <span className={s.highlight}>ВПЕЧАТЛЕНИЯ</span>
        </h2>
        <p className={s.description}>
          Подари своим желания полную свободу. Вы ограничены только собственной фантазией.
          <br/>
          <br/>
          Наша компания имеет безграничные возможности!
        </p>
        <button className={s.applyButton}></button>
      </div>
      <div className={s.Cards}>
        <img className={s.card1} src='{..}' alt="Глен-каньон" />
        <img className={s.card2} src='{..}' alt="Выходные на Бали" />
        <img className={s.card3} src='{..}' alt="о. Борнео" />
      </div>
    </div>
  );
}