import React from "react";
import cn from 'classnames';
import s from './style.module.scss';

export const CardImpression = ({title, text, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.size, s.imp)}>
          <div className={s.info}>
            <div className={s.info__title_imp}>{title}</div>
            <div className={s.info__text}>{text}</div>
          </div>
      </div>
    </>
  )
}

const titles = [
  {title: 'Незабываемая', date: 'поездка с восхождением на Эльбрус'},
  {title: 'Шикарные', date: 'отели в сингапуре'},
  {title: 'Тибетский', date: 'рай'}
];

const cardImpressions = titles.map((item, index) => (
  <CardImpression key={index} {...item} />
));

export default cardImpressions;