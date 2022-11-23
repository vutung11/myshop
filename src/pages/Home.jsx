import React from 'react'
import Category from '../components/Category'
import Header from '../components/Header'
import Policy from '../components/Policy'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'

const Home = () => {
  return <React.Fragment>
          <Header/>
          <Slider/>
          <Policy/>
          <div className='container_wdithbg'>
          <Category/>
          <ProductCard/>
          <ProductCard/>

          </div>
    </React.Fragment>
}

export default Home