import React from 'react'
import { NavLink } from 'react-router-dom';


import './index.css';

const ProductCard = (props) => {
  const { data } = props;
  return (
    <div className='container_productcard'>
      <div className="container_productcard--wrap">
        {data.map((item, idx) => (
          <NavLink to={`/${item.id}`} key={item.id}>
            <div className="container_productcard--box">
              <label className='label'>Mới</label>
              <img src={item.attributes.image} alt="" />
              <div className="container_product--box-content">
                <h3>{item.attributes.name}</h3>
                <span>{item.attributes.price_sale}đ<strike>{item.attributes.price}₫ </strike><small>{item.attributes.price_sale_of}%</small></span>
              </div>
            </div>
          </NavLink>
        ))}


      </div>
    </div>
  )
}

export default ProductCard
