import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Featured from '../../components/Featured/Featured'

const Home = ({banner}) => {
  return (
    <>
    <Banner banner={banner}/>
    <div className='container py-5'>
      <h3 className='mb-3'>Featured Products</h3>
      <Featured/>
    </div>
    </>
  )
}

export default Home