interface Action {
    type: string;
    playload?: any;
}

const addAction : Action = {
    type: 'ADD'
};

console.log(reducer(10, addAction));


const removeAction : Action = {
    type: 'REMOVE'
};

console.log(reducer(10, removeAction));


const multiplyAction : Action = {
    type: 'MULTIPLY',
    playload: 2
};

console.log(reducer(10, multiplyAction));


const divideAction : Action = {
    type: 'DIVIDE',
    playload: 2
};

console.log(reducer(10, divideAction));


function reducer ( state= 10, action: Action ){
    
    switch (action.type) {
        case 'ADD':
            return state +=1;
        case 'REMOVE':
            return state -=1;
        case 'MULTIPLY':
            return state * action.playload;
        case 'DIVIDE':
            return state / action.playload;
        default:
            return state
    }

}


