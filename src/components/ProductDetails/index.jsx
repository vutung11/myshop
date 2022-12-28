import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../redux/getProductByIdSlice';
import './index.css';

const ProductDetails = () => {
  const { productbyid } = useSelector((state) => state.productbyid)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductById(id))
  }, [])
  const productId = productbyid[0];
  if (productId)

    return (
      <div className='productdetail_container'>
        <div className="productdetail_container-bg">
          <div className="productdetail_container_box">
            <div className="productdetail_container_box-left">
              <img src={productId?.data.attributes.image} alt="" />
            </div>
            <div className="productdetail_container_box-right">
              {productId?.data.attributes.name}
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductDetails