import React, { Component } from 'react';
import { Route } from "react-router-dom";
import AppRoutes from '../AppRoutes';

import Main from '../Main';
import Header from '../Layout/Header';
import Gallery from '../Layout/Gallery';
import Footer from '../Layout/Footer';

import 'normalize.css';
import './app.scss';

const MAX=5;

export default class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isInverted: false,
            index: this.getRandomInt(MAX)
        }

        this.handleGlobalClass = this.handleGlobalClass.bind(this);
        // this.handleScroll = this.handleScroll.bind(this);
        // this.handleResize = this.handleResize.bind(this);
    }
    
    // componentDidMount() {
    //     document.addEventListener('scroll', this.handleScroll);
    //     window.addEventListener('resize', this.handleResize);
    // }

    // handleScroll() {
       
    // }

    // handleResize() {

    // }

    handleGlobalClass( isInverted ) {        
        this.setState( prevState => ({
            isInverted: !prevState.isInverted
        }));
    }

    getRandomInt(max = 1) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }

    render() {
        const { index, isInverted } = this.state;

        return (
            <div className={isInverted ? 'wrapper is-inverted' : 'wrapper'}>
                <Main>
                    <Header />
                    <Route path="/" render={(props) => (<AppRoutes handleGlobalClass={ this.handleGlobalClass } {...props} />) } />
                    <Footer />
                </Main>
                <Gallery imgIndex={ index } />
            </div>           
        );
    }
}
    