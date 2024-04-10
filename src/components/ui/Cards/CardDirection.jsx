import React from "react";
import { Card } from './Card';
import s from './style.module.scss';

export const CardDirection = ({title, date, direction, ...props}) => {
  return (
    <>
      <div className={s.component}>
        <Card/>
      </div>

      <div className={s.info}>
        <div className={s.info__title}>{title}</div>
        <div className={s.info__offer}>
          <div className={s.info__date}>{date}</div>
          <div className={s.info__direction}>{direction}</div>
        </div>
      </div>   
    </>
  )
}