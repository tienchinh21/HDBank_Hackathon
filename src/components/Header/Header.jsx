import Button from '@components/Button/Button';
import MainLayout from '@components/Layout/Layout';
import styles from './style.module.scss'
import React, { useContext } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { PopupContext  } from '@contexts/PopupProvider';
import { storeContext } from '@contexts/StoreProvider';
import { SideBarContext } from '@contexts/SideBarProvider';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Popover } from 'antd';

const Header = () => {
    const {containerHeader, listNavigation, linkNavigation, link, btnBurger, searchIcon, userName} = styles;
    const {setIsPopupOpen, setType, isPopupOpen} = useContext(PopupContext);
    const {isLogin, userinfo, userid} = useContext(storeContext);
    const {setIsOpenSidebar, isOpenSidebar} = useContext(SideBarContext);

    console.log(userid);


    const handleOpenSidebar = () => {

        setIsOpenSidebar(!isOpenSidebar)
    };

    console.log(isOpenSidebar);


    const listNav = [
        {id: 1, name: "Cá Nhân"},
        {id: 2, name: "Doanh Nghiệp"},
        {id: 3, name: "Khách hàng đặc biệt"},
        {id: 4, name: "Nhà Đầu Tư"},
    ]

    const handleOpenPopup = ({type}) => {
        setIsPopupOpen(!isPopupOpen);
        setType(type);
    }

    const handleRenderUser = () => {
        if (userid) {
            return `Hello : ${userid?.full_name}`;
        }
       return ;
    }

    const popoverContent = (
        <div style={{
            width: '200px',
            height: '100px',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#ffd643',
            border: '1px solid #ffd643',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: '#333',
        }}>
            <p style={{
                marginBottom: '10px',
                fontSize: '16px',
                color: 'rgba(240, 0, 32, 0.72)',
                fontWeight: 'bold'
            }}>
                <strong>Số dư:</strong> {userid?.balance} VNĐ
            </p>
            <p style={{
                marginBottom: '10px',
                fontSize: '16px',
                color: '#d32f2f',
                fontWeight: 'bold'
            }}>
                <strong>Số tài khoản:</strong> {userid?.stk}
            </p>
            <p style={{
                fontSize: '14px',
                color: '#666',
                fontStyle: 'italic'
            }}>
                Cập nhật gần đây: {new Date().toLocaleString()}
            </p>
        </div>
    );

  return (
    <>
        <MainLayout>
        <div className={containerHeader}>
            <div onClick={handleOpenSidebar} className={btnBurger}><CiMenuBurger size={24}/></div>
            <div><img src="https://cdn.hdbank.com.vn/hdbank-file/picture/logo_1645778839158.png" alt="" /></div>
            <ul className={listNavigation}>
                {listNav.map((item) => (
                    <li className={link} key={item.id}>
                        <a className={linkNavigation} href="">{item.name}</a>
                    </li>
                ))}
            </ul>
            <div>
                <div className={searchIcon}><CiSearch /></div>
            </div>
            {!isLogin &&
                <Popover content={popoverContent} placement='bottom'>
                    <div className={userName}>
                        <div style={{marginRight: "10px"}}>
                        <Avatar size="small" icon={<UserOutlined />} />
                        </div>
                    {handleRenderUser()}
                </div>
                </Popover>
            }
          {isLogin &&
            <>
                <Button onClick={() => handleOpenPopup({ type: "login" })} content ={"Đăng Nhập"}/>
                <Button onClick={() => handleOpenPopup({ type: "register" })} isRegister = {true} content ={"Đăng Ký"}/>
            </>
          }
        </div>
        </MainLayout>
    </>
  )
}

export default Header