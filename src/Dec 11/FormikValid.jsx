import {Formik,Form, ErrorMessage, Field } from 'formik';
import React from 'react'
import * as yup from "yup";
export default function FormikValid() {
  return (
    <div className='container-fluid'>
        <h3>Register Product</h3>
        <Formik initialValues={{ProductId:0,Name:"",Mobile:""}}validationSchema={yup.object
        ({
            ProductId:yup
            .number()
            .required('Product Id Required')
            .min(1,"Product Id cant be Zero"),
            Name:yup
            .string()
            .required("Name Required")
            .min(4,"Name too short")
            .max(10,'Name too long'),
            Mobile:yup
            .string()
            .required("Mobile Required")
            .matches(/\+91\d{10}/,'Invalid Mobile')

        })
    }onSubmit={(product)=>{console.log(product)}}>
        <Form>
            <dl>
                <dt>ProductId</dt>
                <dd><Field type="number" name="ProductId"/></dd>
                <dd className='text-danger'><ErrorMessage name='ProductId'/></dd>

                <dt>Name</dt>
                <dd><Field type="text" name="Name"></Field></dd>
                <dd className='text-danger'><ErrorMessage name='Name'/></dd>

                <dt>Mobile</dt>
                <dd><Field type="text"name="Mobile"/></dd>
                <dd className='text-danger'><ErrorMessage name='Mobile'/></dd>
            </dl>
            <button type='submit'>Register</button>
        </Form>


    </Formik>
    
    </div>
  )
}
