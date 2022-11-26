import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';
import './index.css';

const WatchList = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch('http://localhost:1337/api/watches');
            const responseJson = await response.json();
            setData(responseJson)
        }
        fetchData()

    },[])
  return (
    <div className="container_productcard-title">
        <h2>Watch</h2>
        <ProductCard data={data} />
    </div>
  )
}

export default WatchList