import React from 'react';
import {apiURL} from "../../apiURL";
import './imgThimbNail.css';
import imageNot from '../../message.png';

const ImgThumbnail = props => {
    let image = imageNot;
    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
        if (image === 'http://localhost:8000/uploads/null') {
            return <img src={imageNot} alt="post" className="image"/>
        }
    }
    return <img src={image} alt="post" className="image"/>
};

export default ImgThumbnail;