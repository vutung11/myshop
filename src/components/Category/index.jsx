import React, { useEffect, useState } from 'react'


import './index.css';
const Category = () => {
    const [category, setCategory] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('http://localhost:1337/api/categories');
            const responseJSON = await response.json();
            setCategory(responseJSON)
        }
        fetchData()
    },[])
    console.log(category);

  return (
    <div className='container_category'>
        {category && category.data && category.data.map((item,idx)=> (
             <div className="container_category--box">
             <img className='iphone' src={item.attributes.image_category} alt="" />
             <p>{item.attributes.name_category}</p>
         </div>
        ))}
    </div>
  )
}

export default Category