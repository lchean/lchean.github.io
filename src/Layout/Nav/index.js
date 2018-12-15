import React from 'react';
import './Nav.scss';

import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/more" activeClassName="selected">More</NavLink>
            <h1 className="name"><NavLink exact to="/" activeClassName="selected">Laurent Chean</NavLink></h1>
        </nav>
    );
}

