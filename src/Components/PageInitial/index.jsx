import React from 'react';

import Home from '../Home/index';
import MainCardFood from '../MainCardFood';
import MainServices from '../MainServices';
import MainCardBlog from '../MainCardBlog';
import MainSectionEnd from '../MainSectionEnd';

const PageInitial = () => {
    return (
        <>
            <Home />
            <MainCardFood />
            <MainServices />
            <MainCardBlog />
            <MainSectionEnd />        
        </>
    );
}

export default PageInitial;