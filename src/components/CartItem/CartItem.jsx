import React from 'react'
import { useCart } from '../../libs/providers/CartProvider'

const CartItem = ({cartItem}) => {
    // cartItem {item:{id:,title, image, price}, quantity:1}

    const {dispatch} = useCart()
    return (
        <div className='card p-5 my-3'>
            <div className='row'>
                <div className='col-3'>
                    <img src={cartItem.item.image} alt={cartItem.item.title} className='img-fluid'/>
                </div>
                <div className='col-9'>
                    <h4>{cartItem.item.title}</h4>
                    <p>{cartItem.item.price}</p>
                    <p>
                        
                        <button className='btn btn-outline-secondary me-3' onClick={()=>
                        dispatch({type:'REMOVE_ITEM', payload:{item:cartItem.item, quantity:1}})}>-</button>
                        {cartItem.quantity}
                        <button className='btn btn-outline-secondary ms-3' onClick={
                            ()=> dispatch({type:'ADD_ITEM', payload:{item:cartItem.item, quantity:1}})
                        }>+</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartItem