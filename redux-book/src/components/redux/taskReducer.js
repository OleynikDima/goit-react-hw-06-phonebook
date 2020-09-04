import {combineReducers} from 'redux';
// import actionTypes from './taskActionRTypes'
import taskAction from './taskAction';
import {createReducer} from '@reduxjs/toolkit'


const newObj = (state, action) => {
    return [...state, action.payload.contacts]
}
const onRemoveItem = (state, action) => {
    return state.filter(contact => contact.id.indexOf(action.payload.itemId) === -1)
}
const changeFilter = (state,action) => {
    return action.payload;
}




const items = createReducer([],{
    [taskAction.newObj]: newObj,
    [taskAction.onRemoveItem]: onRemoveItem,
});

const filter = createReducer('', {
    [taskAction.changeFilter]:changeFilter
});



export default combineReducers({
    items,
    filter,
})
