import React from 'react';
import LazyImg from '../../LazyImg';
import './gallery.scss';

export default function Gallery({imgIndex}) {
    const mySrc = `assets/hedi-slimane-0${imgIndex}.jpg`;

    return (
        <aside className="gallery">
            <figure className="gallery-figure">
                <LazyImg src={mySrc}  width="720" title="From Hedi Slimane Diary" alt="Black and white photo" />       
            </figure>
        </aside>
    );
}
