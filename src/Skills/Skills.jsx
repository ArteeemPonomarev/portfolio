import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={style.container}>
                <div className={style.title}>
                    My skills
                </div>

                <div className={style.skills_list}>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, odit!'}/>
                    <Skill title={'HTML'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, odit!'}/>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, odit!'}/></div>

            </div>
        </div>
    );
}

export default Skills;
