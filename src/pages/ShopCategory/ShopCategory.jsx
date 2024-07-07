import React from 'react'
import './ShopCategory.css'
import Banner from '../../components/Banner/Banner'
const ShopCategory = ({banner}) => {
  return (
    <>
   
    <Banner banner={banner}/>
    <div className='container py-5'>ShopCategory</div>
    </>
    
  )
}

export default ShopCategory