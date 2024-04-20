import React, { useEffect, useRef } from 'react';
import s from './style.module.scss'; // Импортируем стили
import cardDirections from '../../ui/Cards/CardDirection';

export const Directions = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = cardsRef.current.querySelectorAll(`.${s.card}`);

      cards.forEach((card, index) => {
        const topPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (topPosition < windowHeight * 0.75) {
          card.classList.add(s.slideInRight); // Используем новую анимацию
        } else {
          card.classList.remove(s.slideInRight); // Убираем класс анимации
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Очищаем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={s.directions}>
      <div className={s.text}>
        <div className={s.title}>направления</div>
        <div className={s.name}>
          <span>ЛОВИТЕ</span>
          <br />
          <span className={s.highlight}>ВПЕЧАТЛЕНИЯ</span>
        </div>
        <p className={s.description}>
          Ваши желания ничем не&nbsp;ограничены. Вы&nbsp;ограничены только собственной фантазией.
          <br />
          <br />
          Наша компания имеет безграничные возможности!
        </p>
      </div>
      <div ref={cardsRef} className={s.cards}>
        {cardDirections.map((card, index) => (
          <div key={index} className={`${s.card} ${s.animated}`}>
            {card}
          </div>
        ))}
      </div>    </div>
  );
};