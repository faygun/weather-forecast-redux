import {FETCH_WEATHER, SET_ERROR} from '../actions/index';

export default function(state = [], action){
    switch (action.type){
        case FETCH_WEATHER :{
            return [action.payload.data, ...state];
        }
        case SET_ERROR : {
            alert(action.payload.response.data.message);
        }
    }
    
    return state;
}