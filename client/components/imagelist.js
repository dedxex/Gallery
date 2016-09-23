import React from 'react';
import ImageDetail from './imagedetail';
const ImageList = ({images,text}) => {
    const filetering = images.filter((image) => {
        return !image.is_album;
    });
    const renderImages = filetering.map((image) => {

        return (
            <ImageDetail image={image} text={text} />
        );
    });
    return (
        <div className="image-list">
            {renderImages}
        </div>
    );
}
export default ImageList;