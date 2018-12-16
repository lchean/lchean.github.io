/* eslint-disable no-unused-vars */

import React from 'react';
import './Home.scss';
import ClipboardJS from 'clipboard';

const EMAIL = 'laurentchean@gmail.com';

export default class Home extends React.Component {    
    handleClipboard() {
        const clipboard = new ClipboardJS('.js-clipboard');

        clipboard.on('success', function(e) {
            const btn = e.trigger;
            btn.classList.add('is-copied');
            setTimeout( () =>  btn.classList.remove('is-copied'), 1500 );
            e.clearSelection();
        });
    }

    componentDidMount() {
        this.handleClipboard();
    }

    render () {
        return (
            <article>
                <h2>Hey,</h2>
                
                <p>I am a french front end developer working at <a href="https://www.emakina.nl/" className="italic">Emakina Amsterdam</a>.</p>
                
                <p>Since 2012, I've been working for digital agencies such as <a href="http://marcelww.com/" className="italic">Marcel</a> or <a href="https://www.mrm-mccann.fr/" className="italic">Mrm McCann</a> and for brands like <a href="https://www.thekooples.com/" className="italic">The Kooples</a> and more recently <a href="https://www.mobhotel.com/" className="italic">MOB Hotel</a>.</p>
    
                <p>As a user interface developer, I try to deliver a 'clean' code and be creative without forgetting accessibility.</p>

                <p>I am available for freelance. You can contact me with : a <a href={"mailto:" + EMAIL} className="italic">mail app</a>, by <button type="button" className="btn-clipboard js-clipboard italic" data-clipboard-text={ EMAIL }>copying my email address</button> or via my <a href="https://www.linkedin.com/in/laurent-chean-b045465b/" className="italic">Linkedin profile</a>.</p>
            </article>
        );
    }
}