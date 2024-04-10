import React from "react";
import { Card } from './Card';
import s from './style.module.scss';

export const CardImpression = ({title, text, ...props}) => {
  return (
    <>
      <div className={s.component}>
        <Card/>
      </div>

      <div className={s.info}>
        <div className={s.info__title_imp}>{title}</div>
        <div className={s.info__text}>{text}</div>
      </div>   
    </>
  )
}