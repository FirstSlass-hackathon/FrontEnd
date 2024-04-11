import React from 'react';
import s from './style.module.scss';
// import { Card } from '../../ui/Cards/Card';
import cardTravels from '../../ui/Cards/CardTravel';

export const Travels = () => {

  return (
    <div className={s.travels}>
      <div className={s.text}>
        <h2 className={s.title}>виды отдыха</h2>
        <h1 className={s.name}>
          <span>НАЙДИТЕ СЕБЕ</span>
          <br/>
          <span>ПУТЕШЕСТВИЕ</span> <span className={s.highlight}>ПО ВКУСУ</span>
        </h1>
       {/* <p className={s.description}>
          Подари своим желания полную свободу. Вы ограничены только собственной фантазией.
          <br/>
          <br/>
          Наша компания имеет безграничные возможности!
  </p> */}
        {/*<button className={s.applyButton}></button>
        <button className={s.applyButton}>Оставить заявку</button>*/}
      </div>
      <div className={s.Cards}>
        {cardTravels}
      </div>
    </div>
  );
}