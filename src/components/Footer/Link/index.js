import React from 'react';
import PropTypes from 'prop-types';
import './link.css';

const Link = ({ text, href }) => (
    <li className="footer-link"><a href={href}>{text}</a></li>
);

Link.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default Link;

