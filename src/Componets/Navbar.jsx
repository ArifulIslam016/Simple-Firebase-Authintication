import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <NavLink to={'/'}>
                <li>Home </li>
            </NavLink>
            <NavLink to={'/login'}>
                <li>Login </li>
            </NavLink>
        </div>
    );
};

export default Navbar;