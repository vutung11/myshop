import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';
import './index.css';

const IpadList = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch('http://localhost:1337/api/ipads');
            const responseJson = await response.json();
            setData(responseJson)
        }
        fetchData()

    },[])
  return (
    <div className="container_productcard-title">
        <h2>iPad</h2>
        <ProductCard data={data} />
    </div>
  )
}

export default IpadList