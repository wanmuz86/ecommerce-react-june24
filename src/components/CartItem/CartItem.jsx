import React from 'react'

const CartItem = ({cartItem}) => {
    // {item:{id:,title, image, price}, quantity:1}
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
                        <button className='btn btn-outline-secondary'>-</button>
                        {cartItem.quantity}
                        <button className='btn btn-outline-secondary'>+</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartItem