import React from 'react'
import { useLocation } from 'react-router-dom'
import { Carousel } from 'antd';
import IphoneList from '../../pages/IphoneList'
import MacList from '../../pages/MacList';
import IpadList from '../../pages/IpadList';
import WatchList from '../../pages/WatchList';
import Header from '../Header'
import SliderCategory from '../SliderCategory';
import SoundList from '../../pages/SoundList';
import AccessoryList from '../../pages/AccessoryList';

import './index.css';

const ProductCategory = () => {
    const {pathname}  = useLocation()
    const iphone = '/iphone';

    const mac = '/mac';
    const ipad = '/ipad';
    const watch = '/watch';
    const amthanh = '/am-thanh';
    const phukien = '/phu-kien';
    

    
  return (
    <div className='productcategory_container'>
        <Header/>
        <SliderCategory/>
    
        {pathname === iphone ? <IphoneList/> : ''}
        {pathname === mac ? <MacList/> :''}
        {pathname === ipad ?  <IpadList/>: ''  }
        {pathname === watch ?  <WatchList/>: ''  }
        {pathname === amthanh ?  <SoundList/>: ''  }
        {pathname === phukien ?  <AccessoryList/>: ''  }        

    </div>
  )
}

export default ProductCategory