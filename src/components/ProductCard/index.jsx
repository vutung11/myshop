import React from 'react'

import './index.css';

const ProductCard = () => {
  return (
    <div className='container_productcard'>
        <div className="container_productcard-title">
            <h2>iPhone</h2>
        </div>
        <div className="container_productcard--wrap">
        <div className="container_productcard--box">
            <label className='label'>Mới</label>
            <img src="https://cdn.tgdd.vn/Products/Images/42/240259/s16/iPhone-14-thumb-topzone%20(2)-650x650.png" alt="" />
            <div className="container_product--box-content">
            <h3>iPhone 14 128GB</h3>
            <span>21.990.000₫<strike>24.990.000₫ </strike><small>-12%</small></span>
            </div>
        </div>
        <div className="container_productcard--box">
            <label className='label'>Mới</label>
            <img src="https://cdn.tgdd.vn/Products/Images/42/245545/s16/iPhone-14-plus-topzone%20(5)-650x650.png" alt="" />
            <div className="container_product--box-content">
            <h3>iPhone 14 Plus 128GB</h3>
            <span>24.990.000₫<strike>27.990.000₫</strike><small>-10%</small></span>
            </div>
        </div>
        <div className="container_productcard--box">
            <label className='label'>Mới</label>
            <img src="https://cdn.tgdd.vn/Products/Images/42/247508/s16/iPhone-14-Pro-topzone%20(4)-650x650.png" alt="" />
            <div className="container_product--box-content">
            <h3>iPhone 14 Pro 128GB</h3>
            <span>30.490.000₫<strike>30.990.000₫</strike><small>-1%</small></span>
            </div>
        </div>
        <div className="container_productcard--box">
            <label className='label'>Mới</label>
            <img src="https://cdn.tgdd.vn/Products/Images/42/251192/s16/iPhone-14-Pro-series-%20(2)-650x650.png" alt="" />
            <div className="container_product--box-content">
            <h3>iPhone 14 Pro Max 128GB</h3>
            <span>33.490.000₫<strike>33.990.000₫</strike><small>-1%</small></span>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default ProductCard