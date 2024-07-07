import { useFetch } from '../../libs/hooks/useFetch'
import ProductCard from '../ProductCard/ProductCard'
import './Featured.css'

import React from 'react'
const Featured = () => {
    const url = "https://fakestoreapi.com/products?limit=8"

    // Calling the created hook and execute it right away , 
    // Because the hook is created, useEffect will be called
    // inside useEffect there is an API call to the provided url

    const { data, loading, error } = useFetch(url);
    return (
        <div>
            {
                loading ?
                    <h1> Loading.... </h1>
                    :
                    error ?
                        <h1>Something s wrong</h1>
                        :
                        <div class="row">
                            {
                                data?.map(val => (
                                    <div className='col-3 g-3' key={val.id} >
                                        <ProductCard product={val} />
                                    </div>

                                ))
                            }
                        </div>
            }
        </div>
    )
}

export default Featured