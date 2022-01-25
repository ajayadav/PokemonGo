import { LOAD_DATA } from "../Actions/type";

const initialState = {
    pokemon:[]
};

export default (state = initialState,action) => {
    switch(action.type) {
        case LOAD_DATA:
            return {
                ...state,
                pokemon:action.payload
            }
        default:
            return state;
    }
}