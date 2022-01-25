import { LOAD_DATA } from "./type";
import axios from '../Services';

export const loadPokemons = () => {
    return async (dispatch,getState) => {
        const response = await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
        
        let sortedData = response.data.pokemon.sort( (a,b) => (a.name > b.name) ? 1 : -1);
        dispatch({
            type:LOAD_DATA,
            payload:response.data.pokemon
        });
    }
}

