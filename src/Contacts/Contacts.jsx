import React from 'react';
import style from './Contacts.module.css'

function Contacts() {
  return (
    <div className={style.contacts}>
      <div className={style.container}>
      <div className={style.contactsTitle}>
        Контакты
      </div>
      <form className={style.contactsForm}>
        <div><input type="text" className={style.inp} /></div>
        <div><input type="text" className={style.inp} /></div>
        <div>
          <textarea className={style.contactsMess}>
          Введите сообщение
        </textarea>
        </div>
      </form>
      <div>
        <button type='submit'>
          Отправить
        </button>
      </div>
      </div>
      </div>
  );
}

export default Contacts;
