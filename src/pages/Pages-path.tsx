import React from 'react';
import {Header} from "./header/Header";
import {Pages} from "./Pages";
import {HashRouter} from "react-router-dom";

export const PagesPath = () => {
    return (
        <div>
            <HashRouter>
            <Header/>
            <Pages/>
            </HashRouter>
        </div>
    );
};

