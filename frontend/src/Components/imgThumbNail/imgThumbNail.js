import React from 'react';
import {apiURL} from "../../apiURL";
import ImageNot from './message.png';
import './imgThimbNail.css';

const ImgThumbnail = props => {
    let image = ImageNot;
    if (props.image) {
        image= apiURL + '/uploads/' + props.image;
        if (image === 'http://localhost:8000/uploads/null') {
            return null;
        }
    }
    return (
        <img src={image} alt="" className="image"/>
    );
};

export default ImgThumbnail;