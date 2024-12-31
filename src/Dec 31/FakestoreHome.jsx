import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";

export default function FakestoreHome() {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            setCategories(response.data);
        })
    },[])
  return (
    <div>
        <h5>Fakestore Home</h5>
        <ul className='list-unstyled'>
            {
                categories.map(category=>(
                    <li key={category} className='my-3'><Link className='btn btn-dark w-100'to={`/products/${category}`}>{category.toUpperCase()}</Link></li>
                ))
            }
        </ul>
    </div>
  )
}
