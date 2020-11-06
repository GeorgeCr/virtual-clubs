export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
    type: 'DECREMENT'
});

// this is a dummy function, so this is provided with any types all over the place
// subject of change

export const doThunk = () => {
    return async function(dispatch: any, getState: any) {
        console.log('do stuff');
        const payload = await fetch('http://localhost:9000/').then(res => res.json());
        dispatch({ type: 'DO_THUNK', payload });
        console.log('state => ', getState());
    }
}