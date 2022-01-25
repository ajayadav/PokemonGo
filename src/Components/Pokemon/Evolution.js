import React from 'react';

const Evolution = ({ nextEvolution }) => {

    const getEvolutions = (evolutions) => {
        let evol = evolutions.map(obj => {
            return (
                <div key = { obj.name } className='pk-evolution'>
                    <label className='pk-label-basic'> { obj.name } </label>
                    <label className='pk-label-basic'> { obj.num } </label>
                </div>
            )
        })
        return evol;
    }

    return (
        <div className='pk-evolutions-list'>
            <div className='pk-evolution-heading'>Next Evolutions</div>
            {getEvolutions(nextEvolution)}
        </div>
    )
}

export default Evolution;