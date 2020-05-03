import React from 'react';
import style from "./Project.module.css";

const Project = (props) => {
    return (
        <div className={style.projects__item}>
            <div className={style.project__item_img}>
                <button className={style.projects__item_btn}>Смотреть</button>
            </div>
            <h4 className={style.project__item_title}>
                {props.title}
            </h4>
            <div className={style.project_item_description}>
                Summary <br/>
                {props.description}
            </div>
        </div>
    );
}

export default Project;