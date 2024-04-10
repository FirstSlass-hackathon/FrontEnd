import React from 'react';
// import { Card } from '../../ui/Card';
import s from './style.module.scss';


export const Impressions = () => {

  return (
    <>
      <h1>Впечатления</h1>
      <h2>
        <span>Истории</span>
        <br/>
        <span>которые вдохновляют</span>
      </h2>
      <div className={s.cardsList}>
        {/* <Card/>
        <Card/>
        <Card/> */}
      </div>
    </>
  )
}