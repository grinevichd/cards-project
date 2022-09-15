import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

export const Header =() => {

    return (
        <div className={s.wrapper}>
            <NavLink to="/test" className={s.component} style={(pa) => {
                return {color: pa.isActive ? "red" : "black"}
            }}>
                test
            </NavLink>
            <NavLink className={s.component} to="/login" style={(pa) => {
                return {color: pa.isActive ? "red" : "black"}
            }}>
                login
            </NavLink>
            <NavLink className={s.component} to="/new-password" style={(pa) => {
                return {color: pa.isActive ? "red" : "black"}
            }}>
                new-password
            </NavLink>
            <NavLink className={s.component} to="/password-recovery" style={(pa) => {
                return {color: pa.isActive ? "red" : "black"}
            }}>
                password-recovery
            </NavLink>
            <NavLink className={s.component} to="/profile" style={(pa) => {
                return {color: pa.isActive ? "red" : "black"}
            }}>
                profile
            </NavLink>
            <NavLink className={s.component} to="/registration" style={(pa) => {
                return {color: pa.isActive ? "red" : "black"}
            }}>
                registration
            </NavLink>
            <span className={s.square}/>
        </div>
    )
}


