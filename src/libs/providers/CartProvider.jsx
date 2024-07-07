import { createContext } from "react"


const CartContext = createContext(); // TO determine the components that have access to our state 

const CartProvider = ({children}) => {

    const initialState = {
        cart: []
    }

    const cartReducer = (state, action) =>
    {
        switch (action.type) {

            case 'ADD_ITEM':


            case 'REMOVE_ITEM':

            case 'EMPTY_CART':


            default:
                return state
        }
    }

    return state

}