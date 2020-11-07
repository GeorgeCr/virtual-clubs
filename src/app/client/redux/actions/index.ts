import axios from 'axios';

export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
    type: 'DECREMENT'
});

export const getFeaturedClubs: any = () => {
    return async function(dispatch: Function) {
        const { data } = await axios.get('http://localhost:9000/featuredClubs');
        dispatch({ type: 'FETCHED_FEATURED_CLUBS', payload: data });
    }
}
