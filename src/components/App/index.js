import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Routes from '../Routes';

import Gallery, {IMAGES} from '../../layout/Gallery';
import Nav from '../../layout/Nav';

import 'normalize.css';
import '../../styles/global.scss';

export default class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isInverted: false
        }

        this.handleGlobalClass = this.handleGlobalClass.bind(this);
    }

    handleGlobalClass() {        
        this.setState( prevState => ({
            isInverted: !prevState.isInverted
        }));
    }

    render() {
        const { isInverted } = this.state;

        return (
            <div className={isInverted ? 'wrapper is-inverted' : 'wrapper'}>                
                <div className="main">
                    <Route path="/" render={(props) => (<Routes handleGlobalClass={ this.handleGlobalClass } {...props} />) } />
                    <Nav />                
                </div>
                <Gallery entries={IMAGES} />                
            </div>           
        );
    }
}