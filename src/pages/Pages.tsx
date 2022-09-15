import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import App from "../App";
import Error404 from "./pages-link/Error404";
import {Login} from "./pages-link/Login";
import {NewPassword} from "./pages-link/NewPassword";
import {PasswordRecovery} from "./pages-link/PasswordRecovery";
import {Profile} from "./pages-link/Profile";
import {Registration} from "./pages-link/Registration";
import {TestSuperComponents} from "./pages-link/TestSuperComponents";

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to='test'/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/new-password'} element={<NewPassword/>}/>
                <Route path={'/password-recovery'} element={<PasswordRecovery/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'test'} element={<TestSuperComponents/>}/>
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    );
};
