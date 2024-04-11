import React, { useState } from 'react';
import s from './style.module.scss';
import africa from '../../../assets/images/africa.jpg';

const continents = [
  { name: 'Европа', image: '/path/to/europe.jpg' },
  { name: 'Азия', image: '/path/to/asia.jpg' },
  { name: 'Африка', image: africa, link: '/africa' }, // Использование импортированного изображения
  { name: 'Америка', image: '/path/to/america.jpg' },
  { name: 'Австралия', image: '/path/to/australia.jpg' },
];

export const Continents = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === continents.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? continents.length - 1 : current - 1);
  };

  return (
    <div className={s.carousel}>
      <img src={continents[current].image} alt={continents[current].name} className={s.image} />
      <a href={continents[current].link} className={s.continentName}>
        {continents[current].name}
      </a>
      <div className={s.controls}>
        <button className={`${s.controlButton} ${s.left}`} onClick={prevSlide}>
        ← {/* Замените символдля левой стрелки */}
        </button>
        <button className={`${s.controlButton} ${s.right}`} onClick={nextSlide}>
        → {/* Замените символ для правой стрелки */}
        </button>
      </div>
    </div>
  );
};
