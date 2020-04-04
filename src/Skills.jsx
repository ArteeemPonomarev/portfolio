import React from 'react';
import style from './Skills.module.css'

function Skills() {
  return (
    <div className={style.skills}>
      <div className={style.container}>
        <div className={style.title}>
          My skills
        </div>
        <div className={style.skills_list}>
          <div className={style.skill_item}>
            <div className={style.skill_item_image}>
            </div>
            <div className={style.technology_name}>React</div>
            <div className={style.description}>
              <span>Подробное описание навыка</span>
            </div>
          </div>
          <div className={style.skill_item}>
            <div className={style.skill_item_image}>
            </div>
            <div className={style.technology_name}>React</div>
            <div className={style.description}>
              <span>Подробное описание навыка</span>
            </div>
          </div>
          <div className={style.skill_item}>
            <div className={style.skill_item_image}>
            </div>
            <div className={style.technology_name}>React</div>
            <div className={style.description}>
              <span>Подробное описание навыка</span>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
}

export default Skills;
