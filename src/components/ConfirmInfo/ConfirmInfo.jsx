import React, { useRef, useState } from 'react';
import InputCommon from '@components/InPutCommon/InputCommon';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './style.module.scss';
import MainLayout from '@components/Layout/Layout';
import Webcam from 'react-webcam';
import Button from '@components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { verify } from '@apis/authService';

const ConfirmInfo = () => {
    const webcamRef = useRef(null);
    const [capturing, setCapturing] = useState(false);
    const { container, formGroup, webcamContainer,  errorMessage } = styles;

    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate("/")
    }

    const validationSchema = Yup.object({
        idCard: Yup.string().required("Vui lòng nhập số CCCD"),
        fullName: Yup.string().required("Vui lòng nhập họ và tên"),
        dob: Yup.date().required("Vui lòng nhập ngày sinh"),
        gender: Yup.string().required("Vui lòng chọn giới tính"),
        nationality: Yup.string().required("Vui lòng nhập quốc tịch"),
        address: Yup.string().required("Vui lòng nhập địa chỉ"),
        city: Yup.string().required("Vui lòng nhập"),
        dateTime: Yup.string().required("Vui lòng nhập"),
        frontImage: Yup.string().required("Vui lòng tải ảnh mặt trước CCCD"),
        backImage: Yup.string().required("Vui lòng xác thực khuôn mặt"),
    });

    const formik = useFormik({
        initialValues: {
        idCard: "",
        fullName: "",
        dob: "",
        gender: "",
        nationality: "",
        address: "",
        city: "",
        dateTime: "",
        frontImage: "",
        backImage: "",
        },
        validationSchema,
        onSubmit: async (values) => {

        try {
            const payload = {
            cccdImage: values.frontImage,
            selfieImage: values.backImage,
            userInput: {
                "Số CCCD": values.idCard,
                "Họ và tên": values.fullName,
                "Ngày sinh": values.dob,
                "Giới tính": values.gender,
                "Quốc tịch": values.nationality,
                "Quê quán" : values.city,
                "Nơi thường trú": values.address,
                "Có giá trị đến" : values.dateTime
            },
            username: "user1",
            };
            console.log(payload.userInput);
            console.log(payload);

            const response = await verify(payload);

            console.log("Response from server:", response.data);
            alert("Gửi dữ liệu thành công!");
            handleNavigate();
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Đã xảy ra lỗi khi gửi dữ liệu!");
        }
        },
    });


  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        formik.setFieldValue(field, base64Image);
      };
      reader.readAsDataURL(file);
    }
  };


  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    formik.setFieldValue("backImage", imageSrc);
    setCapturing(false);
  };

  return (
    <MainLayout>
    <div className={container}>
      <h1>Xác minh thông tin</h1>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="idCard"
          placeholder="Nhập số CCCD"
          type="text"
          formik={formik}
          isRequired
        />
        <InputCommon
          id="fullName"
          placeholder="Nhập họ và tên"
          type="text"
          formik={formik}
          isRequired
        />
        <InputCommon
          id="dob"
          placeholder="Nhập ngày sinh (YYYY-MM-DD)"
          type="date"
          formik={formik}
          isRequired
        />
        <InputCommon
          id="gender"
          placeholder="Nhập giới tính (Nam/Nữ)"
          type="text"
          formik={formik}
          isRequired
        />
        <InputCommon
          id="nationality"
          placeholder="Nhập quốc tịch"
          type="text"
          formik={formik}
          isRequired
        />
        <InputCommon
          id="address"
          placeholder="Nhập địa chỉ nơi thường trú"
          type="text"
          formik={formik}
          isRequired
        />
         <InputCommon
          id="city"
          placeholder="Quê quán"
          type="text"
          formik={formik}
          isRequired
        />
         <InputCommon
          id="dateTime"
          placeholder="Thời gian hết han cccd"
          type="text"
          formik={formik}
          isRequired
        />
        <div className={formGroup}>
        <label htmlFor="frontImage">Ảnh mặt trước CCCD:</label>
        <input
            id="frontImage"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, "frontImage")}
        />
        {formik.errors.frontImage && formik.touched.frontImage && (
            <div className={errorMessage}>{formik.errors.frontImage}</div>
        )}
        </div>

        {/* <div className={formGroup}>
            <label htmlFor="backImage">Chụp ảnh xác minh</label>
            {!capturing ? (
                <button type="button" onClick={() => setCapturing(true)}>
                Mở máy ảnh
                </button>
            ) : (
                <div className={webcamContainer}>
                <Webcam
                    id="backImage"
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={300}
                    screenshotQuality={0.6}
                />
                <button type="button" onClick={captureImage}>
                    Chụp ảnh
                </button>
                </div>
            )}
            {formik.errors.backImage && formik.touched.backImage && (
                <div  className={errorMessage}>{formik.errors.backImage}</div>
            )}
        </div> */}

        <div className={formGroup}>
        <label htmlFor="backImage">Tải ảnh selfie:</label>
        <input
            id="backImage"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, "backImage")}
        />
        {formik.errors.backImage && formik.touched.backImage && (
            <div className={errorMessage}>{formik.errors.backImage}</div>
        )}
        </div>

        <Button content={"Xác nhân"} type="submit"/>
      </form>
    </div>
  </MainLayout>
  );
};

export default ConfirmInfo;
