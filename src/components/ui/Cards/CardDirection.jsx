import React, { useState } from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/homePage_cards/directions_card1.jpg';
import img2 from '../../../assets/images/homePage_cards/directions_card2.jpg';
import img3 from '../../../assets/images/homePage_cards/directions_card3.jpg';

export const CardDirection = ({ title, date, direction, img, description_dir, price, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(s.component, s.size, s.dir)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} className={s.img} alt={"img"} />
      <div className={s.info}>
        <div className={s.info__title}>{title}</div>
        <div className={s.info__offer}>
          <div className={s.info__date}>{date}</div>
          <div className={s.info__direction}>{direction}</div>
          {isHovered && (
            <div className={s.info__description_dir}>
              <div className={s.info__description_text}>{description_dir}</div>
              <div className={s.info__price}>{price}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const titles = [
  {
    title: 'Америка',
    date: '3-5 дней',
    direction: 'Озеро Пауэлл Глен-Каньон',
    description_dir: 'Невероятные каньоны и природные ландшафты, непохожие ни на что на земле. Озеро расположено в национальной зоне отдыха Глен-Каньон на границе Юты и Аризоны.',
    price: 'От 6575 $',
    img: img1
  },
  {
    title: 'Индонезия',
    date: '2-3 дня',
    direction: 'выходные на бали',
    description_dir: 'Проведите незабываемые выходные на курортном острове Бали! Здесь вас ждут белоснежные пляжи, теплое море, изысканная кухня и роскошные SPA-процедуры.',
    price: 'От 6575 $',
    img: img2
  },
  {
    title: 'Малайзия',
    date: '7-12 дней',
    direction: 'куала-лумпур о. борнео',
    description_dir: 'На острове Борнео вы отдохнете на восхитительных пляжах. Погрузитесь в  завораживающую природу и встретите экзотических животных, таких как орангутанги.',
    price: 'От 6575 $',
    img: img3
  }
];

const cardDirections = titles.map((item, index) => (
  <CardDirection key={index} {...item} />
));

export default cardDirections;