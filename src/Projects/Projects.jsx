import React from 'react';
import style from './Projects.module.css'

function Projects() {
  return (
    <div className={style.projects}>
      <div className={style.container}>
        <h3 className={style.projects__title}>
          My projects
        </h3>
        <div className={style.projects__items}>

          <div className={style.projects__item}>
            <div className={style.project__item_img}>
              <button className={style.projects__item_btn}>Смотреть</button>
            </div>
            <h4 className={style.project__item_title}>
              Название проекта
            </h4>
            <div className={style.project_item_description}>
              Краткое описание <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem rem quas nemo quae labore vero, neque nam est eligendiorawsnvy awporgaemporahep9 oinbheu9r8aghm
            </div>
          </div>

          <div className={style.projects__item}>
            <div className={style.project__item_img}>
              <button className={style.projects__item_btn}>Смотреть</button>
            </div>
            <h4 className={style.project__item_title}>
              Название проекта
            </h4>
            <div className={style.project_item_description}>
              Краткое описание <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem rem quas nemo quae labore vero, neque nam est eligendiorawsnvy awporgaemporahep9 oinbheu9r8aghm
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
