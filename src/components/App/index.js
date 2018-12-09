import React, { Component } from 'react';
import { Route } from "react-router-dom";
import AppRoutes from '../AppRoutes';

import Main from '../Main';
import Gallery, {IMAGES} from '../Layout/Gallery';
import Nav from '../Layout/Nav';

import 'normalize.css';
import './app.scss';

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
                <Main>
                    <Route path="/" render={(props) => (<AppRoutes handleGlobalClass={ this.handleGlobalClass } {...props} />) } />
                    <Nav />                
                </Main>
                <Gallery entries={IMAGES} />                
            </div>           
        );
    }
}
    