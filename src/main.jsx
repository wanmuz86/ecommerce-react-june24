import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ShopCategory from './pages/ShopCategory/ShopCategory.jsx'
import Product from './pages/Product/Product.jsx'
import Cart from './pages/Cart/Cart.jsx'

// We use browserROuter as it is the latest one / recommended for today
// It supports new features eg dataLoader

const router = createBrowserRouter([
  {
    path:"/",
    element:"<App/>",
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"categories/electronics",
        element:<ShopCategory/>
      },
      {
        path:"categories/jewelery",
        element:<ShopCategory/>
      },
      {
        path:"categories/men's clothing",
        element:<ShopCategory/>
      },
      {
        path:"categories/women's clothing",
        element:<ShopCategory/>
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
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
