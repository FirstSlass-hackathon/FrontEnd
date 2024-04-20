import React, { useState } from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/homePage_cards/impressions_card11.jpg';
import img2 from '../../../assets/images/homePage_cards/impressions_card12.jpg';
import img3 from '../../../assets/images/homePage_cards/impressions_card13.jpg';
import img4 from '../../../assets/images/homePage_cards/impressions_card14.jpg';
import img5 from '../../../assets/images/homePage_cards/impressions_card21.jpg';
import img6 from '../../../assets/images/homePage_cards/impressions_card22.jpg';
import img7 from '../../../assets/images/homePage_cards/impressions_card23.jpg';
import img8 from '../../../assets/images/homePage_cards/impressions_card24.jpg';
import img9 from '../../../assets/images/homePage_cards/impressions_card31.jpg';
import img10 from '../../../assets/images/homePage_cards/impressions_card32.jpg';
import img11 from '../../../assets/images/homePage_cards/impressions_card33.jpg';
import img12 from '../../../assets/images/homePage_cards/impressions_card34.jpg';

const CardImpression = ({ ...props }) => {
  const [currentIndexArray, setCurrentIndexArray] = useState([0, 0, 0]); // Используем массив для хранения индексов текущих изображений для каждой карточки

  const [titles] = useState([
    {
      title: 'Незабываемая поездка с восхождением на Эльбрус',
      text: [''],
      img: [img1, img2, img3, img4]
    },
    {
      title: 'Шикарные отели в Сингапуре',
      text: [''],
      img: [img5, img6, img7, img8]
    },
    {
      title: 'Тибетский рай',
      text: [''],
      img: [img9, img10, img11, img12]
    }
  ]);

  const handleClick = (index) => {
    const numImages = titles[index].img.length;
    const currentIndex = currentIndexArray[index];
    const nextIndex = (currentIndex + 1) % numImages; // Переключаем индекс по кругу
    const updatedArray = [...currentIndexArray]; // Создаем копию массива
    updatedArray[index] = nextIndex; // Обновляем индекс текущего изображения для текущей карточки
    setCurrentIndexArray(updatedArray); // Обновляем состояние массива индексов текущих изображений
  };

  return (
    <>
      {titles.map((item, index) => (
        <div key={index} className={cn(s.component, s.size, s.imp)} onClick={() => handleClick(index)}>
          <img src={item.img[currentIndexArray[index]]} className={s.img} alt="img" />
          <div className={cn(s.info, s.info__imp)}>
            <div className={s.info__title_imp}>{item.title}</div>
            <div className={s.info__title_text}>{item.text[currentIndexArray[index]]}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardImpression;