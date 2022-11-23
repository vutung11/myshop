import React from 'react'


import './index.css';
const Category = () => {
  return (
    <div className='container_category'>
        <div className="container_category--box">
            <img className='iphone' src="https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-cateiphone-1.png" alt="" />
            <p>iPhone</p>
        </div>
        <div className="container_category--box">
            <img className='mac' src="https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catemac-1.png" alt="" />
            <p>Mac</p>
        </div>
        <div className="container_category--box">
            <img className='ipad' src="https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-cateipad.png?v=3" alt="" />
            <p>iPad</p>
        </div>
        <div className="container_category--box">
            <img className='watch' src="https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catewatch-1.png?v=2" alt="" />
            <p>Watch</p>
        </div>
        <div className="container_category--box">
            <img className='sound' src="https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catesound.png" alt="" />
            <p>Âm thanh</p>
        </div>
        <div className="container_category--box">
            <img className='accessories' src="https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catephukien.png" alt="" />
            <p>Phụ kiện</p>
        </div>
    </div>
  )
}

export default Category