import React from 'react';
import s from './style.module.scss';
import Button from '../../ui/Button/Button';
import cardDirections from '../../ui/Cards/CardDirection';
import {scrollToOrder} from '../Main';

export const Directions = () => {

  return (
    <div className={s.directions}>
      <div className={s.text}>
        <h2 className={s.title}>направления</h2>
        <h1 className={s.name}>
          <span>ЛОВИТЕ</span>
          <br/>
          <span className={s.highlight}>ВПЕЧАТЛЕНИЯ</span>
        </h1>
        <p className={s.description}>
          Подари своим желаниям полную свободу. Вы ограничены только собственной фантазией.
          <br/>
          <br/>
          Наша компания имеет безграничные возможности!
        </p>
        <button className={s.applyButton}></button>
        <Button className={s.applyButton} onClick={scrollToOrder} text={'Оставить заявку'}/>
      </div>
      <div className={s.Cards}>
        {cardDirections}
      </div>
    </div>
  );
}

// import React from 'react';
// import s from './style.module.scss';
// import { Card } from '../../ui/Cards/Card';
// import { CardDirection } from '../../ui/Cards/CardDirection';

// export const Directions = () => {

//   const titles = [
//           {title: 'Америка', date: '3-5 дней', direction: 'some direction 1', cardComponent: Card},
//           {title: 'Индонезия', date: '2-3 дня', direction: 'some direction 2', cardComponent: Card},
//           {title: 'Малайзия', date: '7-12 дней', direction: 'some direction 3', cardComponent: Card}
//   ];

//   const cardDirections = [];

//   for (let i = 0; i < titles.length; i++) {
//     const { title, date, direction, cardComponent } = titles[i]; // Деструктурируем объект из массива titles
//     cardDirections.push( // Добавляем компонент CardDirection в массив
//       <CardDirection key={i} title={title} date={date} direction={direction} cardComponent={cardComponent}/>
//     );
//   }

//   return (
//     <div className={s.Directions}>
//       <div className={s.text}>
//         <h1 className={s.title}>направления</h1>
//         <h2 className={s.name}>
//           <span>ЛОВИТЕ</span>
//           <br/>
//           <span className={s.highlight}>ВПЕЧАТЛЕНИЯ</span>
//         </h2>
//         <p className={s.description}>
//       Подари своим желания полную свободу. Вы ограничены только собственной фантазией.
//           <br/>
//           <br/>
//       Наша компания имеет безграничные возможности!
//         </p>
//         <button className={s.applyButton}>Оставить заявку</button>
//       </div>
//       <div className={s.Cards}>
//         {cardDirections} {/* Отображаем массив компонентов CardDirection */}
//       </div>
//     </div>
//   );
// }