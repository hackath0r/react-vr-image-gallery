import React from 'react';

const Gallery = (props) => {
    const imageItems = props.images.map((image) => {
        return (
            <img onClick={() => props.onImageSelect(image.pano)}
                src={image.pano}
                alt={image.name}
                height="48px"
                width="48px"/>
        );
    });

    return (
        <ul>
            {imageItems}
        </ul>
    );
};

export default Gallery;
