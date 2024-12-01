import { createContext, useEffect, useState } from "react";
import { getInfo } from "@apis/authService";
import Cookies from "js-cookie";

export const storeContext = createContext();

export const StoreProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [userid, setUserid] = useState(null);
    const [userinfo, setUserinfo] = useState(Cookies.get("userinfo"));

    console.log(userinfo);

     useEffect(() => {
    if (userinfo) {
        getInfo({userinfo}).then((res) => setUserid(res.data)).catch((err) => console.log(err));
    }
  }, [userinfo, isLogin]);

  return (
    <storeContext.Provider
      value={{ isLogin, setIsLogin, userid, setUserid, userinfo, setUserinfo }}
    >
      {children}
    </storeContext.Provider>
  );
};