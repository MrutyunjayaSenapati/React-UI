import React from 'react';
import { useForm } from 'react-hook-form';

export default function ReactHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit(onSubmit)}>
        <dl>
          <dt>First Name</dt>
          <dd>
            <input
              type="text"
              {...register('firstName', {
                required: 'First name is required',
                minLength: { value: 3, message: 'Minimum length is 3' },
              })}
            />
            {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
          </dd>

          <dt>Last Name</dt>
          <dd>
            <input
              type="text"
              {...register('lastName', {
                required: 'Last name is required',
                minLength: { value: 3, message: 'Minimum length is 3' },
                maxLength: { value: 9, message: 'Maximum length is 9' },
              })}
            />
            {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
          </dd>

          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              {...register('mobile', {
                required: 'Mobile number is required',
                pattern: {
                  value: /^\+91\d{10}$/,
                  message: 'Mobile number must start with +91 followed by 10 digits',
                },
              })}
            />
            {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile.message}</p>}
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
