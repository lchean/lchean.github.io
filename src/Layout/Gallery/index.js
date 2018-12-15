import React from 'react';
import LazyImg from '../../components/LazyImg';
import './Gallery.scss';

export default function Gallery({ entries }) {
    return (
        <aside className="gallery no-mobile">   
            {
                entries.map( ({id, src, width, height, title, alt}) => (
                    <figure key={id} className="gallery-figure">
                        <LazyImg src={src} width={width} height={height} title={title} alt={alt} />   
                    </figure>
                ))
            }
        </aside>
    );
}

export const IMAGES = [
    { id: 1, src: 'assets/hedi-slimane-01.jpg', alt: 'Hedi Slimane Diary Photo', title: '', width: '900', height: '601' },
    { id: 2, src: 'assets/hedi-slimane-02.jpg', alt: 'Hedi Slimane Diary Photo', title: '', width: '900', height: '1349' },
    { id: 3, src: 'assets/hedi-slimane-03.jpg', alt: 'Hedi Slimane Diary Photo', title: '', width: '900', height: '1353' },
    { id: 4, src: 'assets/hedi-slimane-04.jpg', alt: 'Hedi Slimane Diary Photo', title: '', width: '900', height: '1349' },
];