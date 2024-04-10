import React, { useState } from "react";
import axios from "axios";
import cn from 'classnames';
import s from './style.module.scss';
import { Checkbox } from '../../ui/Checkboxes/Checkbox';

export const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    fam: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/submitData/", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={s.order}>
      <div className={s.order__text}>
        <h3>мир в шаге от тебя</h3>
        <div className={s.order__upCase}>
          <h1>
          начните путешествие
          <br/>
          на высочайшем уровне
          <br/>
          с first class
          </h1>
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

          <button type="submit">Оставить заявку</button>
        </form>
      </div>      
    </div>
  );
};
