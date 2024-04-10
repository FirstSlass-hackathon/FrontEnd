import React from "react";
import cn from 'classnames';
import s from './style.module.scss';

// export const Card = () => {
//   return (
//     <div
//       style={{
//         width: '326px',
//         height: '510px',
//         cursor: 'pointer'
//     }}>
//     </div>
//   )
// }

export const CardDirection = ({title, date, direction, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.dir)}>
          <div className={s.info}>
            <div className={s.info__title}>{title}</div>
            <div className={s.info__offer}>
              <div className={s.info__date}>{date}</div>
              <div className={s.info__direction}>{direction}</div>
            </div>
          </div>
      </div>
    </>
  )
}

const titles = [
  {title: 'Америка', date: '3-5 дней', direction: 'Озеро Пауэлл Глен-Каньон'},
  {title: 'Индонезия', date: '2-3 дня', direction: 'выходные на бали'},
  {title: 'Малайзия', date: '7-12 дней', direction: 'куала-лумпур о. борнео'}
];

const cardDirections = titles.map((item, index) => (
  <CardDirection key={index} {...item} />
));

export default cardDirections;