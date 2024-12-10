import { useFormik } from 'formik';
import React from 'react';

export default function FormikDemo() {
    function ValidateProduct(formData) {
        const error = {};

        if (formData.ProductId === 0) {
            error.ProductId = "Product Id can't be zero";
        }

        if (formData.Name.trim().length === 0) {
            error.Name = "Product Name is required";
        } else if (formData.Name.length < 4) {
            error.Name = "Name is too short";
        }

        if (formData.City === "") {
            error.City = "Please select a city";
        }

        if (formData.Mobile.trim().length === 0) {
            error.Mobile = "Mobile is required";
        } else if (!formData.Mobile.match(/^\+91\d{10}$/)) {
            error.Mobile = "Invalid Mobile: format should be +91 followed by 10 digits";
        }

        return error;
    }

    const formik = useFormik({
        initialValues: {
            ProductId: 0,
            Name: '',
            Stock: false,
            City: '',
            Mobile: ''
        },
        validate: ValidateProduct,
        onSubmit: (product) => {
            console.log("Submitted Product: ", product);
        }
    });

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register Product</h2>
                <dl>
                    <dt>Product Id</dt>
                    <dd>
                        <input
                            type="number"
                            name="ProductId"
                            value={formik.values.ProductId}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dd className="text-danger">{formik.errors.ProductId}</dd>

                    <dt>Name</dt>
                    <dd>
                        <input
                            type="text"
                            name="Name"
                            value={formik.values.Name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dd className="text-danger">{formik.errors.Name}</dd>

                    <dt>Stock</dt>
                    <dd>
                        <input
                            type="checkbox"
                            name="Stock"
                            onChange={formik.handleChange}
                            checked={formik.values.Stock}
                        /> Available
                    </dd>

                    <dt>City</dt>
                    <dd>
                        <select
                            name="City"
                            value={formik.values.City}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        >
                            <option value="">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>

                    <dt>Mobile</dt>
                    <dd>
                        <input
                            type="text"
                            name="Mobile"
                            value={formik.values.Mobile}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
