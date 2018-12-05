import React from 'react';
import './main.scss';

export default function Main(props) {
  const { children } = props;

    return (
      <div className="main">
        { children } 
      </div>
    );
};