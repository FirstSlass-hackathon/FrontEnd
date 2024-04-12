import React from "react";
import Button from "../../ui/Button/Button";
import s from './style.module.scss';
import kacheliImage from '../../../assets/images/swing.jpg';
import twix from '../../../assets/images/twix.jpg';
import {goToLink} from '../Main';

export const AboutUs = () => {
  return (
      <div className={s.aboutUs}>
        <div className={s.aboutUs__title}> 
          <h1 className={s.title}>о компании</h1>
          <h2 className={s.name}>
            <span className={s.highlight}>ЭКСКЛЮЗИВНЫЕ</span> <span>ПОЕЗДКИ</span>
            <br/>
            <span>ИНДИВИДУАЛЬНЫЙ ПОДХОД</span>
            <br/>
            <span>ДЛЯ САМЫХ</span> <span className={s.highlight}>ИСКУШЕННЫХ</span> <span>ТУРИСТОВ</span>
          </h2>
        </div>

        <div className={s.aboutUs__main}>
          <p className={s.description}>
          First Class предлагает роскошные и&nbsp;неповторимые путешествия
    по&nbsp;всему миру. Мы&nbsp;специализируемся на&nbsp;организации индивидуальных туров для самых
    взыскательных клиентов.
            <br/>
            <br/>
            Мы&nbsp;предлагаем широкий спектр услуг, включая организацию проживания в&nbsp;роскошных
    отелях, бронирование частных самолетов и&nbsp;яхт, организацию эксклюзивных экскурсий
    и&nbsp;встреч со&nbsp;знаменитостями, а&nbsp;также оказание персональной помощи
    во&nbsp;время путешествия.
          </p>
          <Button onClick={goToLink} text={'О нас'}/>
        </div>

        <div className={s.aboutUs__block}>
          <div className={s.imageContainer}>
            <img className={s.image1} src={kacheliImage} alt="Качели" />
            <img className={s.image2} src={twix} alt="Сладкая парочка" />
          </div>
        </div>
      </div>
  );
}