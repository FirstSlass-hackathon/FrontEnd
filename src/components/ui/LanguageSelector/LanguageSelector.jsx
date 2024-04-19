import React from "react"
import s from './LanguageSelector.scss'


export const LanguageSelector = () => {
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