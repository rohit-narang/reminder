import {ADD_REMINDER, DELETE_REMINDER} from './actions';

export const addReminder = (text, dateTime) => {
    
    const action ={
        type: ADD_REMINDER,
        text,
        dateTime
    }
    console.log('action in addReminder', action);
    return action;
} 

export const deleteReminder = (id) =>{
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('action in deleteReminder', action);
    return action;
}