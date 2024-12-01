import React from 'react';
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import style from './style.module.scss';

const AccordionItem = ({ id, title, products, isOpen, toggle }) => {
  const { accordingTitle, listItem, itemProduct, link, icon, subtitle, collapsed, expanded, iconPlus } = style;

  return (
    <li style={{paddingBottom: "10px"}}>
      <div className={`${accordingTitle} ${!products ? 'noProducts' : ''}`} onClick={() => products && toggle(id)}>
        <a href="#">{title}</a>
        {products && (
            isOpen ? <FiMinus className={iconPlus} /> : <GoPlus className={iconPlus} />
        )}
      </div>
      <div className={`${listItem} ${isOpen ? expanded : collapsed}`}>
        <ul>
        {products && products.map((product, index) => (
            <li style={{ margin: "20px 0" }} className={itemProduct} key={index}>
                <a className={link} href="#">
                <div className={icon}>
                    <img style={{ width: 24, height: 26 }} src={product.img} alt="" />
                </div>
                <p className={subtitle}>{product.title}</p>
                </a>
            </li>
        ))}
        </ul>
      </div>
    </li>
  );
};

export default AccordionItem;
