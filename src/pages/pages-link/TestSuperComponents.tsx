import React from 'react';
import SuperButton from "../../components/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../components/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../components/c1-SuperInputText/SuperInputText";

export const TestSuperComponents = () => {
    return (
        <div>
            <SuperButton>add</SuperButton>
            <SuperCheckbox/>
            <SuperInputText placeholder='name'/>
        </div>
    );
};
