import React from 'react';
import style from './Projects.module.css'
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={style.projects}>
            <div className={style.container}>
                <h3 className={style.projects__title}>
                    My projects
                </h3>
                <div className={style.projects__items}>
                    <Project title={'Name of project'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem rem quas nemo quae labore vero, neque nam est                                             eligendiorawsnvy awporgaemporahep9 oinbheu9r8aghm'}/>
                    <Project title={'Name of project'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem rem quas nemo quae labore vero, neque nam est                                             eligendiorawsnvy awporgaemporahep9 oinbheu9r8aghm'}/>
                    <Project title={'Name of project'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem rem quas nemo quae labore vero, neque nam est                                             eligendiorawsnvy awporgaemporahep9 oinbheu9r8aghm'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
