import React, { useEffect, useState } from 'react'

function BindMethod() {
    const [categories, setCategories]=useState(['All','Electronics','Footwear']);
    useEffect(()=>{

    },[])
  return (
    <div className='container-fluid' >
        <header>
            <nav className='btn-group'>
                {
                    categories.map(category=> <button key={category} className='btn btn-danger'>{category} </button>)
                }

            </nav>
        </header>
        <h2>Categories</h2>
        <ul>
            {
                categories.map(category=>(
                    <li key={category}>{category}</li>
                ))
            }
        </ul>
        <h2>Select Category</h2>
        <select >
            {
                categories.map((category)=>(
                    <option  value={category}>{category}</option>

                ))
            }
        </select>

    </div>
  )
}

export default BindMethod;