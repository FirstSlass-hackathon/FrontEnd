import React from 'react';
import s from './style.module.scss';
// import Button from '../../ui/Button/Button';
import cardDirections from '../../ui/Cards/CardDirection';
// import {scrollToOrder} from '../Main';

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
          Подари своим желаниям полную свободу. Вы ограничены только собственной фантазией.
          <br/>
          <br/>
          Наша компания имеет безграничные возможности!
        </p>
        {/* <button className={s.applyButton}></button> */}
        {/* <Button className={s.applyButton} onClick={scrollToOrder} text={'Оставить заявку'}/> */}
      </div>
      <div className={s.cards}>
        {cardDirections}
      </div>
    </div>
  );
}
