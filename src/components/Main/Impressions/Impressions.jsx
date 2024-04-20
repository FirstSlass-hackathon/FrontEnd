import React from 'react';
import s from './style.module.scss';
import CardImpression from '../../ui/Cards/CardImpression'; // Исправленный импорт

export const Impressions = () => {
  return (
    <div className={s.container}>
      <div className={s.impression}>
        <div className={s.block}>
          <div className={s.text}>
            <div className={s.title}>впечатления</div>
            <div className={s.name}>
              <span>ИСТОРИИ,</span>
              <br/>
              <span>КОТОРЫЕ</span> <span className={s.highlight}>ВДОХНОВЛЯЮТ</span>
            </div>
          </div>
          <div className={s.cards}>
            {/* Используйте компонент CardImpression напрямую */}
            <CardImpression />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressions;