import React from "react";
import cn from 'classnames';
import s from './style.module.scss';

import img1 from '../../../assets/images/homePage_cards/advantages_card1.jpg';
import img2 from '../../../assets/images/homePage_cards/advantages_card2.jpg';
import img3 from '../../../assets/images/homePage_cards/advantages_card3.jpg';
import img4 from '../../../assets/images/homePage_cards/advantages_card4.jpg';

const CardAdvantages = ({ advantages, img }) => {
  const highlightWords = (text) => {
    const highlightedWords = [
      { img: img1, words: ["Индивидуальные", "по миру"] },
      { img: img2, words: ["Приватные", "туры"] },
      { img: img3, words: ["VIP-трансферы"] },
      { img: img4, words: ["Роскошные", "уровнем"] }
    ];

    const currentImage = highlightedWords.find(item => item.img === img);
    if (!currentImage) return text;

    const words = text.split(' ');
    const highlightedText = [];
    let line = [];
    words.forEach(word => {
      if (currentImage.words.includes(word)) {
        if (line.length > 0) {
          highlightedText.push(<span>{line.join(' ')}<br/></span>);
          line = [];
        }
        highlightedText.push(<span className={s.highlighted}>{word}</span>);
        highlightedText.push(<br/>);
      } else {
        line.push(word);
      }
    });
    if (line.length > 0) {
      highlightedText.push(<span>{line.join(' ')}</span>);
    }
    return highlightedText;
  };

  return (
    <div className={cn(s.component, s.small, s.adv)}>
      <img src={img} className={s.img} alt={"img"} />
      <div className={cn(s.info, s.info__adv)}>
        {highlightWords(advantages)}
      </div>
    </div>
  );
};

const advantages = [
  {advantages: 'Индивидуальные экскурсии и специально разработанные маршруты по миру', img: img1},
  {advantages: 'Приватные вертолетные и яхтенные туры', img: img2},
  {advantages: 'VIP-трансферы и частные самолеты', img: img3},
  {advantages: 'Роскошные отели и виллы с высочайшим уровнем сервиса', img: img4}
];

const cardTravels = advantages.map((item, index) => (
  <CardAdvantages key={index} {...item} />
));

export default cardTravels;