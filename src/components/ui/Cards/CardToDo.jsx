import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/africa_countries/todo_card1.jpg';
import img2 from '../../../assets/images/africa_countries/todo_card2.jpg';
import img3 from '../../../assets/images/africa_countries/todo_card3.jpg';

export const CardToDo = ({title, travel, moto, img, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.size, s.tr)}>
          <img src={img} className={s.img} alt ={"img"}></img>
          <div className={s.info}>
            <div className={s.info__block}>
              <div className={s.info__title_tr}>{title}</div>
              <div className={s.info__travel_tr}>{travel}</div>
            </div>
          </div>
      </div>
    </>
  )
}

const titles = [
  {title: 'Ботсвана', travel: 'Поиск сокровищ', img: img1},
  {title: 'Гана', travel: 'Посещение заповедника', img: img2},
  {title: 'Танзания', travel: 'Гора Килиманджаро', img: img3}
];

const cardToDos = titles.map((item, index) => (
  <CardToDo key={index} {...item} />
));

export default cardToDos;