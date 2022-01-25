import React from 'react';

const CardImage = ({name, imgSrc, height , weight }) => {
    return (
        <div className='pk-image'>
            <img alt = { name } src = {imgSrc} ></img>
            <div className='pk-dim'>
                <label className='pk-label-basic'>  { 'Height : ' + height } </label>
                <label className='pk-label-basic'>  { 'Weight : ' +  weight } </label>
            </div>
        </div>
    )
}

export default CardImage;
