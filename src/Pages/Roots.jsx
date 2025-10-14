import React from 'react';
import Navbar from '../Componets/Navbar';
import { Outlet } from 'react-router';

const Roots = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
    );
};

export default Roots;