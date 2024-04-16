import React from 'react';
import s from './style.module.scss';
import Button from '../../ui/Button/Button';
// import cardAdvantages from '../../ui/Cards/CardAdv';
// import {scrollToOrder} from '../Main';

export const AboutAfrica = () => {

  return (
    <div className={s.aboutAfrica}>
      <div className={s.imagesContainer}>
        {/*<img className={s.image1} src={first} alt="пума" />
        <img className={s.image2} src={second} alt="дерево" />
  <img className={s.image3} src={third} alt="жирафы" />*/}
      </div>
      <div className={s.text}>
        <h2 className={s.title}>Африка</h2>
        <h1 className={s.name}>
          <span className={s.highlight}>УНИКАЛЬНЫЕ</span>
          <br/>
          <span>ТУРЫ ПО</span>
          <br/>
          <span>ДАЛЬНИМ</span>
          <br/>
          <span>УГОЛКАМ АФРИКИ</span>
        </h1>
        <p className={s.description}>
        Африка&nbsp;&mdash; это загадочный континент, наполненный дикой
        красотой и&nbsp;удивительными приключениями. От&nbsp;бескрайних пустынь
        до&nbsp;густых джунглей, от&nbsp;величественных гор до&nbsp;бескрайних
        пляжей&nbsp;&mdash; здесь каждый найдет что-то по&nbsp;своему вкусу.
          <br/>
          <br/>
          Путешествие по&nbsp;Африке обещает незабываемые впечатления
          и&nbsp;возможность познакомиться с&nbsp;удивительными культурами
          и&nbsp;традициями местных жителей. Вы&nbsp;сможете отправиться
          на&nbsp;сафари и&nbsp;увидеть в&nbsp;дикой природе слонов, львов,
          жирафов и&nbsp;других животных, либо отдохнуть на&nbsp;роскошных
          белоснежных пляжах у&nbsp;бирюзового океана.
        </p>
        <Button className={s.button} /*onClick={scrollToOrder}*/ text={'Оставить заявку'} colorScheme={'black'}/>
      </div>
    </div>
  );
}