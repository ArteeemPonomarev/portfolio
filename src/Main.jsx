import React from 'react';
import style from './Main.module.css'

function Main() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.greeting}>
          <span>Привет</span>
          <span>Меня зовут Артем Пономарев</span>
          <span>Я front-end разработчик</span>
        </div>
        <div className={style.photo}>
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Main;
