import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import { Checkbox } from '../../ui/Checkboxes/Checkbox';
// import { Button } from '../../ui/Button/Button';


export const Order = () => {
  return (
    <div className={s.order}>
      <div className={s.order__text}>
        <h3>мир в шаге от тебя</h3>
        <div className={s.order__upCase}>
          <h1>
          начните путешествие
          <br/>
          на высочайшем уровне
          <br/>
          с first class
          </h1>
        </div>
      </div>

      <div className={s.order__inputs}>
        <div className={s.order__inputs_row}>
          <input type="text" placeholder="Имя"/>
          <input type="text" placeholder="Фамилия"/>
        </div>

        <div className={s.order__inputs_row}>
          <input type="text" placeholder="E-mail"/>
          <input type="text" placeholder="Телефон"/>
        </div>

        <div className={s.checkbox}>
          <Checkbox/>
        </div>

        {/* <Button/> */}
      </div>
    </div>
  )
}