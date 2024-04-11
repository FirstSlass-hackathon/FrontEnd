import React from 'react';
import s from './style.module.scss';
// import { Card } from '../../ui/Cards/Card';
import cardAdvantages from '../../ui/Cards/CardAdv';

export const Advantages = () => {

  return (
    <div className={s.advantages}>
      <div className={s.block}>
        <div className={s.text}>
          <h2 className={s.title}>преимущества</h2>
          <h1 className={s.name}>
            <span>ПОЧЕМУ</span>
            <br/>
            <span className={s.highlight}>FIRST CLASS</span>
          </h1>
          <p className={s.description}>
          Выбирая нашу компанию, вы&nbsp;можете быть
уверены в&nbsp;том, что получите высочайший
уровень обслуживания и&nbsp;незабываемые
впечатления от&nbsp;вашего путешествия или
мероприятия.
            <br/>
            <br/>
            Мы&nbsp;создадим для вас идеальные условия
для отдыха и&nbsp;развлечений, оставив при этом
пространство для вашей индивидуальности
и&nbsp;уникальности.
          </p>
          <button className={s.applyButton}>Оставить заявку</button>
        </div>
        <div className={s.Cards}>
          {cardAdvantages}
        </div>
      </div>
    </div>
  );
}