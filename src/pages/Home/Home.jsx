import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'

const Home = ({banner}) => {
  return (
    <>
    <Banner banner={banner}/>
    <div className='container py-5'>Home</div>
    </>
  )
}

export default Home