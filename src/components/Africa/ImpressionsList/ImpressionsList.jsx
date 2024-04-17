import React, { useState } from "react";
import s from './style.module.scss';
import lion from '../../../assets/images/lion.jpeg';
import icon from '../../../assets/images/“.png';
//import { CSSTransition } from 'react-transition-group';

const review1 = 'First Class - это просто находка для туриста, которого уже сложно удивить. Компания организует такие туры, которые невозможно даже себе представить.'
const review2 = 'Чуть позже здесь будет добавлен еще один отзыв о поездке через Первый класс'
const review3 = 'Чуть позже здесь будет добавлен еще один отличный отзыв о поездке через Первый класс'
const author1 = 'КРИСТИНА, МОСКВА'
const author2 = 'АЛЕКСАНДР, САНКТ-ПЕТЕРБУРГ'
const author3 = 'КИРИЛЛ, НИЖНИЙ НОВГОРОД'

const impressionsList = [
  { name: 'imp1', image: lion, text: review1, author: author1 },
  { name: 'imp2', image: lion, text: review2, author: author2 },
  { name: 'imp3', image: lion, text: review3, author: author3 }, // Использование импортированного изображения
];

export const ImpressionsList = () => {
  const [current, setCurrent] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const nextSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrent(current === impressionsList.length - 1 ? 0 : current + 1);
      setFadeOut(false);
    }, 500); // Задержка должна быть равна длительности анимации в CSS
  };

  return (
    <div className={s.impressionsList}>
      <img src={impressionsList[current].image} className={`${s.image} ${fadeOut ? s.fadeOut : ''}`} alt={impressionsList[current].name} />
      <div className={s.text}>
        <div className={s.symbol}>"</div>
        <p className={`${s.impression} ${fadeOut ? s.fadeOut : ''}`}>{impressionsList[current].text}</p>
        <div className={`${s.signature} ${fadeOut ? s.fadeOut : ''}`}>{impressionsList[current].author}</div>
      </div>
      <div className={s.controls}>
        <button className={`${s.controlButton} ${s.right}`} onClick={nextSlide}>
          {"\u2192"} {/* Unicode символ для правой стрелки */}
        </button>
      </div>
    </div>
  );
};