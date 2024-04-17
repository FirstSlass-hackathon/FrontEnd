import React, { useState } from "react";
import s from './style.module.scss'; // Подключаем стили
import lion from '../../../assets/images/lion.jpg'; // Импортируем изображения
import sunset from '../../../assets/images/sunset.jpg';
import man from '../../../assets/images/man.jpg';
import icon from '../../../assets/images/“.png';

const review1 = 'First Class - это просто находка для туриста, которого уже сложно удивить. Компания организует такие туры, которые невозможно даже себе представить.';
const review2 = 'Мы провели незабываемую неделю в Африке, отдыхая на уединенном острове и наслаждаясь роскошным сервисом. Это было по-настоящему эксклюзивное путешествие, которое мы запомним на всю жизнь!';
const review3 = 'Отдых в Африке оказался для нас настоящим открытием! Мы побывали в таинственных племенных поселениях, попробовали местную кухню и окунулись в мир традиций и обычаев этого загадочного континента. Настоятельно рекомендую!';

const author1 = 'КРИСТИНА, МОСКВА';
const author2 = 'АНТОН, САНКТ-ПЕТЕРБУРГ';
const author3 = 'КИРИЛЛ, МОСКВА';

const impressionsList = [
  { name: 'imp1', icon: icon, image: lion, text: review1, author: author1 },
  { name: 'imp2', icon: icon, image: sunset, text: review2, author: author2 },
  { name: 'imp3', icon: icon, image: man, text: review3, author: author3 },
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
    <div className={s.container1}> {/* Главный блок */}
      <div className={s.container2}> {/* Блок 2 с отступами */}
        <div className={s.block3}> {/* Блок 3 с фотографией */}
          <img src={impressionsList[current].image} className={`${s.image} ${fadeOut ? s.fadeOut : ''}`} alt={impressionsList[current].name} />
        </div>
        <div className={s.block4}> {/* Блок 4 с текстом и кнопкой */}
          <div className={s.text}>
          <img src={impressionsList[current].icon} className={`${s.symbol} ${fadeOut ? s.fadeOut : ''}`} alt={impressionsList[current].name}/>
            <p className={`${s.impression} ${fadeOut ? s.fadeOut : ''}`}>{impressionsList[current].text}</p>
            <div className={`${s.signature} ${fadeOut ? s.fadeOut : ''}`}>{impressionsList[current].author}</div>
          </div>
          <div className={s.controls}>
            <button className={`${s.controlButton} ${s.right}`} onClick={nextSlide}>
              {"\u2192"} {/* Unicode символ для правой стрелки */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};