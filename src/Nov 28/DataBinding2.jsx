import React, {useState, useEffect } from 'react'

function DataBinding2() {
    const [products]=useState([{Name:'TV',Price:45000},{Name:'Mobile',Price:12000}]);

    useEffect(()=>{

    },[])
  return (
    <div className='container-fluid'>
        <h2>Products Table</h2>
        <table className='table table-hover'> 
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product=><tr key={product.Name}><td>{product.Name}</td>
                    <td>{product.Price}</td>
                    </tr>)
                }
            </tbody>
        </table>

    </div>
  )
}

export default DataBinding2