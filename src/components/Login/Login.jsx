import Button from '@components/Button/Button';
import React, { useState, useContext } from 'react';
import style from './style.module.scss';
import InputCommon from '@components/InPutCommon/InputCommon';
import { useFormik } from 'formik';
import { PopupContext } from '@/contexts/PopupProvider';
import { storeContext } from '@contexts/StoreProvider';
import { login, getInfo } from '@apis/authService';
import * as Yup from "yup";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


const Login = () => {
    const {container, containerForm, customInput, title} = style;

    const { type, setIsPopupOpen } = useContext(PopupContext);
    const {isLogin, setIsLogin, setUserid, userinfo, setUserinfo } = useContext(storeContext);



    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',

        },
        validationSchema: Yup.object({
            username: Yup.string().required("Email is Required"),
            password: Yup.string()
              .min(6, "Password must be at 6 characters")
              .required("Password is Required"),
          }),
        onSubmit: async (values) => {
            const {username, password} = values;
            await login({username, password})
            .then(({ password }) => {
                Cookies.set('userinfo', username);
                setUserinfo(username);
                setIsLogin(!isLogin);
                setIsPopupOpen(false);
                toast.success('Đăng nhập thành công');
            })
            .catch(err => {
                toast.error('Đăng nhập thất bại');
            });
        },
    });
  return (
    <div className={container}>
       <div style={{textAlign: 'center', marginBottom: '30px'}}>
       <div className={title}>Đăng Nhập</div>
        <div style={{margin: '20px 0'}}>
            <form  onSubmit={formik.handleSubmit} className={containerForm} action="">
                <InputCommon
                    id="username"
                    label="Tên đăng nhập"
                    placeholder="Tên đăng nhập"
                    type="text"
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id="password"
                    label="Mật khẩu"
                    placeholder="Mật khẩu"
                    type="password"
                    isRequired
                    formik={formik}
                />
                <Button btnSubmit type="submit" content="Đăng nhập"/>
            </form>
            </div>
       </div>
    </div>
  )
}

export default Login;