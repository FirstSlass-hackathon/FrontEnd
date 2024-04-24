import React, { useState } from "react";
import axios from "axios";
import s from './style.module.scss';
import { Checkbox } from '../../ui/Checkboxes/Checkbox';
import { Button } from '../../ui/Button/Button';
import { useTranslation } from 'react-i18next';
import close from '../../../assets/images/close.png';

export const Order = () => {
  const initialState = {
    name: "",
    fam: "",
    email: "",
    phone: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для отображения модального окна
  const [errorModalOpen, setErrorModalOpen] = useState(false); // Новое состояние для ошибок
  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.fam.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorModalOpen(true); // Открываем модальное окно ошибки
      return;
  }

    try {
      const response = await axios.post("https://andreygriko.pythonanywhere.com/submitData/", formData);
      console.log(response.data);
      setFormData(initialState); // Очистка данных после успешной отправки
      setIsSubmitted(true);
      handleModalOpen(); // Показываем модальное окно после успешной отправки
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  return (

    <div className={s.parallax}>
      <div className={s.layer1}></div>
      <div className={s.layer2}></div>
      <div className={s.layer3}></div>
      <div className={s.layer4}></div>
      {isSubmitted ? ( // Форма исчезает, если заявка отправлена
              <div className={s.submittedMessage}>{t("order.submitted_message")}</div>
            ) : (
              <div className={s.order}>
                <div className={s.order__block}>
                  <div className={s.order__title}>{t("order.start_journey")}</div>
                  <div className={s.order__name}>
                      {t("order.begin_travel")}
                  </div>
                </div>
                <div className={s.order__inputs}>
                      <form onSubmit={handleSubmit}>
                        <div className={s.order__inputs_row}>
                          <input
                            type="text"
                            placeholder={t("order.name")}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <input
                            type="text"
                            placeholder={t("order.surname")}
                            name="fam"
                            value={formData.fam}
                            onChange={handleChange}
                          />
                        </div>
                        <div className={s.order__inputs_row}>
                          <input
                            type="email"
                            placeholder={t("order.email")}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <input
                            type="tel"
                            placeholder={t("order.phone")}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className={s.checkbox}>
                          <Checkbox />
                          </div>
                        <Button className={s.order__btn} type="submit" text={t("order.submit_button")} colorScheme={'white'}/>
                        {errorModalOpen && (
                          <div className={s.errorModal}>
                              <div className={s.errorModal__title}>{t("order.error_title")}</div>
                          </div>
                        )}
                      </form>
                </div>
              </div>
        )}
        {/* Модальное окно */}
        {isModalOpen && (
          <div className={s.modal}>
          <div className={s.modal__img}>
            <img src={close} alt={'close button'} onClick={handleModalClose}/>
          </div>
          <div className={s.modal__content}>
            <div className={s.modal__title}>{t("order.modal_title")}</div>
              <div className={s.modal__text}>{t("order.modal_message")}</div>
              <div className={s.modal__moto}>{t("order.modal_moto")}</div>
          </div>
      </div>
        )}
    </div>
  );
};