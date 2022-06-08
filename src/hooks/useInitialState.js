import { useState } from 'react'

const inititalState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(inititalState)

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    return {
        state,
        addToCart
    }
}

export {useInitialState}