import React from 'react';
import s from './style.module.scss';
import cardImpressions from '../../ui/Cards/CardImpression';

export const Impressions = () => {

  return (
    <div className={s.container}>
      <div className={s.impression}>
        <div className={s.block}>
          <div className={s.text}>
            <h2 className={s.title}>впечатления</h2>
            <h1 className={s.name}>
              <span>ИСТОРИИ,</span>
              <br/>
              <span>КОТОРЫЕ</span> <span className={s.highlight}>ВДОХНОВЛЯЮТ</span>
            </h1>
          </div>
          <div className={s.cards}>
            {cardImpressions.map((card, index) => (
              <div key={index} className={s.card}>
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}