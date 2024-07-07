import { createContext, useContext, useReducer } from "react"


const CartContext = createContext(); // TO determine the components that have access to our state 

const CartProvider = ({children}) => {

    const initialState = {
        cart: []
    }

    const cartReducer = (state, action) =>
    {
        switch (action.type) {

            case 'ADD_ITEM':

            //payload sent: {item:{id:,title, image, price}, quantity:1}

            // Verify first the id of item in my payload with each item in the cart
            // findIndex will return number > 0 if item exists in the cart and -1 if it is not in the cart

            const existingItemIndexAdd = state.cart.findIndex(item => item.item.id === action.payload.item.id)

            // If the item is in the cart I will increase the quantity by 1

            if (existingItemIndexAdd !== -1){
                const updatedCart =  [...state.cart];
                updatedCart[existingItemIndexAdd].quantity += 1 // Increase the quantity of item by 1
                return {
                    ...state,
                    cart:updatedCart
                }

            }
            else {
                  // If the item is not in the cart I will add the item (payload) in the cart with quantity 1
                  return {
                    ...state,
                    cart:[...state.cart, action.payload]
                  }

            }

    
            case 'REMOVE_ITEM':

            case 'EMPTY_CART':


            default:
                return state
        }
    }

    // We will create provider with the state and methods pass in the provider
    const [state, dispatch] = useReducer(cartReducer,initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )


}

const useCart = () =>{
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('Cart need to be used within a cart provider')
    }
    return context
}

export {CartProvider, useCart}


