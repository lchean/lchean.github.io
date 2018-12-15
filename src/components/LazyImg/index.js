import React from 'react';
import 'lazysizes';
import './LazySizes.scss';

const LazyImg = ({src = "", alt = "", title = "", width = "", height = "" })  =>  (
  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src={src} className="lazyload" alt={alt} title={title} width={width} height={height} />
);

export default LazyImg;