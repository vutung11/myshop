import { Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIphoneById } from '../../redux/iphoneSlice';
import Loading from '../Loading';
import './index.css';

const ProductDetails = () => {
  const { oneiphone, loading } = useSelector((state) => state.iphones)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIphoneById(id))
  }, [])
  console.log(oneiphone, loading, 'load')

  return (<React.Fragment>
    {
      loading ?
        <Loading />
        :
        <div className='productdetail_container'>
          <div className="productdetail_container-bg">
            <div className="productdetail_container_box">
              <div className="productdetail_container_box-left">
                <img src={oneiphone?.attributes?.image} alt="" />
                <div className="product_container_box-left--media">
                  <Carousel arrows={true}
                    slidesToShow={6}
                    prevArrow={<LeftOutlined />}
                    nextArrow={<RightOutlined />}>
                    <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_100x100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone_14_pdp_position-7_featuresspecs-7-2-200x200.jpg' />
                    <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_100x100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone_14_pdp_position-7_featuresspecs-7-2-200x200.jpg' />
                    <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_100x100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone_14_pdp_position-7_featuresspecs-7-2-200x200.jpg' />
                    <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_100x100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone_14_pdp_position-7_featuresspecs-7-2-200x200.jpg' />
                    <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_100x100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone_14_pdp_position-7_featuresspecs-7-2-200x200.jpg' />
                    <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_100x100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone_14_pdp_position-7_featuresspecs-7-2-200x200.jpg' />
                    <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_100x100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone_14_pdp_position-7_featuresspecs-7-2-200x200.jpg' />
                    <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_100x100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone_14_pdp_position-7_featuresspecs-7-2-200x200.jpg' />
                    <img src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_100x100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone_14_pdp_position-7_featuresspecs-7-2-200x200.jpg' />
                  </Carousel>
                </div>
              </div>
              <div className="productdetail_container_box-right">
                <div className="productdetail_container_box-right-content">
                  <h3 className='title'>{oneiphone?.attributes?.name}</h3>
                  <p className='price-title'>Gi?? v?? khuy???n m??i t???i: H??? Ch?? Minh</p>
                  <span>{oneiphone?.attributes?.price_sale}??</span><strike>{oneiphone?.attributes?.price}??? </strike><small>-{oneiphone?.attributes?.price_sale_of}%</small>
                  <p className='gigabyte'>Dung l?????ng</p>
                  <p className='gigabyte-number'>128GB</p>
                  <p className='color'>M??u: Xanh d????ng</p>
                  <div className="productdetail_container_box-right-content--color">
                    <div className="productdetail_container_box-right-content--color-box green"></div>
                    <div className="productdetail_container_box-right-content--color-box gray"></div>
                    <div className="productdetail_container_box-right-content--color-box white"></div>
                    <div className="productdetail_container_box-right-content--color-box red"></div>
                    <div className="productdetail_container_box-right-content--color-box gray2"></div>
                  </div>

                  <div className="productdetail_container_box-right-content--promotion">
                    <span>Khuy???n m??i</span>
                    <small>Gi?? v?? khuy???n m??i d??? ki???n ??p d???ng ?????n 23:00 | 29/12</small>
                    <div className="content-promo">
                      <ul>Mua k??m iPhone ??u ????i th??m (Tu??? model v?? kh??ng k??m khuy???n m??i kh??c c???a s???n ph???m mua k??m):
                        <li>- Ph??? ki???n Apple: Gi???m ?????n 50%. Xem chi ti???t</li>
                        <li>- Apple Watch: Gi???m ?????n 30%. Xem chi ti???t</li>
                        <li> - iPad: Gi???m ?????n 40%. Xem chi ti???t</li>
                        <li>- Macbook: Gi???m ?????n 25%. Xem chi ti???t</li>
                      </ul>
                    </div>
                  </div>

                  <div className="productdetail_container_box-right-content-sell">
                    <button className='productdetail_container_box-right-content-sell-btn'>Mua ngay</button>
                  </div>

                  <div className="productdetail_container_box-right-content-credit">
                    <button>
                      <p className='title'>Mua tr??? g??p 0%</p>
                      <p className='text'>Qua c??ng ty t??i ch??nh</p>
                    </button>
                    <button>
                      <p className='title'>Tr??? g??p 0% qua th???</p>
                      <p className='text'>Visa, Mastercard, JCB, Amex</p>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    }
  </React.Fragment >
  )
}

export default ProductDetails