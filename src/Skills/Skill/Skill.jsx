import React from 'react';
import style from './Skill.module.css'

const Skill = (props) => {
    return (
            <div className={style.skill_item}>
                <div className={style.skill_item_image}>
                </div>
                <div className={style.technology_name}>
                    {props.title}
                </div>
                <div className={style.description}>
                    <span>{props.description}</span>
                </div>
            </div>
    );
}

export default Skill;