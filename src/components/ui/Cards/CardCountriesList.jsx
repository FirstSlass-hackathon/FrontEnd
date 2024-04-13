import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/card.svg';

export const CardCountriesList = ({title, date, direction, img, ...props}) => {
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
  { title: 'Гана', date: '', direction: '', img: img1 },
  { title: 'Намибия', date: '', direction: '', img: img1 },
  { title: 'Ботсвана', date: '', direction: '', img: img1 },
  { title: 'Уганда', date: '', direction: '', img: img1 },
  { title: 'Кения', date: '', direction: '', img: img1 },
  { title: 'Кабо-Верде', date: '', direction: '', img: img1 },
  { title: 'Танзания', date: '', direction: '', img: img1 },
  { title: 'Мадагаскар', date: '', direction: '', img: img1 },
  { title: 'Зимбабве', date: '', direction: '', img: img1 }
];

const cardCountriesList = titles.map((item, index) => (
  <CardCountriesList key={index} {...item} />
));

export default cardCountriesList;

// const cardCountriesList = [];
// for (let i = 0; i < titles.length; i += 3) {
//   const block = titles.slice(i, i + 3).map((item, index) => (
//     <CardCountriesList key={i + index} {...item} />
//   ));
//   cardCountriesList.push(
//     <div key={i / 3} className={s.block}>
//       {block}
//     </div>
//   );
// }

// export default cardCountriesList;