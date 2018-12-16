import React, { Component, lazy, Suspense } from 'react';
import { Route } from "react-router-dom";

//Styles
import 'normalize.css';
import '../../styles/global.scss';

//Assets
import { IMAGES } from '../../layout/Gallery';

//Components
import Loader from '../Loader';
import Nav from '../../layout/Nav';
import Gallery from '../../layout/Gallery';
const Routes = lazy( () => import('../Routes') );

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
                    <Route path="/" render={ props => (
                        <Suspense fallback={<Loader />}>
                            <Routes handleGlobalClass={this.handleGlobalClass} {...props} />                         
                        </Suspense>
                        )
                    } />
                    <Nav />     
                </div>
                <Gallery entries={IMAGES} />
            </div>           
        );
    }
}