import React from 'react'
import { useState } from 'react'

function Nested() {
    const [items]=useState([{category:'Electronics',Product:['TV','Mobile']},
    {category:'Footwear',Products:['Casuals','Boots','Sneakers']}])
  return (
    <div className='container-fluid'>
        <h2>Menu</h2>
        <ol>
        {
                  items.map(item=> 
                    <li key={item}>
                        {item.category}
                        {/* <ul>
                            {
                                item.Products.map(product=><li key={product}>{product}</li>)
                            }
                        </ul> */}
                    </li> 
                  )
               }
        </ol>

    </div>
  )
}

export default Nested