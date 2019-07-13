import React from 'react';
import YouTube from 'react-youtube';
import './About.scss';

const opts = {
    height: '720',
    width: '1280',
    playerVars: {
        autoplay: 1,
    },
};

export default class About extends React.Component {
    render() {
        return (
            <article>
                <h2>More</h2>
                <section className='about-section'>
                    <ul>
                        <li>Advanced skills in HTML, CSS, and JS</li>
                        <li>
                            Good understanding of Wordpress, Magento 1,
                            Salesforce Commerce Cloud (Demandware)
                        </li>
                        <li>
                            This website uses the{' '}
                            <a href='https://fonts.google.com/specimen/EB+Garamond'>
                                EB Garamond Google font
                            </a>{' '}
                            and was built with{' '}
                            <a href='https://github.com/facebook/create-react-app'>
                                Create React App
                            </a>{' '}
                            and{' '}
                            <a href='https://pages.github.com/'>Github Pages</a>
                        </li>
                    </ul>
                </section>

                <section className='about-section youtube-video'>
                    <p>Let's listen to some good french music :</p>
                    <figure className='youtube'>
                        <YouTube
                            videoId='p4JO2w5uGfE'
                            opts={opts}
                            onReady={this._onReady}
                        />
                    </figure>
                </section>
            </article>
        );
    }
}
