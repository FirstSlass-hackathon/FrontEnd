import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/africa_countries/ghana.jpg';
import img2 from '../../../assets/images/africa_countries/namibia.jpg';
import img3 from '../../../assets/images/africa_countries/botsvana.jpg';
import img4 from '../../../assets/images/africa_countries/uganda.jpg';
import img5 from '../../../assets/images/africa_countries/kenia.jpg';
import img6 from '../../../assets/images/africa_countries/kabo_verde.jpg';
import img7 from '../../../assets/images/africa_countries/tanzania.jpg';
import img8 from '../../../assets/images/africa_countries/madagascar.jpg';
import img9 from '../../../assets/images/africa_countries/zimbabve.jpg';

export const CardCountriesList = ({text_h1, text_h3, direction, img, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.size, s.dir)}>
          <img src={img} className={s.img} alt={"img"}></img>
          <div className={cn(s.info, s.info__countriesList)}>
            <div className={s.info__text_h3}>{text_h3}</div>
            <div className={s.info__text_h1}>{text_h1}</div>
          </div>
      </div>
    </>
  )
}

const titles = [
  { text_h1: 'Гана', text_h3: 'страна', direction: '', img: img1 },
  { text_h1: 'Намибия', text_h3: 'страна', direction: '', img: img2 },
  { text_h1: 'Ботсвана', text_h3: 'страна', direction: '', img: img3 },
  { text_h1: 'Уганда', text_h3: 'страна', direction: '', img: img4 },
  { text_h1: 'Кения', text_h3: 'страна', direction: '', img: img5 },
  { text_h1: 'Кабо-Верде', text_h3: 'страна', direction: '', img: img6 },
  { text_h1: 'Танзания', text_h3: 'страна', direction: '', img: img7 },
  { text_h1: 'Мадагаскар', text_h3: 'страна', direction: '', img: img8 },
  { text_h1: 'Зимбабве', text_h3: 'страна', direction: '', img: img9 }
];

const cardCountriesList = titles.map((item, index) => (
  <CardCountriesList key={index} {...item} />
));

export default cardCountriesList;