import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React from "react";

export class DemoComponent extends React.PureComponent {
    render() {
        return (
            <div className="container-fluid">
                <h3>Register Product</h3>
                <Formik
                    initialValues={{ ProductId: 0, Name: "", Mobile: "" }}
                    validationSchema={yup.object({
                        ProductId: yup
                            .number()
                            .required("Product Id Required")
                            .min(1, "Product can't be zero"),
                        Name: yup
                            .string()
                            .required("Name Required")
                            .min(4, "Name too short")
                            .max(10, "Name too long"),
                        Mobile: yup
                            .string()
                            .required("Mobile Required")
                            .matches(/\+91\d{10}/, "Invalid Mobile"),
                    })}
                    onSubmit={(product) => {
                        console.log("Submitted Product:", product);
                    }}
                >
                    {({ isValid, dirty, errors }) => (
                        <Form>
                            <dl>
                                <dt>Product Id</dt>
                                <dd>
                                    <Field type="text" name="ProductId" />
                                </dd>
                                <dd>
                                    <ErrorMessage name="ProductId" component="div" className="text-danger" />
                                </dd>

                                <dt>Name</dt>
                                <dd>
                                    <Field type="text" name="Name" />
                                </dd>
                                <dd>
                                    <ErrorMessage name="Name" component="div" className="text-danger" />
                                </dd>

                                <dt>Mobile</dt>
                                <dd>
                                    <Field type="text" name="Mobile" />
                                </dd>
                                <dd>
                                    <ErrorMessage name="Mobile" component="div" className="text-danger" />
                                </dd>
                            </dl>

                            <button className="me-2" disabled={!isValid} type="submit">
                                Register
                            </button>
                            <button className={dirty ? "d-none" : "d-block"} type="button">
                                Save
                            </button>

                            {!isValid && (
                                <div className="error-summary">
                                    <h4>Please Check the following Errors:</h4>
                                    <ul>
                                        {Object.keys(errors).map((key) => (
                                            <li key={key}>{errors[key]}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}
