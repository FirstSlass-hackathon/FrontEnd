import React from 'react';
import s from './style.module.scss';
import cardTravels from '../../ui/Cards/CardTravel';

export const Travels = () => {

  return (
    <div className={s.container}>
      <div className={s.travels}>
        <div className={s.text}>
          <h2 className={s.title}>виды отдыха</h2>
          <h1 className={s.name}>
            <span>НАЙДИТЕ СЕБЕ</span>
            <br/>
            <span>ПУТЕШЕСТВИЕ</span> <span className={s.highlight}>ПО ВКУСУ</span>
          </h1>
        </div>
        <div className={s.cards}>
          {cardTravels.map((card, index) => (
              <div key={index} className={s.card}>
                {card}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}