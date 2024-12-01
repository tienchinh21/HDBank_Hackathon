import React, { createContext, useState } from 'react';

export const PopupContext = createContext();

export const PopupProvider = ({children}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [type, setType] = useState("");
    const value = {isPopupOpen, setIsPopupOpen, type, setType};

  return (
   <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  )
}
