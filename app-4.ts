import {createStore, Store} from "redux";
import {contReducer} from "./cont/cont.reducer";
import {addAction} from './cont/cont.actions';

const store: Store = createStore(contReducer)

store.subscribe( () =>{
    console.log(store.getState());
});

store.dispatch(addAction);
