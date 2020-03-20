import React from 'react';
import {apiURL} from "../../apiURL";
import ImageNot from './message.png';
import './imgThimbNail.css';

const ImgThumbnail = props => {
    let image = ImageNot;
    console.log(image)
    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    }
    return (
        <img src={image} alt="" className="image"/>
    );
};

export default ImgThumbnail;