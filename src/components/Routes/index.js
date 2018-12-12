import React from 'react';
import {TweenMax, Power2, TweenLite} from "gsap/TweenMax";
import { TransitionGroup, Transition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";

import Home from '../../pages/Home';
import More from '../../pages/More';

const completeCall = target => {
    TweenLite.set(target, { clearProps: "position, opacity" });
};

class Routes extends React.Component {
    constructor(props) {
        super(props);

        this.handleGlobalClass = this.props.handleGlobalClass.bind(this);
    }

    componentDidMount() {
        const {history} = this.props;

        this.unlisten = history.listen(() => {
            this.handleGlobalClass(); 
        });
    }

    render() {
        const {location} = this.props;

        return (
            <TransitionGroup>
                <Transition
                    key={ location.pathname }
                    timeout={0}
                    mountOnEnter={true}
                    unmountOnExit={true}
                    onEnter={ node => {
                        TweenMax.killTweensOf(node);
                        TweenLite.set(node, {
                            x: 120,
                            autoAlpha: 0,
                            ease: Power2.easeIn
                        });
                        TweenLite.to(node, 1, {
                            autoAlpha: 1,
                            x: 0,
                            onComplete: completeCall,
                            onCompleteParams: [node]
                        });
                    }} 

                    onExit={ node => {
                        TweenMax.killTweensOf(node);
                        TweenLite.to(node, 0, {
                            opacity: 0,
                            x: -120,
                        });
                    }}
                >
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/more" component={ More } />
                        <Route component={ Home } />
                    </Switch>
                </Transition>
            </TransitionGroup>
        );
    }
}
    
export default Routes;
    