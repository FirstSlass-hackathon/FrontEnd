import React from "react";
// import Button from "../../ui/Button/Button";
import s from './style.module.scss';
import kacheliImage from '../../../assets/images/swing.jpg';
import twix from '../../../assets/images/twix.jpg';
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";


export const AboutUs = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.aboutUs}>
        <div className={s.aboutUs__title}> 
          <div className={s.title}>{t("about_company")}</div>
          <div className={s.name}>
            <span className={s.highlight}>{t("EXCLUSIVE")}</span> <span>{t("TRIPS")}</span>
            <br/>
            <span>{t("INDIVIDUAL_APPROACH")}</span>
            <br/>
            <span>{t("FOR_THE_MOST")}</span> <span className={s.highlight}>{t("SOPHISTICATED")}</span> <span>{t("TOURISTS")}</span>
          </div>
        </div>

        <div className={s.aboutUs__main}>
          <p className={s.description}>
          {t("aboutUs_descr1")}
            <br/>
            <br/>
          {t("aboutUs_descr2")}
          </p>
          {/* <Button onClick={goToLink} text={'О нас'}/> */}
        </div>

        <div className={s.aboutUs__block}>
          <div className={s.imageContainer}>
            <img className={s.image1} src={kacheliImage} alt="Качели" />
            <img className={s.image2} src={twix} alt="Сладкая парочка" />
          </div>
        </div>
      </div>
    </div>
  );
}