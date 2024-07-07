import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ShopCategory from './pages/ShopCategory/ShopCategory.jsx'
import Product from './pages/Product/Product.jsx'
import Cart from './pages/Cart/Cart.jsx'

import banner1 from './assets/banner1.jpg'
import banner2 from './assets/banner2.jpg'
import banner3 from './assets/banner3.jpg'

import { CartProvider } from './libs/providers/CartProvider.jsx'
// We use browserROuter as it is the latest one / recommended for today
// It supports new features eg dataLoader

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home banner={banner1}/>
      },
      {
        path:"categories/electronics",
        element:<ShopCategory banner={banner2}/>
      },
      {
        path:"categories/jewelery",
        element:<ShopCategory banner={banner3}/>
      },
      {
        path:"categories/men's clothing",
        element:<ShopCategory banner={banner2}/>
      },
      {
        path:"categories/women's clothing",
        element:<ShopCategory banner={banner3}/>
      },
      {
        path:"products/:id",
        element:<Product/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>

)
