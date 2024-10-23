import {createStore,combineReducers} from 'redux';
import { CounterReducers } from './Reducers/CounterReducers';
import { ContactReducers } from './Reducers/ContactReducers';


const rootReducers = combineReducers({
    countRoot : CounterReducers,
    conRoot : ContactReducers
})

const store = createStore(rootReducers);

export default store;