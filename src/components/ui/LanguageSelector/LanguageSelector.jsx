import React from "react"
import s from './LanguageSelector.scss'
import i18n from "../../../i18n"

export const LanguageSelector = () => {
  

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div className="container">
      <div className="radio_container">
        <input type="radio" name="radio" id="one" defaultChecked />
        <label htmlFor="one">RU</label>
        <input type="radio" name="radio" id="two" />
        <label htmlFor="two">EN</label>
      </div>
    </div>
  );
};

export default LanguageSelector;