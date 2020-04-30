import React from 'react';
import style from './Slogan.module.css'

function Slogan() {
  return (
    <div className={style.slogan}>
      <div className={style.container}>
      <div className={style.sloganTitle}>
        Рассматриваю варианты удаленной работы
      </div>
      <div className={style.sloganBtn}>
        <button>Нанять меня</button>
      </div>
    </div>
    </div>
  );
}

export default Slogan;
