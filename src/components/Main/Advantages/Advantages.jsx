import React from 'react';
import s from './style.module.scss';
import Button from '../../ui/Button/Button';
import cardAdvantages from '../../ui/Cards/CardAdv';
import {scrollToOrder} from '../Main';

export const Advantages = () => {

  return (
    <div className={s.container}>
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
          </div>
          <Button className={s.button} onClick={scrollToOrder} text={'Оставить заявку'} colorScheme={'black'}/>
        </div>
        
        <div className={s.cards}>
            {cardAdvantages}
        </div>
      </div>
    </div>
  );
}