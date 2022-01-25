// import React , { useEffect, useRef, useState }from 'react';
import React , { useEffect, useRef, useState }from 'react';

import CardImage  from './CardImage';
import CardFooter from './CardFooter';
import Evolution from './Evolution';

const Card = ({ card }) => {

    //To Do : Handle different card heights.

    // const [height, setHeight] = useState();

    // const getCardSize = () => {
    //     const newHeight = cardRef.current.clientHeight;
    //     setHeight(newHeight);
    //   };

    // const cardRef = useRef();

    // useEffect( () => {
    //     getCardSize()
    // },[card]);

    // const getRowEndCSS = (height) => {
    //     let span = height/10;
    //     return `span ${span}`;
    // }

    // const getStyleObj = (height) => {
    //     if(cardRef.current) {
    //         return {
    //             gridAutoRows:10,
    //             gridRowEnd:getRowEndCSS(height)
    //         }
    //     }
    // }

    return (
        /*<div ref = { cardRef } className='pk-card' style = {getStyleObj(height)}>*/
        <div className='pk-card'>
            <CardImage name = {card.name} imgSrc = {card.img} height={ card.height} weight={ card.weight} />
            <CardFooter cardInfo = { card } />
            { card.next_evolution && <Evolution nextEvolution={card.next_evolution} />}
        </div>
    )
}

export default Card;