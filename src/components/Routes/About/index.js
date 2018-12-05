import React from 'react';

export default class About extends React.Component {


    componentDidMount(){
        this.setState({
            isInverted: true
        })
    }

    render() {
        return (
           <section className="about">
           about
           </section>
        );
    }
}
