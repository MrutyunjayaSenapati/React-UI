import React from 'react'
import { useFetch } from '../Hooks/useFetch'

export default function HomeDemo() {
    let categories=useFetch('https://fakestoreapi.com/products/categories')
  return (
    <div>
        <h2>Categories</h2>
        <ol>
            {
                categories.map(category=><li key={category}>{category}</li>)
            }
        </ol>
    </div>
  )
}
