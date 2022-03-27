import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.page';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};

export default AppRouter;
