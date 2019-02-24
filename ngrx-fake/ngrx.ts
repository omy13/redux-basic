export interface Action {
    type: string;
    playload?: any;
}

export interface Reducer<T> {
    (state:T, action: Action): T
    
}
