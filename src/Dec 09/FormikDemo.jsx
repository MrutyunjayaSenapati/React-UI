import React from 'react'
import { useFormik } from 'formik'

export default function FormikDemo() {
    const formik=useFormik({
        initialValues:{
            ProductId:0,
            Name:'',
            Stock:false,
            City:'Select City'
        },
        onSubmit:(product)=>{
            console.log(product);
        }
    });
  return (
    <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
            <h2>Register Product</h2>
            <dl>
                <dt>Product Id</dt>
                <dd><input type="number" onChange={formik.handleChange} name="ProductId" /></dd>
                <dt>Name</dt>
                <dd><input type="text" name="Name" onChange={formik.handleChange} /></dd>
                <dt>Stock</dt>
                <dd><input type="checkbox" onChange={formik.handleChange} name="Stock"/> Available </dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange}>
                        <option>Select City</option>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
            </dl>
             <button type="submit">Register</button>
            </form>
        </div>
  )
}
