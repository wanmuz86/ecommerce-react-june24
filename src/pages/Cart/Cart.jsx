import React from 'react'
import './Cart.css'
import { useCart } from '../../libs/providers/CartProvider'
import CartItem from '../../components/CartItem/CartItem'

const Cart = () => {
  const { state } = useCart()

  return (
    <div className='container'>
      <h2>Cart</h2>
      {state.cart.map(val => (
        <CartItem cartItem={val} key={val.item.id} />
      ))}
    </div>
  )
}

export default Cart