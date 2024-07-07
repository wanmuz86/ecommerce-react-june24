import React from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../libs/hooks/useFetch';
import { useCart } from '../../libs/providers/CartProvider';

const Product = () => {

  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`
  const { data, loading, error } = useFetch(url);

  const {dispatch} = useCart()

  return (
    <div className='container py-5'>
      {
        loading ?
          <h1>Loading...</h1>
          :
          error ?
            <h1>An error has occcured</h1>

            :
            <>
              <h1 className="mb-3">{data?.title}</h1>
              <div className="row">
                <div className='col-6'>
                  <img src={data?.image} alt={data?.title} className='img-fluid' />
                </div>
                <div className='col-6'>
                  <div className='card p-5'>
                  <h5>USD {data?.price}</h5>
                  <h6>{data?.category}</h6>
                  <h6>{data?.rating.rate} ({data?.rating.count})</h6>
                  <p>{data?.description}</p>
                  <button class="btn btn-primary" onClick={()=>dispatch({type:"ADD_ITEM",payload:{item:data, quantity:1}})}>Add to Cart</button>
                </div>
                </div>
              </div>
            </>


      }

    </div>
  )
}

export default Product