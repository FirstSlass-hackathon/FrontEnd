import React from "react";
import cn from 'classnames';
import s from './style.module.scss';

export const CardTravel = ({title, travel, moto, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.tr)}>
          <div className={s.info}>
          <div className={s.info__block}>
              <div className={s.info__title}>{title}</div>
              <div className={s.info__travel}>{travel}</div>
            </div>
            <div className={s.info__moto}>{moto}</div>
          </div>
      </div>
    </>
  )
}

const titles = [
  {title: 'направление', date: 'Кайтсерфинг', direction: 'ощутите свободу с кайтсерфингом!'},
  {title: 'направление', date: 'Горные лыжи', direction: 'покоряйте вершины с нами!'},
  {title: 'виды отдыха', date: 'Уединение на острове', direction: 'тропический рай'}
];

const cardTravels = titles.map((item, index) => (
  <CardTravel key={index} {...item} />
));

export default cardTravels;