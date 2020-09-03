import {createStore, combineReducers} from 'redux';
import taskReducer from './taskReducer'

const rootReducer = combineReducers({
        contacts:taskReducer,
});


const store = createStore(
     rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;