import { useState } from 'react'

const inititalState = {
    cart: [],
    lastIdRemoved:-1
}

const useInitialState = () => {
    const [state, setState] = useState(inititalState)

    const addToCart = (payload) => {
        const fooIdx = state.cart.findIndex(({id})=> payload.id===id)

        if(fooIdx>-1){
            let foo=[...state.cart]
            foo[fooIdx].quantity+=1
            setState({
                ...state,
                cart: [...foo]
            })

        }else{
            payload.quantity = 1
            setState({
                ...state,
                cart: [...state.cart, payload]
            })
        }
    }

    const removeToCart = (payload) => {
        const fooIdx = state.cart.findIndex(({id})=> payload.id===id)

        if(fooIdx>-1){
            let foo=[...state.cart]
            foo[fooIdx].quantity-=1

            if(foo[fooIdx].quantity===0){
                foo.splice(fooIdx,1)
                setState({
                    ...state,
                    cart: [...foo]
                    ,lastIdRemoved:payload.id
                })
            }else{
                setState({
                    ...state,
                    cart: [...foo]
                })
            }
        }
    }

    return {
        state,
        addToCart,
        removeToCart,
        
    }
}

export {useInitialState}