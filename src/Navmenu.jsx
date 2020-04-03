import React from 'react';
import style from './Navmenu.module.css'

function Navmenu() {
  return (
    <div className={style.nav}>
      <a href="" className={style.link}>Главная</a>
      <a href="" className={style.link}>Скиллы</a>
      <a href="" className={style.link}>Проекты</a>
      <a href="" className={style.link}>Контакты</a>
    </div>
  );
}

export default Navmenu;
