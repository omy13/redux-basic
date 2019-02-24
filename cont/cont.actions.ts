import { Action } from '../ngrx-fake/ngrx';

export const addAction : Action = {
    type: 'ADD'
};

export const removeAction : Action = {
    type: 'REMOVE'
};

export const multiplyAction : Action = {
    type: 'MULTIPLY',
    playload: 2
};

export  const divideAction : Action = {
    type: 'DIVIDE',
    playload: 2
};

export const resetAction: Action = {
    type: 'RESET'
};

