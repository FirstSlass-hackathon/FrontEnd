import React, { useEffect, useRef } from 'react';
import s from './style.module.scss';
import CardImpression from '../../ui/Cards/CardImpression'; // Исправленный импорт

export const Impressions = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = cardsRef.current.querySelectorAll(`.${s.cards} .${s.card}`);

      cards.forEach((card, index) => {
        const leftPosition = card.getBoundingClientRect().left;
        const windowWidth = window.innerWidth;

        if (leftPosition < windowWidth * 0.75) {
          card.classList.add(s.slideInLeft); // Используем новую анимацию
        } else {
          card.classList.remove(s.slideInLeft); // Убираем класс анимации
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
    <div className={s.container}>
      <div className={s.impression}>
        <div className={s.block}>
          <div className={s.text}>
            <div className={s.title}>впечатления</div>
            <div className={s.name}>
              <span>ИСТОРИИ,</span>
              <br/>
              <span>КОТОРЫЕ</span> <span className={s.highlight}>ВДОХНОВЛЯЮТ</span>
            </div>
          </div>
          <div ref={cardsRef} className={s.cards}>
            <CardImpression />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressions;