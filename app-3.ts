import {Reducer} from "./ngrx-fake/ngrx";
import {contReducer} from "./cont/cont.reducer";
import {Action} from "./ngrx-fake/ngrx";
import {addAction} from './cont/cont.actions';


class Store<T> {

    constructor( private reducer: Reducer<T>, private state: T ){

    }

    getState() {
        return this.state;
    }

    dispatch(action: Action){
        this.state = this.reducer(this.state, action);
    }
    
}

const stroe = new Store( contReducer, 10 );
console.log(stroe.getState());

stroe.dispatch(addAction);

console.log(stroe.getState());
