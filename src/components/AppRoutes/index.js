import React from 'react';
import {TweenMax, Power2, TweenLite} from "gsap/TweenMax";
import { TransitionGroup, Transition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";

import Home from '../Routes/Home';
import More from '../Routes/More';

const completeCall = target => {
    TweenLite.set(target, { clearProps: "position, opacity" });
};

class AppRoutes extends React.Component {
    constructor(props) {
        super(props);

        this.handleGlobalClass = this.props.handleGlobalClass.bind(this);
    }

    componentDidMount() {
        const {history} = this.props;

        this.unlisten = history.listen((location) => {
            this.handleGlobalClass(); 
        });
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.location !== prevProps.location) {
    //         console.log(this.props)
    //       this.onRouteChanged();
    //     }
    //   }
    
    //   onRouteChanged() {
    //         this.handleGlobalClass(this.props.location.state.isInverted);  
    //   }


    // componentWillUnmount() {
    //     this.unlisten();
    // }

    render() {
        const {location} = this.props;

        return (
            <section className="content">
                <TransitionGroup>
                    <Transition
                        key={ location.pathname }
                        timeout={0}
                        mountOnEnter={true}
                        unmountOnExit={true}
                        onEnter={ node => {
                            // first kill all tweens of the target
                            TweenMax.killTweensOf(node);
                            // const parent = node.parentNode;
                            // const targetWidth = parent.clientWidth - parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
                            // set the position and properties of the entering element
                            TweenLite.set(node, {
                                x: 120,
                                autoAlpha: 0,
                                // width: targetWidth,
                                ease: Power2.easeIn
                            });
                            // animate in the element
                            TweenLite.to(node, 1, {
                                autoAlpha: 1,
                                x: 0,
                                onComplete: completeCall,
                                onCompleteParams: [node]
                            });
                        }} // on enter end
    
                        onExit={ node => {
                            // first kill all tweens of the target
                            TweenMax.killTweensOf(node);
                            // const parent = node.parentNode;
                            // const targetWidth = parent.clientWidth - parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
                            // set the position of the element
                            // TweenLite.set(node, {
                            //     width: targetWidth
                            // });
                            // animate out the element
                            TweenLite.to(node, 0, {
                                opacity: 0,
                                x: -120,
                            });
                        }} // on exit end
                    >
                        <Switch location={ location }>
                            <Route exact path="/" component={ Home } />
                            <Route path="/more" component={More} />
                        </Switch>
                    </Transition>
                </TransitionGroup>
            </section>
        );
    }
    
}
    
export default AppRoutes;
    