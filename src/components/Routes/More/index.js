import React from 'react';
import YouTube from 'react-youtube';
import './more.scss';

const opts = {
    height: '720',
    width: '1280',
    playerVars: {
        autoplay: 1
    }
};

export default class More extends React.Component {
    render() {          
        return (
            <article className="more">
                <h2>More</h2>     

                <section class="more-section">               
                    <ul>
                        <li>Advanced knowledge in HTML, CSS, and JS</li>
                        <li>Good understanding of Wordpress, Magento 1, Salesforce Commerce Cloud (Demandware)</li>
                        <li>This website uses the <a href="https://fonts.google.com/specimen/EB+Garamond">EB Garamond Google font</a> and was built with <a href="https://github.com/facebook/create-react-app">Create React App</a></li>
                    </ul>
                </section>

                <section class="more-section youtube-video">
                    <p>Life is too serious so let's listen to some good french (summer) music :</p>
                    <figure className="youtube">
                        <YouTube
                            videoId="p4JO2w5uGfE"
                            opts={opts}
                            onReady={this._onReady}
                        />
                    </figure>
                </section>
            </article>
        );
    }
}


