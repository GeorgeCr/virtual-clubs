import { Reducer } from "redux";

const initialState = {
    counter: 1,
    featuredClubs: []
}

export const testReducer: Reducer = (state = initialState, { type, payload }: any) => {
    switch(type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT':
            return { counter: state.counter - 1 };
        case 'FETCHED_FEATURED_CLUBS':
            return {
                ...state,
                featuredClubs: payload
            }
        default:
            return initialState;
    }
}
