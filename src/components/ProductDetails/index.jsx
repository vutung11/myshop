import React from 'react'
import Header from '../Header'
import './index.css';

const ProductDetails = () => {
  return (
    <div className='productdetail_container'>
      <Header/>
      <div className="productdetail_container-bg">
      <div className="productdetail_container_box">
        <div className="productdetail_container_box-left">
          <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-6_dynamic_island-6-3-650x650.jpg" alt="" />
        </div>
        <div className="productdetail_container_box-right">
        iPhone 14 Pro Max
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails