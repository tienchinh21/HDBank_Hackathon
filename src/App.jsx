
import Header from '@components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@routers/routers';
import { Suspense } from "react";
import { PopupProvider } from '@contexts/PopupProvider';
import { ToastProvider } from '@contexts/ToastProvider';
import { StoreProvider } from '@contexts/StoreProvider';
import { SideBarProvider } from '@contexts/SideBarProvider';

import Popup from '@components/Popup/Popup';
import './App.css';
import SideBar from '@components/SideBar/SideBar';
function App() {
  return (
    <>
      <StoreProvider>
        <ToastProvider>
                <SideBarProvider>
                    <PopupProvider>
                        <BrowserRouter>
                        <Popup/>
                        <SideBar/>
                        <Suspense fallback={<div>.....Loading</div>}>
                            <Routes>
                                {routers.map((item, index) => (
                                <Route
                                    path={item.path}
                                    element={<item.components />}
                                    key={index}
                                />
                                ))}
                            </Routes>
                        </Suspense>
                        </BrowserRouter>
                    </PopupProvider>
                </SideBarProvider>
        </ToastProvider>
      </StoreProvider>
    </>
  )
}

export default App
