import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FakestoreProductDetails() {
    const [product, setProduct] = useState({
        id: 0,
        title: "",
        image: "",
        category: "",
        price: 0,
        description: "",
        rating: { rate: 0, count: 0 }
    });

    const params = useParams();

    useEffect(() => {
        // Fetch product details using the product ID from the URL parameters
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    }, [params.id]); // Dependency array includes params.id to refetch if it changes

    return (
        <div>
            <h5>Details</h5>
            <dl>
                <img src={product.image} width="200" height="200" alt={product.title} />
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>${product.price.toFixed(2)}</dd> {/* Format price to two decimal places */}
                <dt>Rating</dt>
                <dd>
                    <span className='badge bg-success text-white'>
                        {product.rating.rate}
                        <span className='bi bi-star-fill'></span>
                    </span>
                    [{product.rating.count}]
                </dd>
            </dl>
        </div>
    );
}
