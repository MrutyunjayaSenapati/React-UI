import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup";

export default function YupDemo() {
    const formik=useFormik({
        initialValues:{
            ProductId:0,
            Name:'',
            Stock:false,
            City:'Select City',
            Mobile:''
        },
        validationSchema:yup.object({

            ProductId:yup
            .number().required('Product Id Required')
            .min(1,'Product Id cant be Zero or less'),
            Name:yup 
            .string()
            .required("Product Name is required")
            .min(4,"Product Name must be atleast 4 characters"),
            City: yup.string().required("Please select a city"),
            Mobile: yup
                .string()
                .required("Mobile number is required")
                .matches(/^\+91\d{10}$/, "Mobile must be in the format +91XXXXXXXXXX"),

            

        }),
        onSubmit:(product)=>{
            console.log(product);
        },
    });
  return (
    <div className='container-fluid'>
        <form  onSubmit={formik.handleSubmit}>
            <h2>Register Product</h2>
            <dl>
                <dt>Product Id</dt>
                <dd><input type="number"name="ProductId" onChange={formik.handleChange} onBlur={formik.handleBlur} /></dd>
                <dd className='text-danger'>{formik.errors.ProductId}</dd>

                <dt>Name</dt>
                <dd><input type="text" name='Name' onChange={formik.handleChange} /></dd>
                <dd className='text-danger'>{formik.errors.Name}</dd>

                <dt>Stock</dt>
                <dd><input type="checkbox"name="Stock" onChange={formik.handleChange} />Available</dd>


                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange} id="">
                        <option value="">Select City</option>
                        <option value="Hyd">Hyderabad</option>
                        <option value="Delhi">Delhi</option>

                    </select>
                </dd>
                <dd className='text-danger'> {formik.errors.City}</dd>
                
                <dt>Mobile</dt>
                <dd><input type="text"name="Mobile" onChange={formik.handleChange} /></dd>
                <dd className='text-danger'>{formik.errors.Mobile}</dd>

            </dl>
            <button type='submit'>Register</button>
        </form>

    </div>
  )
}
