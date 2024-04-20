import React, { useState } from "react";
import axios from "axios";
import s from './style.module.scss';
import { Checkbox } from '../../ui/Checkboxes/Checkbox';
import { Button } from '../../ui/Button/Button';

export const OrderAfrica = () => {
  const initialState = {
    name: "",
    fam: "",
    email: "",
    phone: ""
  };
  
  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для отображения модального окна
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/submitData/", formData);
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
  };
  
  return (
    <div className={s.container}>
        {isSubmitted ? ( // Показываем надпись, если форма отправлена
                <div className={s.submittedMessage}>Спасибо за ваше обращение!</div>
              ) : (
          <div className={s.order}>
            <div className={s.order__block}>
              <div className={s.order__title}>мир в шаге от тебя</div>
              <div className={s.order__name}>
                  начните путешествие
                  <br/>
                  на высочайшем уровне
                  <br/>
                  с first class
              </div>
            </div>
            <div className={s.order__inputs}>
                    <form onSubmit={handleSubmit}>
                      <div className={s.order__inputs_row}>
                        <input
                          type="text"
                          placeholder="Имя"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          placeholder="Фамилия"
                          name="fam"
                          value={formData.fam}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={s.order__inputs_row}>
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <input
                          type="tel"
                          placeholder="Телефон"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={s.checkbox}>
                        <Checkbox />
                      </div>
                      <Button className={s.order__btn} type="submit" text={'Оставить заявку'} colorScheme={'white'}/>
                    </form>
            </div>  
          </div>
        )} 
        {/* Модальное окно */}        {isModalOpen && (
          <div className={s.modal}>
          <div className={s.modalContent}>
            <h3 className={s.modalTitle}>Спасибо за ваше обращение</h3>
            <p>Наши специалисты свяжутся с вами в ближайшее время.</p>
            <button className={s.modalCloseBtn} onClick={handleModalClose}>Закрыть</button>
          </div>
        </div>
      )}
  </div>
);
};