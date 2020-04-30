import React from 'react';
import style from './Footer.module.css'

function Header() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div classsName={style.title}>
          Артем Пономарев
        </div>
        <div className={style.socialNetBtns}>
          <button>VK</button>
          <button>TG</button>
          <button>WATS</button>
          <button>Inst</button>
        </div>
        <div className={style.rules}>
          &copy;2020. Все права защищены.
        </div>
      </div>
    </div>
  );
}

export default Header;
