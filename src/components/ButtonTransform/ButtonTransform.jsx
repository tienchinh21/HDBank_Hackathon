import React from 'react';
import style from './style.module.scss';
import { FaAngleRight } from "react-icons/fa";

const ButtonTransform = ({content}) => {
    const { btnCard, icon, text } = style;
  return (
    <div  className={btnCard}>
        <a href="">
            <FaAngleRight className={icon} />
            <p className={text}>{content}</p>
        </a>
    </div>
  )
}

export default ButtonTransform;