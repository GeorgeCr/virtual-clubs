export const increment = () => {
    console.log('calling')
return {
    type: 'INCREMENT'
    }
}

export const decrement = () => ({
    type: 'DECREMENT'
});