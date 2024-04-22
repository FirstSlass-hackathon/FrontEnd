import React, { useEffect, useRef } from 'react';
import s from './style.module.scss';
import cardTravels from '../../ui/Cards/CardTravel';
import { useTranslation } from 'react-i18next';

export const Travels = () => {
  const cardsRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const cards = cardsRef.current.querySelectorAll(`.${s.card}`);

      cards.forEach((card, index) => {
        const topPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (topPosition < windowHeight * 0.75) {
          card.classList.add(s.slideInUp); // Добавляем новую анимацию
        } else {
          card.classList.remove(s.slideInUp); // Убираем класс анимации
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={s.container}>
      <div className={s.travels}>
        <div className={s.text}>
          <div className={s.title}>{t("travels.types")}</div>
          <div className={s.name}>
            <span>{t("travels.FIND")}</span>
            <br/>
            <span>{t("travels.TRIP")}</span> <span className={s.highlight}>{t("travels.taste")}</span>
          </div>
        </div>
        <div ref={cardsRef} className={s.cards}>
          {cardTravels.map((card, index) => (
              <div key={index} className={s.card}>
                {card}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}