import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='bg-dark text-light p-5'>
<div className='container'>
      <div className='row'>
        <div className='col-3'>
          <ul className='list-unstyled'>
            <li><NavLink href="#">About Us</NavLink></li>
            <li><NavLink to="#" >Terms and Condition</NavLink></li>
            <li><NavLink to="#" >Privacy Policy</NavLink></li>
            <li><NavLink to="#">Contact Us</NavLink></li>
          </ul>
        </div>
        <div className='col-3'>
        <ul className='list-unstyled'>
            <li><NavLink to="/categories/men's clothing" style={{ textDecoration: 'none', color: 'lightgray'}}>Men's Clothing</NavLink></li>
            <li><NavLink  to="/categories/women's clothing" style={{ textDecoration: 'none', color: 'lightgray'}}>Women's Clothing</NavLink></li>
            <li><NavLink  to="/categories/jewelery" style={{ textDecoration: 'none', color: 'lightgray'}}>Jewelery</NavLink></li>
            <li><NavLink  to="/categories/electronics" style={{ textDecoration: 'none', color: 'lightgray'}}>Electronics</NavLink></li>
          </ul>
        </div>
        <div className='col-3'>
        <ul className='list-unstyled'>
            <li><NavLink to="#" style={{ textDecoration: 'none', color: 'lightgray'}}>Facebook</NavLink></li>
            <li><NavLink to="#" style={{ textDecoration: 'none', color: 'lightgray'}}>Instagram</NavLink></li>
            <li><NavLink to="#" style={{ textDecoration: 'none', color: 'lightgray'}}>Twitter</NavLink></li>
           
          </ul>
        </div>
        <div className='col-3'>
          <h6>ABC Sdn Bhd</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia reiciendis </p>
        </div>
        </div>
      </div>
        <p className='text-center'>&copy; 2024 - All right reserved</p>
    </footer>
  )
}

export default Footer