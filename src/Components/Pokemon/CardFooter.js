import React from 'react';

const CardFooter = ({ cardInfo }) => {

    const getPokenType = (type) => {
        let pkType = type.map( pk => {
            return (
                <div key={pk} className='pk-type'>{pk}</div>
            )
        });
        return pkType;
    }

    return (
        <div className='pk-card-footer'>
            <div className='pk-cf-name'>
                <h2> { cardInfo.name }</h2>
                <h3> { cardInfo.num } </h3>
            </div>
            <div className='pk-card-type'>
                <label>Type</label>
                <div className='pk-type-list'>
                    {getPokenType(cardInfo.type)}
                </div>
            </div>
            <div className='pk-card-type'>
                <label>Weaknesses</label>
                <div className='pk-weak-list' title={ cardInfo.weaknesses.join(' / ') }>
                    { cardInfo.weaknesses.join(' / ')}
                </div>
            </div>
        </div>
    )
}

export default CardFooter;