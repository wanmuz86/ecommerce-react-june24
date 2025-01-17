import React from 'react'
import './ProductCard'
import { Link } from 'react-router-dom'
import { useCart } from '../../libs/providers/CartProvider'


const ProductCard = ({ product }) => {

    const {dispatch} = useCart()

    return (
        <div className="card bg-light">
            <img src={product.image} className="card-img-top" alt={product.title} height={300}/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">USD {product.price}</p>
                <button className='btn btn-primary mb-3' style={{width:'100%'}}
                onClick={()=>dispatch({type:'ADD_ITEM',payload:{item:product, quantity:1}})}
                >Add to Cart</button>
                <Link to={`/products/${product.id}`} className="btn btn-outline-primary" style={{width:'100%'}}>More Info</Link>
            </div>
        </div>
    )
}

export default ProductCard