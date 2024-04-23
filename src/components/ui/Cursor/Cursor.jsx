import React, { useEffect, useState } from 'react';
import s from './style.module.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      const cursor2Radius = 55; // Радиус большего курсора
  
      // Ограничиваем координату X так, чтобы курсор не выходил за правую границу экрана
      let newX = Math.min(e.pageX, window.innerWidth - cursor2Radius);
  
      // Координата Y может свободно двигаться без ограничений
      let newY = e.pageY;
  
      setPosition({ x: newX, y: newY });
    };
  
    document.addEventListener('mousemove', updatePosition);
  
    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      <div className={s.cursor1} style={{ top: position.y - 15, left: position.x - 15 }}></div>
      <div className={s.cursor2} style={{ top: position.y - 30, left: position.x - 32 }}></div>
    </>
  );
};

export default Cursor;