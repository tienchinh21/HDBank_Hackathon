import React from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';

const Button = ({content, isRegister = false, onClick, btnSubmit}) => {

    const { btn, btnRegister, wh } = styles
  return (
   <button onClick={onClick} className={classNames(btn, {
    [btnRegister]: isRegister,
    [wh]: btnSubmit
   })}>{content}</button>
  )
}

export default Button;