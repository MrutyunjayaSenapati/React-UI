import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function FakestoreProducts() {
    let [products,setProducts]=useState([{id:0,title:'',image:'',category:'',price:'',description:'',rating:{rate:0,count:0}}]);
    let params=useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])
  return (
    <div>
        <h5>{params.category.toUpperCase()}PRODUCTS</h5>
        <div className='d-flex flex-wrap'>
        {
            products.map(product=>
                     <div key={product} className='mx-2'>
                        <Link to={`/details/${product.id}`}>
                        <img height="100"width="100" className='card-img-top' src={product.image} alt="" />
                        </Link>
                     </div>
                
            )
        }
        </div>
    </div>
  )
}
