import React, { useEffect,useState,useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';

//Internal Imports 
import { loadPokemons } from '../../Actions/loadPokemonActions';
import Card from './Card';

const CardList = () => {

    const dispatch = useDispatch();
    const [pageNum, setPageNum] = useState(1);
    const [lastEle, setLastEle] = useState(null);
    

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setPageNum((no) => no + 1);
                }
            })
    );

    const pokemonObj = useSelector((state) => {
        return {
            pokemon:state.appState.pokemon
        }
    });

    const totalPages = pokemonObj.pokemon.length/25;
    const itemsOnPage = 25;

    useEffect(() => {
        (async () => {
            await dispatch(loadPokemons());
           })();
        return (() => {
            console.log('Clean Up function');
        })
    },[])


    useEffect(() => {
        const currentElement = lastEle;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastEle]);


    const getPokemonCard = (obj) => {
        let endIndex = pageNum * itemsOnPage;
        let filteredArray = obj.pokemon.slice(0,endIndex);
        let cards = filteredArray.map((pkCard,i) => {
            return (
                <div className='pk-card-parent' key = {pkCard.id}  ref={setLastEle}>
                    <Card card = { pkCard }/>
                </div>
            )
        });
        return cards;
    }

    return (
        <div className='pk-card-list'>
            {getPokemonCard(pokemonObj)}
        </div>
    ) 
}

export default CardList;