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

export const CardImpression = ({title, text, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.imp)}>
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