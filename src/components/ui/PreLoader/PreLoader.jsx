import React from 'react';
import s from './style.module.scss'


const Preloader = () => {
  return (
    <body>
    <div className={s.container}>
    <div className={s.preloader}>
    <span className={s.light}></span>
    <span></span>
    <span></span>
    <span className={s.light}></span>
    </div>
    </div>
    </body>
  );
};

export default Preloader;

{/* //TODO

<video> имеет атрибут onLoadedData, который можно использовать для отслеживания загрузки видео

*/}