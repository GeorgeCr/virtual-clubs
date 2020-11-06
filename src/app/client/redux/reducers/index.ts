import { Reducer } from "redux";

const initialState = {
    counter: 1,
    // text: ''
}

export const testReducer: Reducer = (state = initialState, { type, payload }: any) => {
    switch(type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT':
            return { counter: state.counter - 1 };
        case 'DO_THUNK':
            return {
                ...state,
                text: payload
            }
        default:
            return initialState;
    }
}
