import React, { useState } from "react";
import s from './style.module.scss';
import lion from '../../../assets/images/lion.jpeg';

const impressionsList = [
  { name: 'imp1', image: lion, text: 'Отзыв 1', author: 'Автор 1' },
  { name: 'imp2', image: lion, text: 'Отзыв 2', author: 'Автор 2' },
  { name: 'imp3', image: lion, text: 'Отзыв 3', author: 'Автор 3' }, // Использование импортированного изображения
];

export const ImpressionsList = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === impressionsList.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? impressionsList.length - 1 : current - 1);
  };

  return (
    <div className={s.impressionsList}>
      <img src={impressionsList[current].image} className={s.image} alt={impressionsList[current].name} />
      <div className={s.text}>
        <div className={s.symbol}>“</div>
        <p className={s.impression}>{impressionsList[current].text}</p>
        <div className={s.signature}>{impressionsList[current].author}</div>
        <div className={s.controls}>
          <button className={`${s.controlButton} ${s.left}`} onClick={prevSlide}>
            {"\u2190"} {/* Unicode символ для левой стрелки */}
          </button>
          <button className={`${s.controlButton} ${s.right}`} onClick={nextSlide}>
            {"\u2192"} {/* Unicode символ для правой стрелки */}
          </button>
        </div>
      </div>
    </div>
  );
};