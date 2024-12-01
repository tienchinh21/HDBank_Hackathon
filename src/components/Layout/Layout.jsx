import React from "react";
import style from "./style.module.scss";

const MainLayout = ({ children }) => {
  const { wrapLayout, container } = style;
  return (
    <main className={wrapLayout}>
      <div className={container}>{children}</div>
    </main>
  );
};

export default MainLayout;
