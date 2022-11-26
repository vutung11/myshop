import React from 'react'
import Category from '../components/Category'
import CopyRight from '../components/CopyRight'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Policy from '../components/Policy'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import Store from '../components/Store'
import IphoneList from './IphoneList'

const Home = () => {
  return <React.Fragment>
          <Header/>
          {/* <Slider/> */}
          <Policy/>
          <div className='container_wdithbg'>
          <Category/>
          <IphoneList/>
           {/* <ProductCard/> */}
          {/* <ProductCard/> */}
          {/* <Store/> */}
          {/* <Footer/> */}
          {/* <CopyRight/> */}

          </div>
    </React.Fragment>
}

export default Home