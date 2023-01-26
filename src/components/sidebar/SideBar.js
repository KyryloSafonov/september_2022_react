import React from 'react';
import './SideBar.styles.css';
import { NavLink } from "react-router-dom";

export const SideBar = () => {
    return (
        <div className={'side-bar'}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};
