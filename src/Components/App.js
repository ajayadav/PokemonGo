import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';



//Internal Imports.
import CardList from './Pokemon';
import reducer from '../Reducers';

import '../Style/pk-cards.css';


const store = createStore(reducer,applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <CardList />
            </Provider>
        )
    }
}

export default App;