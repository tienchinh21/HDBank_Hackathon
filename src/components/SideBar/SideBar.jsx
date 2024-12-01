import React, { useState, useContext } from 'react';
import { CiSearch } from "react-icons/ci";
import { SideBarContext } from '@contexts/SideBarProvider';
import { Button, Drawer, Radio, Space } from 'antd';
import { sections, iconContact, listSocialHDBank } from '@components/SideBar/constants';
import ButtonTransform from '@components/ButtonTransform/ButtonTransform';
import AccordionItem from '@components/AccordionItem/AccordionItem';
import style from './style.module.scss';

const SideBar = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(SideBarContext);
    const { sidebarWrapper, container, searchBox, flex, iconSearch, test, scrollBox, overlay, relative, downloadApp, socialList, copyRight, text } = style;

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (sectionId) => {
        setOpenSection(prev => (prev === sectionId ? null : sectionId));
    };

    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
        setIsOpenSidebar(true);
    };
    const onClose = () => {
        setIsOpenSidebar(!isOpenSidebar);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };


  return (
    <>
      {isOpenSidebar &&
        (
            <Drawer
            placement={placement}
            closable={false}
            onClose={onClose}
            open={isOpenSidebar}
            key={placement}
        >
            <aside className={sidebarWrapper}>
                <div className={container}>
                    <div>
                        <a href="#">
                            <img src="https://cdn.hdbank.com.vn/hdbank-file/picture/logo_1645778839158.png" alt="" />
                        </a>
                    </div>
                    <div className={searchBox}>
                        <form action="">
                            <div className={flex}>
                            <input type="text" placeholder="Tìm kiếm" name="" id="" />
                            <CiSearch className={iconSearch} />
                            </div>
                        </form>
                    </div>
                    <div className={scrollBox}>
                        <ButtonTransform content={"Đăng ký"} />
                        <ul>
                            {sections.map((section) => (
                            <AccordionItem
                                key={section.id}
                                id={section.id}
                                title={section.title}
                                products={section.products}
                                isOpen={openSection === section.id}
                                toggle={toggleSection}
                            />
                            ))}
                        </ul>
                        <div>
                            {iconContact.map((item , index) => (
                                <a key={index} className={test}>
                                <div style={{width: 20, height: 20, marginRight: 10}}>
                                    <item.icon/>
                                </div>
                                    {item.content}
                                </a>
                            ))}
                        </div>
                        <div className={downloadApp}>
                            <p className={text}>Tải app HDBank</p>
                            <div style={{display: "flex"}}>
                                <a href="">
                                    <img src="https://hdbank.com.vn/asset/images/chplay.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="https://hdbank.com.vn/asset/images/appstore.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className={socialList}>
                            <p className={text}>Kết nối với HDBank</p>
                            <ul style={{display: "flex"}}>
                                {listSocialHDBank.map((item , index) => (
                                    <li key={index}>
                                        <a style={{marginRight: 10}} href="">
                                            <img src={item.img} alt={item.alt} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <span className={copyRight}>Bản quyền © 2023 thuộc về HDBank</span>
                        </div>
                    </div>
                </div>
            </aside>
        </Drawer>
      )}
    </>
  );
};

export default SideBar;
