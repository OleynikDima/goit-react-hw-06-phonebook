import {combineReducers} from 'redux';
import actionTypes from './taskActionRTypes'



const items = (state=[], { type, payload }) => {
    switch(type) {
        case actionTypes.NEW_OBJ:
                return [...state, payload.contacts];

        case actionTypes.SHOW_ALERT:
            return 

        case actionTypes.REMOVE:
                return  state.filter(contact => contact.id.indexOf(payload.itemId) === -1)
        
        default:
                return state;
    }
};

const filter = (state = '', {type, payload }) => {
    switch(type){
        case actionTypes.CHANGE_FILTER:
             return payload.filter;
         
             default:
                 return state;
    }
};

export default combineReducers({
    items,
    filter,
})
