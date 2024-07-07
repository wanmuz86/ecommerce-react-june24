import React from 'react'
import './Cart.css'
import { useCart } from '../../libs/providers/CartProvider'
import CartItem from '../../components/CartItem/CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { state, dispatch } = useCart()
  const  navigate  = useNavigate()

  return (
    <div className='container py-3'>
      <h2>Cart</h2>
      {
        state.cart.length > 0 ?
          <>
            <div className="mx-3">
              {
                state.cart.map(val => (
                  <CartItem cartItem={val} key={val.item.id} />
                ))
              }
            </div>
            <button className='btn btn-outline-danger' onClick={() => dispatch({ type: 'EMPTY_CART' })}>Empty Cart</button>
          </>
          :
          <>
          <p>No item available in the cart. Start shopping now</p>
          <button className='btn btn-primary' onClick={()=> navigate('/')}>Start Shopping</button>
          </>
      }


    </div>

  )
}

export default Cart