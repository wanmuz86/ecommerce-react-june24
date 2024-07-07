import { useFetch } from '../../libs/useFetch'
import './Featured.css'

import React from 'react'
const Featured = () => {
    const url = "https://fakestoreapi.com/products?limit=6"

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
                        <ul>
                            {
                                data?.map(val => (
                                    <li key={val.id}>{val.title}</li>
                                ))
                            }
                        </ul>
            }
        </div>
    )
}

export default Featured