import React from 'react';
import Score from './score';
const ImageDetail = ({image,text}) => {
    const trimming = (string) => {
        return string.substring(0,15);
    }
    return (
<div>
            <div className="card thumb">
                <img className="card-img-top" width="318px" height="180px" src={image.link} alt="Card image cap" />
                <div className="card-block">
                <h4 className="card-title">{trimming(image.title)}</h4>
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" >Section : {trimming(image.section)}</li>
                    <li className="list-group-item" >views : {image.views}</li>
                    <li className="list-group-item"><Score image={image} /></li>
                </ul>
            <div className="card-block">
                <a href={image.link} className="btn btn-primary">explore</a>
            </div>
            </div>
        </div>
    );
}
export default ImageDetail;