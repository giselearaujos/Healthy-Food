import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageInitial from './Components/PageInitial/index'
import Register from './Components/Register/index';

export default () => {
    return (
        <Routes>
             <Route path="/" element={<PageInitial />} />             
             <Route path="/register" element={<Register />} />           
        </Routes>
    );
}