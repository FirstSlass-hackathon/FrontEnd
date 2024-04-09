import React from "react";
import s from './style.module.scss';
import kacheliImage from '../../../assets/images/качели.jpg'
import twix from '../../../assets/images/сладкая парочка.jpg'

export const AboutUs = () => {
  return (
    <div className={s.aboutUs}>
      <h1 className={s.title}>о компании</h1>
      <h2 className={s.name}>
        <span className={s.highlight}>ЭКСКЛЮЗИВНЫЕ</span> <span>ПОЕЗДКИ</span>
        <br/>
        <span>ИНДИВИДУАЛЬНЫЙ ПОДХОД</span>
        <br/>
        <span>ДЛЯ САМЫХ</span> <span className={s.highlight}>ИСКУШЕННЫХ</span> <span>ТУРИСТОВ</span>
      </h2>
      <p className={s.description}>
        First Class предлагает роскошные и неповторимые путешествия
        по всему миру. Мы специализируемся на организации индивидуальных туров для самых
        взыскательных клиентов.
        Мы предлагаем широкий спектр услуг, включая организацию проживания в роскошных
        отелях, бронирование частных самолетов и яхт, организацию эксклюзивных экскурсий
        и встреч с знаменитостями, а также оказание персональной помощи
        во время путешествия.
      </p>
      <div className={s.imageContainer}>
        <img className={s.image1} src={kacheliImage} alt="Качели" />
        <img className={s.image2} src={twix} alt="Сладкая парочка" />
      </div>
      <button className={s.applyButton}>Оставить заявку</button>
    </div>
  )
}