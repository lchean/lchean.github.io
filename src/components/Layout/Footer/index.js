import React from 'react';
import './footer.scss';

import { NavLink } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="header-left">
                    <NavLink to={{ pathname: '/about', state: { isInverted: true }} } activeClassName="selected">About</NavLink>
                </div>
                <div className="header-right">
                    <NavLink to={{ pathname: '/contact', state: { isInverted: false }} } activeClassName="selected">Contact</NavLink>
                </div>      
            </footer>
        );
    }
}

export default Footer;