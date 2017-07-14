import React from 'react';

const Gallery = (props) => {
    const imageItems = props.images.map((image, index) => {
        return (
            <li>
                <img onClick={() => props.onImageSelect(image.pano)}
                    src={image.pano}
                    alt={image.name}
                    key={index}/>
            </li>
        );
    });

    return (
        <ul className="image-gallery">
            {imageItems}
        </ul>
    );
};

export default Gallery;
