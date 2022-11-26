import React from 'react'
import { NavLink } from 'react-router-dom';
import { Form } from 'antd';
import { Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';


import './index.css';



const Header = () => {
    const { Search } = Input;
    return (
        <div className='container_header'>
            <NavLink to={'/'}>
                <img src='https://cdn.tgdd.vn/mwgcart/topzone/images/mobile/logo-video.png?v=4' className='container_header--logo' alt="" />
            </NavLink>
            <ul className='container_header--menu'>
                <li>iPhone</li>
                <li>
                    Mac
                </li>
                <li>
                    iPad
                </li>
                <li>
                  Watch
                </li>
                <li>
                  Âm thanh
                </li>
                <li>
                   Phụ kiện
                </li>
                <li>
                   TekZone
                </li>
                <li>
                   TopCare  
                </li>
                <Form>
                <Search className='input_search' placeholder="Tìm kiếm sản phẩm" enterButton />
                </Form>
            </ul>
            <ShoppingCartOutlined />

        </div>
    )
}

export default Header