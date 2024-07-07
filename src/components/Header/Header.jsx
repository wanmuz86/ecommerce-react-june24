import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../libs/providers/CartProvider'

const Header = () => {

  const {state} = useCart()
  return (
    <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">LazzMall</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories/men's clothing">Men's Clothing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories/women's clothing">Women's Clothing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories/jewelery">Jewelery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories/electronics">Electronics</NavLink>
            </li>

          </ul>
          <div className="d-flex">
            <NavLink className="btn btn-outline-warning" to="/cart">Cart ({state.cart.length})</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header