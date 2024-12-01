import React, { useContext } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';
import { PopupContext } from '../../contexts/PopupProvider';
import { RiCloseLine } from "react-icons/ri";
import Login from '@components/Login/Login';
import Register from '@components/Register/Register';

const Popup = () => {
    const {isPopupOpen, setIsPopupOpen, type} = useContext(PopupContext);
    const { container, overlay, popupContainer, slidePopupContainer, closeBox } = styles ;

    const handleToggle = () => {
        setIsPopupOpen(!isPopupOpen);
      };

    const handleContent = () => {
        switch (type) {
          case "login":
            return <Login/>;
          case "register":
            return <Register/>;
          default:
            return <div>login</div>;
        }
      };
  return (
    <div className={container}>
        <div onClick={handleToggle} className={classNames({[overlay]: isPopupOpen})}></div>
        <div className={classNames(popupContainer, {
            [slidePopupContainer]: isPopupOpen
        })}>
            {isPopupOpen && (
          <div className={closeBox} onClick={handleToggle}>
            <RiCloseLine />
          </div>
        )}
            {handleContent()}
        </div>
    </div>
  )
}

export default Popup