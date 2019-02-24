import {Action} from "../ngrx-fake/ngrx";

export function contReducer ( state= 10, action: Action ){

    switch (action.type) {
        case 'ADD':
            return state +=1;
        case 'REMOVE':
            return state -=1;
        case 'MULTIPLY':
            return state * action.playload;
        case 'DIVIDE':
            return state / action.playload;
        case 'RESET':
            return 0;
        default:
            return state
    }
}

