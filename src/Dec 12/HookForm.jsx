import React from 'react'
import { useForm } from 'react-hook-form'

export default function HookForm() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=(values)=>{
        console.log(values);
    }
  return (
    <div className='container-fluid'>
        <form onSubmit={handleSubmit(onSubmit)}>

            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"{...register("UserName",{
                    required:{value:true, message:"UserName can not be Empty"},
                    minLength:{value:4,
                        message:"UserName above 4 chars"
                    }
                }
                    

                )} />
                {errors.UserName && <p>{errors.UserName.message}</p>}</dd>


                <dt>Select you Gender</dt>
                <dd><select name="Gender" id="" {...register("Gender",{required:"Choose your Gender"})}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Felmale</option>
                    <option value="Other">Other</option>
                    </select>
                    {errors.Gender && <p>{errors.Gender.message}</p>}
                    </dd>
                   
            </dl>
            <button type='submit'> Submit</button>
        </form>


    </div>
  )
}
