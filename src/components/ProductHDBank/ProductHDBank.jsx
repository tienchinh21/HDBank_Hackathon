import MainLayout from '@components/Layout/Layout'
import React from 'react';
import style from './style.module.scss';
import { lists, listProducts } from './constants';

const ProductHDBank = () => {

    const {container, title, listProduct, itemProduct, subtitle, listNav, icon} = style


  return (
   <MainLayout>
        <div className={container}>
            <h1 className={title}>Các sản phẩm tại HDBank</h1>
            <ul className={listNav}>
                {lists.map((item, index) => (
                    <li key={index}>
                        <a href="">{item.name}</a>
                    </li>
                ))}
            </ul>
            <div className={listProduct}>
                {listProducts.map((item, index) => (
                    <div className={itemProduct} key={index}>
                       <a href="">
                           <div className={icon}><img style={{width: "100%"}} src={item.img} alt="" /></div>
                            <p className={subtitle}>{item.title}</p>
                       </a>
                    </div>
                ))}
            </div>
        </div>
   </MainLayout>
  )
}

export default ProductHDBank