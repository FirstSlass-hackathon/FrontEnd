import React from 'react';
import s from './style.module.scss';
import cardDirections from '../../ui/Cards/CardDirection';

export const Directions = () => {

  return (
    <div className={s.directions}>
      <div className={s.text}>
        <h2 className={s.title}>направления</h2>
        <h1 className={s.name}>
          <span>ЛОВИТЕ</span>
          <br/>
          <span className={s.highlight}>ВПЕЧАТЛЕНИЯ</span>
        </h1>
        <p className={s.description}>
        Ваши желания ничем не&nbsp;ограничены. Вы&nbsp;ограничены только собственной фантазией.
          <br/>
          <br/>
          Наша компания имеет безграничные возможности!
        </p>
        {/* <button className={s.applyButton}></button> */}
        {/* <Button className={s.applyButton} onClick={scrollToOrder} text={'Оставить заявку'}/> */}
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
