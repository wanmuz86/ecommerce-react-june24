import React from 'react'
import './ProductCard'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className="card bg-light">
            <img src={product.image} className="card-img-top" alt={product.title} height={300}/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">USD {product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary" style={{width:'100%'}}>Buy now</Link>
            </div>
        </div>
    )
}

export default ProductCard