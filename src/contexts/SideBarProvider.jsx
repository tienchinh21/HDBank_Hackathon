import { createContext, useEffect, useState } from "react";


export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <SideBarContext.Provider
      value={{ isOpenSidebar, setIsOpenSidebar}}
    >
      {children}
    </SideBarContext.Provider>
  );
};