import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
export let searchContext=createContext(null);

export default function ContextDemo() {
    let data=useContext(searchContext);
    const [products,setProducts]=useState([{id:0,title:'',image:"",price:0,category:'',description:'',rating:{rate:0,count:0}}]);
    function LoadSearchResults(category){
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(response=>{
            setProducts(response.data);
        })
    }
    useEffect(()=>{
        if(data===""){
            LoadSearchResults("jewelery");
        }
        else{
            LoadSearchResults(data);
        }
    },[data])
  return (
    <div>
        <h4>Search Results</h4>
        <div className='d-flex flex-wrap'>
            {
                products.map(product=>
                <div key={product.id} className='card m-2 p-2'style={{width:'200px'}}>
                    <img className='card-img-top' src={product.image} height="140" />
                    <div className='card-header'>
                        {product.title}

                    </div>
                </div>
                )
            }

        </div>

    </div>
  )
}
