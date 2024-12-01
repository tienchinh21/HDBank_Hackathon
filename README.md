# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- // import React, { useState } from "react";
// import styles from "./style.module.scss";
// import classNames from "classnames";
// import "@fortawesome/fontawesome-free/css/all.min.css";


// const AuthContainer = () => {
//     const {container, btnInput, ghost, formContainer, signInContainer,signUpContainer, socialContainer, rightPanelActive, linkLoginIcon, inputCommon, subtitle, title, text, overlayPanel, overlayLeft, overlayRight} = styles;
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);

//   const handleSignUpClick = () => {
//     setIsRightPanelActive(true);
//   };

//   const handleSignInClick = () => {
//     setIsRightPanelActive(false);
//   };

//   return (
//     <div
//       className={classNames(container, {
//         [rightPanelActive] : isRightPanelActive
//       })}
//       id="container"
//     >
//       <div className={classNames(formContainer, signUpContainer)}>
//         <form action="#">
//           <h1 className={title}>Create Account</h1>
//           <div className={socialContainer}>
//             <a href="#" className={inputCommon}><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className={inputCommon}><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className={inputCommon}><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span className={subtitle}>or use your email for registration</span>
//           <input className={linkLoginIcon} type="text" placeholder="Name" />
//           <input className={linkLoginIcon} type="email" placeholder="Email" />
//           <input className={linkLoginIcon} type="password" placeholder="Password" />
//           <button className={btnInput}>Sign Up</button>
//         </form>
//       </div>

//       <div className={classNames(formContainer, signInContainer)}>
//         <form action="#">
//           <h1 className={title}>Sign in</h1>
//           <div className={socialContainer}>
//             <a href="#" className={inputCommon}><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className={inputCommon}><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className={inputCommon}><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span className={text}>or use your account</span>
//           <input className={linkLoginIcon} type="email" placeholder="Email" />
//           <input className={linkLoginIcon} type="password" placeholder="Password" />
//           <a href="#" className={linkLoginIcon}>Forgot your password?</a>
//           <button className={btnInput}>Sign In</button>
//         </form>
//       </div>

//       <div className={styles["overlay-container"]}>
//         <div className={styles.overlay}>
//           <div className={classNames(overlayPanel, overlayLeft)}>
//             <h1 className={title}>Welcome Back!</h1>
//             <p className={subtitle}>To keep connected with us please login with your personal info</p>
//             <button className={classNames(btnInput, ghost)} onClick={handleSignInClick}>
//               Sign In
//             </button>
//           </div>
//           <div className={classNames(overlayPanel, overlayRight)}>
//             <h1 className={title}>Hello, Friend!</h1>
//             <p className={subtitle}>Enter your personal details and start journey with us</p>
//             <button className={classNames(btnInput, ghost)} onClick={handleSignUpClick}>
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthContainer; -->
