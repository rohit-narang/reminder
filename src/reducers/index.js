import {ADD_REMINDER, DELETE_REMINDER} from '../actions/actions';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) =>{
    return {
        text: action.text,
        dateTime: action.dateTime,
        id: Math.random()
    }
}

const removeById = (state=[], id) => {
    const reminders = state.filter(reminders => reminders.id !== id);
    return reminders;
}

const reminders = (state=[], action) =>{
    let reminders = null;
    state = read_cookie('reminders');
    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders);
            return reminders;
            
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;

            default:
            return state;
        }
}

export default reminders;