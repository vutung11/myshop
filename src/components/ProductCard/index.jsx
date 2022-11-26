import React from 'react'

import './index.css';

const ProductCard = (props) => {
    const {listIphone} = props;
    console.log(listIphone)
  return (
    <div className='container_productcard'>
        <div className="container_productcard-title">
            <h2>iPhone</h2>
        </div>
        <div className="container_productcard--wrap">
            {listIphone && listIphone.data && listIphone.data.map((item,idx)=>(
                <div className="container_productcard--box" key={idx}>
                    <label className='label'>Mới</label>
                    <img src={item.attributes.image} alt="" />
                    <div className="container_product--box-content">
                    <h3>{item.attributes.name}</h3>
                    <span>{item.attributes.price_sale}đ<strike>{item.attributes.price}₫ </strike><small>{item.attributes.price_sale_of}%</small></span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductCard