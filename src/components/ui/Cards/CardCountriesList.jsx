import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/africa_countries/ghana.jpg';
import img2 from '../../../assets/images/africa_countries/namibia.jpg';
import img3 from '../../../assets/images/africa_countries/botsvana.jpg';
import img4 from '../../../assets/images/africa_countries/uganda.jpg';
import img5 from '../../../assets/images/africa_countries/kenia.jpg';
import img6 from '../../../assets/images/africa_countries/kabo_verde.jpg';
import img7 from '../../../assets/images/africa_countries/tanzania.jpg';
import img8 from '../../../assets/images/africa_countries/madagascar.jpg';
import img9 from '../../../assets/images/africa_countries/zimbabve.jpg';

export const CardCountriesList = ({text_h1, description, img, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.size__countries, s.shd)}>
          <img src={img} className={s.img} alt={"img"}></img>
          <div className={cn(s.info, s.info__countriesList)}>
            <div className={s.info__text_h1}>{text_h1}</div>
            <div className={s.info__description}>{description}</div>
          </div>
      </div>
    </>
  )
}

const titles = [
  { text_h1: 'Гана', description: 'Здесь можно посетить многочисленные заповедники со слонами, антилопами, обезьянами и прочим экзотическим зверьём, побывать в развалинах замков и крепостей Кейп-пост и Эльмина, занесённых в список Всемирного наследия ЮНЕСКО.', img: img1 },
  { text_h1: 'Намибия', description: 'Здесь находится самая древняя пустыня на земле — Намиб, легендарный Берег Скелетов, множество национальных парков, место падения крупнейшего метеорита Хоб, второй по величине после Колорадского каньон и многое другое.', img: img2 },
  { text_h1: 'Ботсвана', description: 'Одним из популярных туристических аттракционов, наряду с сафари в пустыню Калахари и посещением национальных парков, ещё с 30-х годов прошлого века считается поиск древних сокровищ, спрятанных от колонизаторов в пещерах Гчвихаба.', img: img3 },
  { text_h1: 'Уганда', description: 'Здесь вы сможете ощутить настоящее африканское приключение, отправившись на сафари в национальные парки, покорив вершину Восточной Африки - гору Килиманджаро, исследовав таинственные пещеры и ущелья, и насладившись местными традициями и кулинарными изысками.', img: img4 },
  { text_h1: 'Кения', description: 'Страна племени масаев и визитная карточка настоящей африканской природы, очень красива, приветлива и туристически развита. Гора Кения — вторая на континенте по высоте после Килиманджаро. По всей стране можно наблюдать за косяками мигрирующих птиц.', img: img5 },
  { text_h1: 'Кабо-Верде', description: 'На островах живописные ландшафты: потухшие вулканы, горные цепи, где можно заняться трекингом, цветущие луга, в которых стоит просто прогуляться. Но главная особенность Кабо-Верде, это океан — он используется на полную мощность: начиная от пляжей с чёрным вулканическим песком, продолжая погружениями к местам кораблекрушений и заканчивая виндсёрфингом.', img: img6 },
  { text_h1: 'Танзания', description: 'Остров Занзибар — курортное место, где расположен основанный арабами ещё в IX веке красивейший Каменный город. Отсюда отправляются в туры за специями, во время которых можно настрогать корицы и попробовать незнакомые пряности. Знаменитый национальный парк Серенгети, который занимает огромную площадь и где живут более трёх миллионов крупных диких зверей.', img: img7 },
  { text_h1: 'Мадагаскар', description: 'На острове много природных парков и охраняемых зон. Самый большой заповедник Цинги-де-Бемараха, который как и многие другие внесён в список Всемирного наследия ЮНЕСКО. Страна богата красивыми пляжами.', img: img8 },
  { text_h1: 'Зимбабве', description: 'В Зимбабве очень хорошо работает природоохранная структура и животных здесь необычайно много даже для Африки, поэтому в некоторых местах разрешена охота.', img: img9 }
];

const cardCountriesList = titles.map((item, index) => (
  <CardCountriesList key={index} {...item} />
));

export default cardCountriesList;