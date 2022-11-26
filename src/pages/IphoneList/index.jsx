import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';

import './index.css';

const IphoneList = () => {
    const [listIphone , setListIphone] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{

            const response = await fetch('http://localhost:1337/api/iphones');
            const responseJson = await response.json();

            setListIphone(responseJson)
        }
        fetchData()
    })
  return (
    <ProductCard listIphone={listIphone} />
    
  )
}

export default IphoneList