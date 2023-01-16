import React from 'react';
import './ImageBlock.css'

export const ImageBlock = ({url, bool}) => {
    console.log(bool ? 'true' : 'false')
    return (
        <div>
            <img className="image" src={url} alt=""/>
        </div>
    );
};
