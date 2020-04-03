import React from 'react';
import style from './Header.module.css';
import Navmenu from './Navmenu';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Navmenu />
      </div>
    </div>
  );
}

export default Header;
