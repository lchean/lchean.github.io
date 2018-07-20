import React from 'react';
import './list.css';

function List (props){
    return (
        <ul className="footer-links">
            {props.children}
        </ul>
    );
}    

export default List;

