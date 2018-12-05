import React from 'react';
import { NavLink } from "react-router-dom";
import './header.scss';

export default function Header () {

    return (
        <header className="header">
            <h1 className="name"><NavLink exact to={{ pathname: '/', state: { isInverted: false }}} activeClassName="selected">Laurent Chean</NavLink></h1>
        </header>
    );
}

