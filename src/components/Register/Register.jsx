import Button from '@components/Button/Button';
import React, { useState, useContext } from 'react';
import style from './style.module.scss';
import InputCommon from '@components/InPutCommon/InputCommon';
import { useFormik } from 'formik';
import { PopupContext } from '@/contexts/PopupProvider';
import { register } from '@apis/authService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

const Register = () => {
    const {container, containerForm, customInput, title} = style;
    const { type, setIsPopupOpen } = useContext(PopupContext);
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
            ConfirmPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid Email").required("Vui lòng nhập Email"),
            username: Yup.string().required("Vui lòng nhập tên đăng nhập"),
            password: Yup.string()
              .min(6, "Mật khẩu cần ít nhất 6 ký tự")
              .required("Vui long nhâp mật khẩu"),
            ConfirmPassword: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "Không trùng với mật khẩu"
            ),
          }),
        onSubmit:async (values) => {
            const {username, password, email} = values;
            setIsSubmit(false);
            await register({username, password, email})
            .then(res => {
                toast.success(res.data.message);
                setIsSubmit(true);
            })
            .catch(err => console.log(err))
        },
    });

    const handleGoToConfirm = () => {
        navigate("/confirmInfo");
        setIsPopupOpen(false);
    }
  return (
    <div className={container}>
       <div style={{textAlign: 'center', marginBottom: '30px'}}>
       <div className={title}>Đăng Ký</div>
        <div style={{margin: '20px 0'}}>
            <form  onSubmit={formik.handleSubmit} className={containerForm} action="">
                <InputCommon
                    id="username"
                    label="Tên đăng nhập"
                    placeholder= "Tên đăng nhập"
                    type="text"
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id="email"
                    label="Email"
                    placeholder = "Email"
                    type="text"
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id="password"
                    label="Mật khẩu"
                    placeholder="Mật Khẩu"
                    type="password"
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id="ConfirmPassword"
                    label="Xác nhận mật khẩu"
                    placeholder = "Xác nhận mật khẩu"
                    type="password"
                    isRequired
                    formik={formik}
                />
                <Button btnSubmit type="submit" content="Đăng ký"/>
                {isSubmit && <div style={{marginTop: '30px'}}>
                    <Button onClick={handleGoToConfirm} btnSubmit type="submit" content="Xác thực CCCD"/>
                    </div>}
            </form>
            </div>
       </div>
    </div>
  )
}

export default Register