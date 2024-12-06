import React, { useEffect, useState } from 'react'

function RequestFetch() {
    const [product,setProduct]=useState({title:"",price:0,rating:{ratings:0,rate:0,reviews:0},offers:[],image:''});
    function LoadData(){
        fetch("./JSON/produc.json")
        .then(response=>response.json())
        .then(product=>setProduct(product))

    }
    useEffect(()=>{
        LoadData();
    })
  return (
    <div className='container-fluid'>
        <div className='mt-4 row'>
            <div className="col-4">
                <img src={product.image} alt="iphone" height="450" width="100%" />
            </div>
            <div className='col-8'>
                <div className="fs-4">
                    {product.title}
                </div>
                
                <div className="mt-2">
                    <span className='badge bg-success'>{product.rating.rate} <span className='bi bi-star-fill'></span>
                    </span>
                <span className='text-secondary fw-bold'>
                    {product.rating.ratings.toLocaleString()}ratings & {product.rating.reviews.toLocaleString()}reviews

                </span>

                </div>
                <div className="mt-4 fw-bold fs-1">
                         {product.price}
                    </div>
                    <div className="mt-4">
                        <h5>Available Offers</h5> 
                        <ul className="list-unstyled">
                          {
                              product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                          }
                        </ul>
                    </div>


            </div>

        </div>

    </div>
  )
}

export default RequestFetch;