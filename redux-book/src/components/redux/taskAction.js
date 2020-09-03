import actionTypes from './taskActionRTypes'
const shortid = require('shortid');


const changeFilter = filter => ({
        type: actionTypes.CHANGE_FILTER,
        payload:{
            filter,
     },
});

//add new contact in state
const newObj = ({text,number}) => ({
    type: actionTypes.NEW_OBJ,
    payload:{
        contacts:{
            id:shortid(),
            text,
            number,
        }
    }
})

const onRemoveItem = itemId =>({
    type:actionTypes.REMOVE,
    payload:{
        itemId,
    }
})


export default {
    changeFilter,
    newObj,
    onRemoveItem,
}