import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/homePage_cards/directions_card1.jpg';
import img2 from '../../../assets/images/homePage_cards/directions_card2.jpg';
import img3 from '../../../assets/images/homePage_cards/directions_card3.jpg';

export const CardDirection = ({title, date, direction, img, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.size, s.dir)}>
          <img src={img} className={s.img} alt={"img"}></img>
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
  {title: 'Америка', date: '3-5 дней', direction: 'Озеро Пауэлл Глен-Каньон', img: img1},
  {title: 'Индонезия', date: '2-3 дня', direction: 'выходные на бали', img: img2},
  {title: 'Малайзия', date: '7-12 дней', direction: 'куала-лумпур о. борнео', img: img3}
];

const cardDirections = titles.map((item, index) => (
  <CardDirection key={index} {...item} />
));

export default cardDirections;