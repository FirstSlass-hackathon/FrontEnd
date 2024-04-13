import React from 'react';
import s from './style.module.scss';
// import { Card } from '../../ui/Cards/Card';
import cardDirections from '../../ui/Cards/CardDirection';

export const Impressions = () => {

  return (
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
        <div className={s.Cards}>
          {cardDirections}
        </div>
      </div>
    </div>
  );
}