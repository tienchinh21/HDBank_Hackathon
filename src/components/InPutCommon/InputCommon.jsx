import React, { useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";

const InputCommon = ({ label, type, isRequired = false, placeholder, ...props}) => {
    const { container, labelInput, customInput, boxIcon, errMsg } = styles;

    const [isShowPassword, setIsShowPassword] = useState(false);
    const isPassword = type === "password";
    const { formik, id } = props;

    const isShowTextPassword =
    type === "password" && isShowPassword ? "text" : type;

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };


  const isError = formik.errors[id] && formik.touched[id];
  const errorMsg = formik.errors[id];

    return (
        <div className={container}>
            <div style={{ position: "relative" }}>
            <input
            placeholder={placeholder}
            className={customInput}
            type={isShowTextPassword}
            {...props}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values[id]}
            />
            {isPassword && (
                <div className={boxIcon} onClick={handleShowPassword}>
                {isShowPassword ? <FiEye /> : <GoEyeClosed />}
                </div>
            )}
            {isError && <div className={errMsg}>{errorMsg}</div>}
            </div>
    </div>
    )
}
export default InputCommon;
